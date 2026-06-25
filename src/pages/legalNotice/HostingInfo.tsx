import { BuildingOfficeIcon, GlobeIcon, MapPinIcon } from '@phosphor-icons/react';
import { InfoItem } from '../../components/InfoItem';
import { useTranslation } from 'react-i18next';
import { Flex, Paper } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';

export function HostingInfo() {
  // -------- Params --------
  const { t } = useTranslation();

  // -------- States & Refs --------

  // -------- Init --------
  const hostingInfo = [
    {
      icon: <BuildingOfficeIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.hosting.name'),
      value: 'Hosting provider',
    },
    {
      icon: <MapPinIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.hosting.address'),
      value: 'OVH, 2 rue Kellermann, 59100 Roubaix, France',
    },
    {
      icon: <GlobeIcon size={24} color="var(--color-secondary)" />,
      title: t('legalNotice.sections.hosting.website'),
      value: 'https://www.ovh.com',
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
          {hostingInfo.map((item) => (
            <InfoItem key={item.title} {...item} />
          ))}
        </SimpleGrid>
      </Paper>
    </Flex>
  );
}
