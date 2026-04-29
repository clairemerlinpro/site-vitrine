import React, { useEffect, useState } from 'react';
import { Burger, Divider, Drawer, Flex, Group, ScrollArea, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import './HeaderMenu.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/portfolio', label: 'Portfolio' },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' },
];

export function HeaderMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname || links[0].link);

  useEffect(() => {
    setActive(location.pathname || links[0].link);
  }, [location.pathname]);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className="link"
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Flex direction="row" align="center" bg="var(--color-grey)" h={80} pl={40} pr={40} style={{ justifyContent: 'space-between' }}>
      <Flex direction="row" align="center" gap={20}>
      <Text size="xl" fw={800} c="var(--color-secondary)">{`</>`}</Text>
      <Text size='xl' fw={400} c="var(--color-text)">CLAIRE MERLIN</Text>
      </Flex>
        <Group gap={8} visibleFrom="xs">
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
          aria-label="Toggle navigation"
        />

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="xs"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          {items}
        </ScrollArea>
      </Drawer>
    </Flex>
  );
}