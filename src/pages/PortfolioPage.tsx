import { Flex, Title, Text, SimpleGrid } from '@mantine/core';
import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import PROJECTS from '../context/PROJECTS';

export function PortfolioPage() {
  return (
    <Flex direction="column" gap="md" pl={40} pr={40} pt={80} pb={80}>
      <Title c="var(--color-text)" order={1} fw={800}>
        Mes réalisations
      </Title>
      <Text c="var(--color-text)">
        Découvrez mes réalisations, des projets variés qui illustrent mon expertise technique et ma
        créativité.
      </Text>
      <SimpleGrid cols={{ base: 2, xs: 1, sm: 2, md: 3 }} spacing="md">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
