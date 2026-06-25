import React, { useEffect, useState } from 'react';
import { Burger, Divider, Drawer, Flex, Group } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import './HeaderMenu.css';
import { LanguageSwitch } from '../Buttons/LanguageSwitch';
import { ThemeSwitch } from '../Buttons/ThemeSwitch';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';

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
    <header role="banner" aria-label={t('headerMenu.ariaLabel')}>
      <Flex
        className={`header-menu${scrollY > 0 ? ' header-menu--scrolled' : ''}`}
        direction="row"
        align="center"
        bg="var(--color-grey)"
        h={80}
        w="100%"
        miw={0}
        px={{ base: 16, sm: 40 }}
        style={{ justifyContent: 'space-between', boxSizing: 'border-box' }}
      >
        <Flex justify="flex-start" direction="row">
          <Logo height={60} width="auto" />
        </Flex>
        <nav role="navigation" aria-label={t('headerMenu.ariaLabel')}>
          <Group gap={8} visibleFrom="md">
            {items}
          </Group>
        </nav>
        <Group visibleFrom="md">
          <ThemeSwitch />
          <LanguageSwitch />
        </Group>
        <Burger
          color="var(--color-text)"
          opened={opened}
          onClick={toggle}
          hiddenFrom="md"
          size="sm"
          aria-label="Toggle navigation"
        />

        <Drawer
          opened={opened}
          onClose={close}
          position="right"
          size="lg"
          padding="md"
          hiddenFrom="md"
          zIndex={1000000}
          classNames={{ close: 'header-menu-drawer-close' }}
          styles={{
            content: { backgroundColor: 'var(--color-grey)' },
            header: { backgroundColor: 'var(--color-grey)' },
            body: { backgroundColor: 'var(--color-grey)' },
          }}
        >
          <Flex direction="column" p="md">
            <Flex direction="row" justify="flex-end" gap="sm" align="center">
              <ThemeSwitch />
              <LanguageSwitch />
            </Flex>
            <Divider my="sm" />
            <nav role="navigation" aria-label={t('headerMenu.ariaLabel')}>
              {items}
            </nav>
          </Flex>
        </Drawer>
      </Flex>
    </header>
  );
}
