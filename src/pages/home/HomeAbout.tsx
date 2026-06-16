import { Badge, Title, Text, Flex, Image, Paper, Box, Button } from '@mantine/core';
import { ArrowRightIcon, CheckIcon } from '@phosphor-icons/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HomeAbout() {
  const navigate = useNavigate();

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
          <Button
            className="button"
            variant="light"
            rightSection={<ArrowRightIcon className="button__arrow" size={14} />}
            c="var(--color-text)"
            bg="var(--color-primary)"
            onClick={() => navigate('/portfolio')}
          >
            Voir mes projets
          </Button>
          <Button
            className="button"
            variant="default"
            bg="transparent"
            onClick={() => navigate('/contact')}
          >
            <Text c="var(--color-text)">Contact</Text>
          </Button>
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
          className="light-shadow"
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
