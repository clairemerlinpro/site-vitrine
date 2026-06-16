import React from 'react';
import { Divider, Flex, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import './Footer.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/portfolio', label: 'Portfolio' },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Flex
        direction="column"
        bg="var(--color-grey)"
        pl={40}
        pr={40}
        pt={32}
        pb={32}
        gap="md"
      >
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
              <Link key={item.label} to={item.link} className="footer-link">
                {item.label}
              </Link>
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
