import { Flex, Title, SimpleGrid } from '@mantine/core';
import React from 'react';
import { ProjectCard } from '../../components/ProjectCard';
import PROJECTS from '../../context/PROJECTS';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { ArrowRightIcon } from '@phosphor-icons/react';

export function HomeProjects() {
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
    <Flex
      bg={'var(--color-background-section'}
      pl={40}
      pr={40}
      pt={80}
      pb={80}
      gap="md"
      direction="column"
    >
      <Title order={2} c="var(--color-text)">
        Projets
      </Title>

      <SimpleGrid cols={{ base: 2 }} spacing="md">
        <ProjectCard key={PROJECTS[0].id} project={PROJECTS[0]} />
        <ProjectCard key={PROJECTS[1].id} project={PROJECTS[1]} />
      </SimpleGrid>

      <Flex justify="center" mt="xl">
        <PrimaryButton
          onClick={() => navigate('/portfolio')}
          label="Voir tous les projets"
          iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
        />
      </Flex>
    </Flex>
  );
}
