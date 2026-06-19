import React from 'react';
import { Flex } from '@mantine/core';

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex bg="var(--color-background)" flex={1} direction="column">
      {children}
    </Flex>
  );
}
