import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { Badge, Title, Text, Flex } from '@mantine/core';
import { CheckIcon } from '@phosphor-icons/react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const CONTACT_EMAIL = 'clairemerlinpro@outlook.fr';

export function ContactPage() {
  // -------- Params --------

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
        DISPONIBLE POUR NOUVEAUX PROJETS
      </Badge>
      <Title c="var(--color-text)" order={1} fw={800}>
        Let's build something{' '}
        <Text span fw={800} size="var(--mantine-h1-font-size)" c="var(--color-secondary)">
          extraordinary
        </Text>{' '}
        together.
      </Title>
      <Text c="var(--color-text)">
        Whether you have a specific project in mind or just want to explore possibilities, I'm
        always open to discussing high-performance engineering challenges.
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} gap="md" mt="xl" align="stretch">
        <ContactForm />
        <ContactInfo />
      </Flex>
    </PageLayout>
  );
}
