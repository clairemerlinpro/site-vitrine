import { Card, Image, Group, Text, Badge, Flex, Title } from '@mantine/core';
import React from 'react';
import { Project } from '../context/PROJECTS';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { PrimaryButton } from './Buttons/PrimaryButton';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // -------- Params --------

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
    <Card
      shadow="sm"
      padding="lg"
      bg="var(--color-grey)"
      key={project.id}
      w={{ base: '100%', md: '40%' }}
    >
      <Card.Section bg="var(--color-background)">
        <Image fit="contain" src={project.image} height={200} alt="Norway" />
      </Card.Section>

      <Flex direction="row" gap="md" mt="md" mb="md">
        {project.techStack.map((tech) => (
          <Badge key={tech} bg="var(--color-background-section)">
            {tech}
          </Badge>
        ))}
      </Flex>
      <Title order={2} c="var(--color-text)">
        {project.name}
      </Title>
      <Text c="var(--color-text)" style={{ whiteSpace: 'pre-line' }}>
        {project.description}
      </Text>
      {project.url && (
        <Flex justify="flex-start" mt="md">
          <PrimaryButton
            iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
            onClick={() => window.open(project.url, '_blank')}
            label="Voir le projet"
          />
        </Flex>
      )}
    </Card>
  );
}
