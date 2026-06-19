import { Title, Text, SimpleGrid } from '@mantine/core';
import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import PROJECTS from '../context/PROJECTS';
import { PageLayout } from '../components/PageLayout';

export function PortfolioPage() {
  return (
    <PageLayout padding={true} title="Mes réalisations">
      <Text c="var(--color-text)">
        Découvrez mes réalisations, des projets variés qui illustrent mon expertise technique et ma
        créativité.
      </Text>
      <SimpleGrid cols={{ base: 2, xs: 1, sm: 2, md: 3 }} spacing="md" mt="xl">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </PageLayout>
  );
}
