import { Box, Paper, Title, Text, Divider } from '@mantine/core';

import { Flex } from '@mantine/core';
import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from '@phosphor-icons/react/dist/ssr';
import { CONTACT_EMAIL } from './ContactPage';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

export function ContactInfo() {
  // -------- Params --------
  const { t } = useTranslation();

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------
  function ContactItem({
    icon,
    value,
    title,
  }: {
    icon: React.ReactNode;
    value: string;
    title: string;
  }) {
    return (
      <Flex direction="row" gap="md" align="center">
        <Box
          p="sm"
          bg="color-mix(in srgb, var(--color-secondary) 20%, var(--color-grey))"
          style={{
            borderRadius: 'var(--mantine-radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Flex direction="column">
          <Text c="var(--color-secondary)" fw={600}>
            {title}
          </Text>
          <Text c="var(--color-text)">{value}</Text>
        </Flex>
      </Flex>
    );
  }

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------
  return (
    <Paper shadow="xl" p="xl" bg="var(--color-grey)">
      <Title order={2} c="var(--color-text)">
        {t('contact.info.title')}
      </Title>
      <Flex direction="column" gap="md" mt="md">
        <ContactItem
          icon={<EnvelopeSimpleIcon size={24} color="var(--color-secondary)" />}
          title={t('contact.info.email')}
          value={CONTACT_EMAIL}
        />
        <ContactItem
          icon={<PhoneIcon size={24} color="var(--color-secondary)" />}
          title={t('contact.info.phone')}
          value="+33 6 12 34 56 78"
        />
        <ContactItem
          icon={<MapPinIcon size={24} color="var(--color-secondary)" />}
          title={t('contact.info.location')}
          value="Lille, France"
        />
      </Flex>
      <Divider mt="xl" color="var(--color-primary)" />
      <Flex direction="row" gap="md" mt="xl">
        <SecondaryButton
          iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
          label={t('contact.info.linkedin')}
          onClick={() =>
            window.open('https://www.linkedin.com/in/claire-merlin-062241143/', '_blank')
          }
        />
        <SecondaryButton
          iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
          label={t('contact.info.github')}
          onClick={() => window.open('https://github.com/clairemerlinpro', '_blank')}
        />
      </Flex>
    </Paper>
  );
}
