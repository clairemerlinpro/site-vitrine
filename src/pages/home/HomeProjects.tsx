import { Flex, Title, SimpleGrid } from '@mantine/core';
import React from 'react';
import { ProjectCard } from '../../components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import { PROJECTS_EN, PROJECTS_FR } from '../../context/PROJECTS';

export function HomeProjects() {
  // -------- Params --------
  const navigate = useNavigate();
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
        {t('home.projects.title')}
      </Title>

      <SimpleGrid cols={{ base: 2 }} spacing="md">
        <ProjectCard key={projects[0].id} project={projects[0]} />
        <ProjectCard key={projects[1].id} project={projects[1]} />
      </SimpleGrid>

      <Flex justify="center" mt="xl">
        <PrimaryButton
          onClick={() => navigate('/portfolio')}
          label={t('home.projects.cta')}
          iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
        />
      </Flex>
    </Flex>
  );
}
