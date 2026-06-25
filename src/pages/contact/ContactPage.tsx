import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { Badge, Title, Text, Flex } from '@mantine/core';
import { CheckIcon } from '@phosphor-icons/react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { useTranslation } from 'react-i18next';

export const CONTACT_EMAIL = 'clairemerlinpro@outlook.fr';

export function ContactPage() {
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
    <PageLayout padding={true}>
      <Badge autoContrast color="var(--color-green)" leftSection={<CheckIcon />} mb="md">
        {t('contact.badge')}
      </Badge>
      <Title c="var(--color-text)" order={1} fw={800}>
        {t('contact.title.part1')}
        <Text span fw={800} size="var(--mantine-h1-font-size)" c="var(--color-secondary)">
          {t('contact.title.highlight')}
        </Text>{' '}
        {t('contact.title.part2')}
      </Title>
      <Text c="var(--color-text)">{t('contact.description')}</Text>
      <Flex direction={{ base: 'column', md: 'row' }} gap="md" mt="xl" align="stretch">
        <ContactForm />
        <ContactInfo />
      </Flex>
    </PageLayout>
  );
}
