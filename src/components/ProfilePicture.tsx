import { Box, Image, Paper, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export function ProfilePicture() {
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
    <Box pos="relative" visibleFrom="sm" w={400} mb={24}>
      <Image
        className="light-shadow"
        radius="md"
        w={400}
        h={400}
        src={require('../assets/photo.jpg')}
        aria-hidden="true"
      />
      <Paper
        p="md"
        pos="absolute"
        bottom={-16}
        left={-16}
        c="var(--color-text)"
        bg="var(--color-grey)"
      >
        <Text fw={600}>{t('profilePicture.experience')}</Text>
      </Paper>
    </Box>
  );
}
