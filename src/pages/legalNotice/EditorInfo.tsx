import { Flex, Paper, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { InfoItem } from '../../components/InfoItem';
import {
  BuildingOfficeIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from '@phosphor-icons/react';

export function EditorInfo() {
  // -------- Params --------
  const { t } = useTranslation();

  // -------- States & Refs --------

  // -------- Init --------
  const editorInfo = [
    {
      icon: <UserIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.editor.name'),
      value: 'Merlin Claire',
    },
    {
      icon: <BuildingOfficeIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.editor.legalStatus.title'),
      value: t('legalNotice.sections.editor.legalStatus.value'),
    },
    {
      icon: <MapPinIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.editor.address'),
      value: 'Lille, France',
    },
    {
      icon: <BuildingOfficeIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.editor.siren'),
      value: '101890606',
    },
    {
      icon: <BuildingOfficeIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.editor.vat'),
      value: 'FR95101890606',
    },
    {
      icon: <PhoneIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.editor.phone'),
      value: '+33 6 38 51 86 92',
    },
    {
      icon: <EnvelopeSimpleIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.editor.email'),
      value: 'clairemerlinpro@outlook.fr',
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
    <Flex direction="column" gap="md">
      <Paper shadow="xl" p="xl" bg="var(--color-grey)">
        <SimpleGrid cols={{ base: 1, xs: 1, sm: 2 }} spacing="md">
          {editorInfo.map((item) => (
            <InfoItem key={item.title} {...item} />
          ))}
        </SimpleGrid>
      </Paper>
    </Flex>
  );
}
