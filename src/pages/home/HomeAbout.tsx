import { Badge, Title, Text, Flex, Image, Paper, Box } from '@mantine/core';
import { ArrowRightIcon, CheckIcon } from '@phosphor-icons/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';

export function HomeAbout() {
  // -------- Params --------
  const navigate = useNavigate();

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
          DISPONIBLE POUR NOUVEAUX PROJETS
        </Badge>
        <Title c="var(--color-text)" order={1} fw={800}>
          CLAIRE MERLIN : Dev Freelance • Web & Mobile | Natif & Hybride • Accessibilité RGAA
        </Title>
        <Title c="var(--color-text)" order={2}>
          Swift | React Native | React | Next.js
        </Title>
        <Text c="var(--color-text)">
          Conception d'interfaces hautes performances et d'expériences utilisateur fluides.
          Spécialisée dans les écosystèmes React et iOS.
        </Text>
        <Flex direction="row" gap="md" mt="md">
          <PrimaryButton
            iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
            onClick={() => navigate('/portfolio')}
            label="Voir mes projets"
          />
          <SecondaryButton
            onClick={() => navigate('/contact')}
            label="Contact"
            iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
          />
        </Flex>
      </Flex>
      <Box pos="relative" visibleFrom="sm" w={400} mb={24}>
        <Image
          className="light-shadow"
          radius="md"
          w={400}
          h={400}
          src={require('../../assets/photo.jpg')}
        />
        <Paper
          p="md"
          pos="absolute"
          bottom={-16}
          left={-16}
          c="var(--color-text)"
          bg="var(--color-grey)"
        >
          <Text fw={600}>6+ ans d'expérience</Text>
        </Paper>
      </Box>
    </Flex>
  );
}
