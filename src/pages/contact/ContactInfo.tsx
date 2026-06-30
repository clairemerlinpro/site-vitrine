import { Paper, Title, Divider, Box } from '@mantine/core';
import { Flex } from '@mantine/core';
import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from '@phosphor-icons/react/dist/ssr';
import { CONTACT_EMAIL } from './ContactPage';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { ArrowRightIcon, CalendarIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import { InfoItem } from '../../components/InfoItem';
import { ResumeButton } from '../../components/Buttons/ResumeButton';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';

export function ContactInfo() {
  // -------- Params --------
  const { t } = useTranslation();

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------
  const infoItems = [
    {
      icon: <EnvelopeSimpleIcon size={24} color="var(--color-secondary)" />,
      title: t('contact.info.email'),
      value: CONTACT_EMAIL,
    },
    {
      icon: <PhoneIcon size={24} color="var(--color-secondary)" />,
      title: t('contact.info.phone'),
      value: '+33 6 38 51 86 92',
    },
    {
      icon: <MapPinIcon size={24} color="var(--color-secondary)" />,
      title: t('contact.info.location'),
      value: 'Lille, France',
    },
  ];

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------
  return (
    <Paper shadow="xl" p="xl" bg="var(--color-grey)">
      <Title order={2} c="var(--color-text)">
        {t('contact.info.title')}
      </Title>
      <Flex direction="column" gap="md" my="md" role="list" aria-label={t('contact.info.title')}>
        {infoItems.map((item) => (
          <InfoItem key={item.title} {...item} role="listitem" aria-label={item.title} />
        ))}
      </Flex>
      <PrimaryButton
        ariaLabel={t('contact.info.bookMeeting')}
        label={t('contact.info.bookMeeting')}
        iconRight={<CalendarIcon className="button_icon" size={14} />}
        onClick={() => window.open('https://doodle.com/bp/clairemerlin/meetings', '_blank')}
      />
      <Divider mt="xl" color="var(--color-primary)" />
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap="md"
        mt="xl"
        wrap="wrap"
        role="list"
        aria-label={t('contact.info.buttons')}
      >
        <SecondaryButton
          ariaLabel={t('contact.info.linkedin')}
          iconRight={<ArrowRightIcon className="button_icon" size={14} />}
          label={t('contact.info.linkedin')}
          onClick={() =>
            window.open('https://www.linkedin.com/in/claire-merlin-062241143/', '_blank')
          }
        />
        <SecondaryButton
          ariaLabel={t('contact.info.github')}
          iconRight={<ArrowRightIcon className="button_icon" size={14} />}
          label={t('contact.info.github')}
          onClick={() => window.open('https://github.com/clairemerlinpro', '_blank')}
        />
      </Flex>
      <Box w="fit-content" my="md">
        <ResumeButton />
      </Box>
    </Paper>
  );
}
