import { Flex, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import type { EmblaCarouselType } from 'embla-carousel';
import { useEffect, useState } from 'react';
import { TECHSTACKS_EN, TECHSTACKS_FR } from '../../context/TECHSTACKS';
import { TechStackCard } from '../../components/TechStackCard';
import { useTranslation } from 'react-i18next';

const AUTOPLAY_DELAY_MS = 2000;

export function HomeTechStack() {
  // -------- Params --------
  const { t, i18n } = useTranslation();

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------
  const techStacks = i18n.language === 'fr' ? TECHSTACKS_FR : TECHSTACKS_EN;
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (!embla) return;

    const interval = window.setInterval(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      embla.scrollNext();
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(interval);
  }, [embla]);

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------

  return (
    <Flex
      px={{ base: 16, sm: 40 }}
      py={{ base: 40, sm: 80 }}
      gap="md"
      direction="column"
      w="100%"
      miw={0}
      style={{ overflow: 'hidden' }}
      role="section"
      aria-label={t('home.techStack.title')}
    >
      <Title order={2} c="var(--color-text)">
        {t('home.techStack.title')}
      </Title>
      <Carousel
        height={200}
        slideSize={{ base: '100%', xs: '60%', sm: '40%', md: '20%' }}
        slideGap="md"
        getEmblaApi={setEmbla}
        emblaOptions={{ loop: true, align: 'start' }}
      >
        {techStacks.map((item) => (
          <Carousel.Slide key={item.id}>
            <TechStackCard tech={item} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
}
