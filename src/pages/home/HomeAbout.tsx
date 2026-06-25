import { Badge, Title, Text, Flex } from '@mantine/core';
import { ArrowRightIcon, CheckIcon } from '@phosphor-icons/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { ProfilePicture } from '../../components/ProfilePicture';
import { useTranslation } from 'react-i18next';
import { ResumeButton } from '../../components/Buttons/ResumeButton';

export function HomeAbout() {
  // -------- Params --------
  const navigate = useNavigate();
  const { t } = useTranslation();

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------
  return (
    <Flex
      role="section"
      aria-label={t('home.about.ariaLabel')}
      direction={{ base: 'column', md: 'row' }}
      gap="xl"
      align="center"
      px={{ base: 16, sm: 40 }}
      py={{ base: 40, sm: 80 }}
      w="100%"
      miw={0}
    >
      <Flex direction="column" mt="md" miw={0} flex={1}>
        <Badge autoContrast color="var(--color-green)" leftSection={<CheckIcon />} mb="md">
          {t('home.about.badge')}
        </Badge>
        <Title c="var(--color-text)" order={1} fw={800} role="heading" aria-level={1}>
          {t('home.about.title')}
        </Title>
        <Title c="var(--color-text)" order={2} role="text">
          {t('home.about.techStack')}
        </Title>
        <Text c="var(--color-text)">{t('home.about.description')}</Text>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap="md"
          mt="md"
          wrap="wrap"
          align="flex-start"
        >
          <PrimaryButton
            ariaLabel={t('home.about.primaryCta')}
            iconRight={<ArrowRightIcon className="button_icon" size={14} />}
            onClick={() => navigate('/portfolio')}
            label={t('home.about.primaryCta')}
          />
          <SecondaryButton
            ariaLabel={t('home.about.secondaryCta')}
            onClick={() => navigate('/contact')}
            label={t('home.about.secondaryCta')}
            iconRight={<ArrowRightIcon className="button_icon" size={14} />}
          />
          <ResumeButton />
        </Flex>
      </Flex>
      <ProfilePicture />
    </Flex>
  );
}
