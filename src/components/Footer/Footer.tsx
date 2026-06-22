import React from 'react';
import { Divider, Flex, Group, Text } from '@mantine/core';
import './Footer.css';
import { LogoDark } from '../Logo/LogoDark';

const links = [
  { link: 'https://www.linkedin.com/in/claire-merlin-062241143/', label: 'LinkedIn' },
  { link: 'https://github.com/clairemerlinpro', label: 'GitHub' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Flex direction="column" bg="var(--color-grey)" pl={40} pr={40} pb={40} gap="md">
        <Flex
          direction="row"
          align="center"
          wrap="wrap"
          gap="md"
          h={80}
          style={{ justifyContent: 'space-between' }}
        >
          <LogoDark width={200} />
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
