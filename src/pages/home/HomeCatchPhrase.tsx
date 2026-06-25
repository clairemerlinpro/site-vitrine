import { Title, Flex, Text } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

export function HomeCatchPhrase() {
  // -------- Params --------
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
      bg={'var(--color-background-section'}
      px={{ base: 16, sm: 40 }}
      py={{ base: 40, sm: 80 }}
      gap="md"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      w="100%"
      miw={0}
      role="section"
      aria-label={t('home.catchPhrase.ariaLabel')}
    >
      <Title order={2} c="var(--color-text)">
        {t('home.catchPhrase.titlePart1')}
        <Text span c={'var(--color-secondary'} inherit>
          {t('home.catchPhrase.titleHighlight')}
        </Text>
      </Title>
      <Flex direction="column" gap="md">
        <Text c="var(--color-text)">
          {t('home.catchPhrase.paragraph1Part1')}
          <Text fw={600} span c={'var(--color-secondary'} inherit>
            {t('home.catchPhrase.paragraph1Highlight')}
          </Text>{' '}
          {t('home.catchPhrase.paragraph1Part2')}
        </Text>
        <Text c="var(--color-text)">{t('home.catchPhrase.paragraph2')}</Text>
      </Flex>
    </Flex>
  );
}
