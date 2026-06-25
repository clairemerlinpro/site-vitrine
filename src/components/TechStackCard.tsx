import { Paper, Flex, Image, Text } from '@mantine/core';
import { TechStack } from '../context/TECHSTACKS';
import React from 'react';

interface TechStackCardProps {
  tech: TechStack;
  titleId?: string;
  role?: string;
  ariaLabel?: string;
}
export function TechStackCard({ tech, titleId, role, ariaLabel }: TechStackCardProps) {
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
    <Paper bg={'var(--color-grey)'} role={role} aria-label={ariaLabel}>
      <Flex direction={'column'} justify={'center'} align="center" p="md" h="200" gap="md">
        <Image radius="md" w={100} h={100} src={tech.icon} fit="contain" aria-hidden="true" />
        <Text id={titleId} fw={600} c="var(--color-text)" ta="center">
          {tech.name}
        </Text>
      </Flex>
    </Paper>
  );
}
