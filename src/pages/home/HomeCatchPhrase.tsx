import { Title, Flex, Text } from '@mantine/core';
import React from 'react';

export function HomeCatchPhrase() {
  return (
    <Flex bg={'var(--color-grey'} pl={40} pr={40} pt={80} pb={80} gap="md" align="center">
      <Title order={2} c="var(--color-text)">
        L'excellence technique au service de l'
        <Text span c={'var(--color-secondary'} inherit>
          innovation
        </Text>
      </Title>
      <Flex direction="column" gap="md">
        <Text c="var(--color-text)">
          Passionnée par le{' '}
          <Text fw={600} span c={'var(--color-secondary'} inherit>
            pixel-perfect design
          </Text>{' '}
          et les interfaces centrées sur l'utilisateur, je transforme vos idées complexes en
          applications fluides et intuitives.
        </Text>
        <Text c="var(--color-text)">
          Chaque ligne de code est pensée pour la performance et la maintenabilité. Mon approche
          combine rigueur technique et sensibilité esthétique pour créer des produits digitaux qui
          marquent les esprits.
        </Text>
      </Flex>
    </Flex>
  );
}
