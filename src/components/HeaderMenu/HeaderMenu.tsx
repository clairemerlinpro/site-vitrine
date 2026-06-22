import React, { useEffect, useState } from 'react';
import { Burger, Divider, Drawer, Flex, Group, ScrollArea, Text } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import './HeaderMenu.css';
import { LanguageSwitch } from '../Buttons/LanguageSwitch';
import { useTranslation } from 'react-i18next';

export function HeaderMenu() {
  // -------- Params --------
  const { t } = useTranslation();
  const [{ y: scrollY }] = useWindowScroll();
  const location = useLocation();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(location.pathname || '/');

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------
  const links = [
    { link: '/', label: t('headerMenu.home') },
    { link: '/portfolio', label: t('headerMenu.portfolio') },
    { link: '/about', label: t('headerMenu.about') },
    { link: '/contact', label: t('headerMenu.contact') },
  ];

  // -------- Effects --------
  useEffect(() => {
    setActive(location.pathname || '/');
  }, [location.pathname]);

  // -------- Renderers --------
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

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------

  return (
    <Flex
      className={`header-menu${scrollY > 0 ? ' header-menu--scrolled' : ''}`}
      direction="row"
      align="center"
      bg="var(--color-grey)"
      h={80}
      pl={40}
      pr={40}
      style={{ justifyContent: 'space-between' }}
    >
      <Flex direction="row" align="center" gap={20}>
        <Text size="xl" fw={800} c="var(--color-secondary)">{`</>`}</Text>
        <Text size="xl" fw={400} c="var(--color-text)">
          CLAIRE MERLIN
        </Text>
      </Flex>
      <Group gap={8} visibleFrom="sm">
        {items}
      </Group>
      <LanguageSwitch />
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        aria-label="Toggle navigation"
      />

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
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
