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
      px={{ base: 16, sm: 40 }}
      py={{ base: 40, sm: 80 }}
      gap="md"
      direction="column"
      w="100%"
      miw={0}
      role="section"
      aria-label={t('home.projects.title')}
    >
      <Title order={2} c="var(--color-text)">
        {t('home.projects.title')}
      </Title>

      <SimpleGrid
        cols={{ base: 1, xs: 2 }}
        spacing="md"
        role="list"
        aria-label={t('home.projects.title')}
      >
        <ProjectCard
          key={projects[0].id}
          project={projects[0]}
          role="listitem"
          aria-label={projects[0].name}
        />
        <ProjectCard
          key={projects[1].id}
          project={projects[1]}
          role="listitem"
          aria-label={projects[1].name}
        />
      </SimpleGrid>

      <Flex justify="center" mt="xl">
        <PrimaryButton
          ariaLabel={t('home.projects.cta')}
          onClick={() => navigate('/portfolio')}
          label={t('home.projects.cta')}
          iconRight={<ArrowRightIcon className="button_icon" size={14} />}
        />
      </Flex>
    </Flex>
  );
}
