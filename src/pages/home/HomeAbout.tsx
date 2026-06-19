import { Badge, Title, Text, Flex } from '@mantine/core';
import { ArrowRightIcon, CheckIcon } from '@phosphor-icons/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { ProfilePicture } from '../../components/ProfilePicture';

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
      <ProfilePicture />
    </Flex>
  );
}
