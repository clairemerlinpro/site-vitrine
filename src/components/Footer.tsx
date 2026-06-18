import React from 'react';
import { Divider, Flex, Group, Text } from '@mantine/core';
import './Footer.css';

const links = [
  { link: 'https://www.linkedin.com/in/claire-merlin-062241143/', label: 'LinkedIn' },
  { link: 'https://github.com/clairemerlinpro', label: 'GitHub' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Flex direction="column" bg="var(--color-grey)" pl={40} pr={40} pt={32} pb={32} gap="md">
        <Flex
          direction="row"
          align="center"
          wrap="wrap"
          gap="md"
          style={{ justifyContent: 'space-between' }}
        >
          <Flex direction="row" align="center" gap={12}>
            <Text size="lg" fw={800} c="var(--color-secondary)">{`</>`}</Text>
            <Text size="lg" fw={400} c="var(--color-text)">
              CLAIRE MERLIN
            </Text>
          </Flex>

          <Group gap={8}>
            {links.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </Group>
        </Flex>

        <Divider color="var(--color-primary)" />

        <Text size="sm" c="var(--color-secondary)">
          © {year} Claire Merlin. Tous droits réservés.
        </Text>
      </Flex>
    </footer>
  );
}
