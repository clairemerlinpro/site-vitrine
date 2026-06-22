import { Card, Image, Text, Badge, Flex, Title } from '@mantine/core';
import React from 'react';
import { Project } from '../context/PROJECTS';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { PrimaryButton } from './Buttons/PrimaryButton';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
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
    <Card shadow="sm" padding="lg" bg="var(--color-grey)" key={project.id} w="100%">
      {project.image && (
        <Card.Section bg="white">
          <Image fit="contain" src={project.image} height={200} />
        </Card.Section>
      )}

      <Flex direction="row" gap="md" mt="md" mb="md" wrap="wrap">
        {project.techStack.map((tech) => (
          <Badge
            key={tech}
            bg="color-mix(in srgb, var(--color-secondary) 40%, var(--color-grey))"
            color="var(--color-text)"
          >
            {tech}
          </Badge>
        ))}
      </Flex>
      <Flex direction="column" justify="space-between" flex={1}>
        <div>
          <Title order={2} c="var(--color-text)">
            {project.name}
          </Title>
          <Text c="var(--color-text)" style={{ whiteSpace: 'pre-line' }}>
            {project.description}
          </Text>
        </div>
        {project.url && (
          <Flex justify="flex-start" mt="md">
            <PrimaryButton
              iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
              onClick={() => window.open(project.url, '_blank')}
              label={t('projectCard.viewProject')}
            />
          </Flex>
        )}
      </Flex>
    </Card>
  );
}
