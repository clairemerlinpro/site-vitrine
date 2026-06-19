import { Paper, Flex, Image, Text } from '@mantine/core';
import { TechStack } from '../context/TECHSTACKS';
import React from 'react';

interface TechStackCardProps {
  tech: TechStack;
}
export function TechStackCard({ tech }: TechStackCardProps) {
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
    <Paper bg={'var(--color-grey)'}>
      <Flex direction={'column'} justify={'center'} align="center" p="md" h="200" gap="md">
        <Image radius="md" w={100} h={100} src={tech.icon} fit="contain" />
        <Text fw={600} c="var(--color-text)" ta="center">
          {tech.name}
        </Text>
      </Flex>
    </Paper>
  );
}
