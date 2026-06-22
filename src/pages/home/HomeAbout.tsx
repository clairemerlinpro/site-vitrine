import { Badge, Title, Text, Flex } from '@mantine/core';
import { ArrowRightIcon, CheckIcon } from '@phosphor-icons/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { ProfilePicture } from '../../components/ProfilePicture';
import { useTranslation } from 'react-i18next';

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
    <Flex direction="row" gap="xl" align="center" pl={40} pr={40} pt={80} pb={80}>
      <Flex direction="column" mt="md">
        <Badge autoContrast color="var(--color-green)" leftSection={<CheckIcon />} mb="md">
          {t('home.about.badge')}
        </Badge>
        <Title c="var(--color-text)" order={1} fw={800}>
          {t('home.about.title')}
        </Title>
        <Title c="var(--color-text)" order={2}>
          {t('home.about.techStack')}
        </Title>
        <Text c="var(--color-text)">{t('home.about.description')}</Text>
        <Flex direction="row" gap="md" mt="md">
          <PrimaryButton
            iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
            onClick={() => navigate('/portfolio')}
            label={t('home.about.primaryCta')}
          />
          <SecondaryButton
            onClick={() => navigate('/contact')}
            label={t('home.about.secondaryCta')}
            iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
          />
        </Flex>
      </Flex>
      <ProfilePicture />
    </Flex>
  );
}
