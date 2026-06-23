import { Text, SimpleGrid } from '@mantine/core';
import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS_EN, PROJECTS_FR } from '../context/PROJECTS';
import { PageLayout } from '../components/PageLayout';
import { useTranslation } from 'react-i18next';

export function PortfolioPage() {
  // -------- Params --------
  const { t, i18n } = useTranslation();

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------
  const projects = i18n.language === 'fr' ? PROJECTS_FR : PROJECTS_EN;

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------
  return (
    <PageLayout padding={true} title={t('portfolio.title')}>
      <Text c="var(--color-text)">{t('portfolio.description')}</Text>
      <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 3 }} spacing="md" mt="xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </PageLayout>
  );
}
