import React from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import '../../index.css';
import { HomeAbout } from './HomeAbout';
import { HomeCatchPhrase } from './HomeCatchPhrase';
import { HomeTechStack } from './HomeTechStack';
import { HomeProjects } from './HomeProjects';
import { Flex, Title, Text } from '@mantine/core';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

export function HomePage() {
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
    <PageLayout>
      <HomeAbout />
      <HomeCatchPhrase />
      <HomeTechStack />
      <HomeProjects />
      <Flex
        role="section"
        aria-label={t('home.contact.ariaLabel')}
        px={{ base: 16, sm: 40 }}
        py={{ base: 40, sm: 80 }}
        gap="md"
        direction="column"
        justify="center"
        align="center"
        w="100%"
        miw={0}
      >
        <Title c="var(--color-text)" order={1} fw={800} ta="center">
          {t('home.contact.title')}
        </Title>
        <Text c="var(--color-text)" ta="center">
          {t('home.contact.description')}
        </Text>
        <SecondaryButton
          onClick={() => navigate('/contact')}
          label={t('home.contact.cta')}
          iconRight={<ArrowRightIcon className="button_icon" size={14} />}
        />
      </Flex>
    </PageLayout>
  );
}
