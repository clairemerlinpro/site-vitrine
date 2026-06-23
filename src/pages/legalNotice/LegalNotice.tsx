import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, Flex, Text, Title } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../components/PageLayout';
import './LegalNotice.css';
import { EditorInfo } from './EditorInfo';
import { HostingInfo } from './HostingInfo';

const SECTION_IDS = [
  'editor',
  'hosting',
  'intellectualProperty',
  'personalData',
  'cookies',
] as const;

type SectionId = (typeof SECTION_IDS)[number];

type LegalSection = {
  id: SectionId;
  title: string;
  body: React.ReactNode;
};

const HEADER_SCROLL_OFFSET = 20;

export function LegalNotice() {
  // -------- Params --------
  const { t, i18n } = useTranslation();

  // -------- States & Refs --------
  const [clickedSection, setClickedSection] = useState<SectionId | null>(null);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reinitializeRef = useRef<() => void>(() => {});

  // -------- Init --------
  const sections: LegalSection[] = useMemo(
    () => [
      {
        id: 'editor',
        title: t('legalNotice.sections.editor.title'),
        body: <EditorInfo />,
      },
      {
        id: 'hosting',
        title: t('legalNotice.sections.hosting.title'),
        body: <HostingInfo />,
      },
      {
        id: 'intellectualProperty',
        title: t('legalNotice.sections.intellectualProperty.title'),
        body: (
          <Text c="var(--color-text)" className="legal-notice-body">
            {t('legalNotice.sections.intellectualProperty.body')}
          </Text>
        ),
      },
      {
        id: 'personalData',
        title: t('legalNotice.sections.personalData.title'),
        body: (
          <Text c="var(--color-text)" className="legal-notice-body">
            {t('legalNotice.sections.personalData.body')}
          </Text>
        ),
      },
      {
        id: 'cookies',
        title: t('legalNotice.sections.cookies.title'),
        body: (
          <Text c="var(--color-text)" className="legal-notice-body">
            {t('legalNotice.sections.cookies.body')}
          </Text>
        ),
      },
    ],
    [t]
  );

  // -------- Helpers --------

  const { active, data, reinitialize } = useScrollSpy({
    selector: '#legal-notice h2',
    offset: HEADER_SCROLL_OFFSET,
  });

  // -------- Callbacks --------
  reinitializeRef.current = reinitialize;

  // -------- Effects --------
  useEffect(() => {
    reinitializeRef.current();
  }, [i18n.language, sections]);

  useEffect(() => {
    const clearClickedSection = () => {
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = setTimeout(() => setClickedSection(null), 400);
    };

    window.addEventListener('scroll', clearClickedSection, { passive: true });
    return () => {
      window.removeEventListener('scroll', clearClickedSection);
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    };
  }, []);

  // -------- Renderers --------
  const activeSectionId: SectionId =
    clickedSection ?? (data[active]?.id as SectionId) ?? sections[0].id;

  const scrollToSection = (sectionId: SectionId) => {
    const node = document.getElementById(sectionId);
    if (!node) return;

    setClickedSection(sectionId);
    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const tocItems =
    data.length > 0
      ? data.map((item) => ({
          id: item.id as SectionId,
          label: item.value,
        }))
      : sections.map(({ id, title }) => ({ id, label: title }));

  // -------- Main renderer --------
  return (
    <PageLayout padding={true}>
      <Title order={1} c="var(--color-text)">
        {t('legalNotice.title')}
      </Title>

      <Flex
        className="legal-notice-layout"
        direction={{ base: 'column', md: 'row' }}
        align="flex-start"
        gap="xl"
        w="100%"
        miw={0}
      >
        <Box component="nav" aria-label={t('legalNotice.tocLabel')} className="legal-notice-toc">
          <Text fw={600} c="var(--color-secondary)" mb="sm">
            {t('legalNotice.tocLabel')}
          </Text>
          <Flex direction="column" gap="xs">
            {tocItems.map((item) => (
              <Button
                key={item.id}
                variant="subtle"
                className="legal-notice-button"
                justify="flex-start"
                data-active={activeSectionId === item.id || undefined}
                aria-current={activeSectionId === item.id ? 'location' : undefined}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Flex>
        </Box>

        <Box id="legal-notice" className="legal-notice-content" flex={1} miw={0}>
          {sections.map(({ id, title, body }) => (
            <section key={id} className="legal-notice-section" aria-labelledby={id}>
              <Title order={2} id={id} c="var(--color-text)" mb="sm" pt="xl">
                {title}
              </Title>
              {body}
            </section>
          ))}
        </Box>
      </Flex>
    </PageLayout>
  );
}
