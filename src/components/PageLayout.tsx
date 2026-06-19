import React from 'react';
import { Flex, Title } from '@mantine/core';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  padding?: boolean;
}

export function PageLayout({ children, padding, title }: PageLayoutProps) {
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
    <Flex
      bg="var(--color-background)"
      flex={1}
      direction="column"
      pl={padding ? 40 : 0}
      pr={padding ? 40 : 0}
      pt={padding ? 80 : 0}
      pb={padding ? 80 : 0}
    >
      {title && (
        <Title c="var(--color-text)" order={1} fw={800}>
          {title}
        </Title>
      )}
      {children}
    </Flex>
  );
}
