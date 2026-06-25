import React from 'react';
import { Flex, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import './PageLayout.css';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  padding?: boolean;
}

export function SkipToContentLink() {
  // -------- Params --------
  const { t } = useTranslation();

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------
  return (
    <a href="#main" className="skip-link">
      {t('accessibility.skipToContent')}
    </a>
  );

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------
}

export function PageLayout({ children, padding, title }: PageLayoutProps) {
  // -------- Params --------
  const { t } = useTranslation();

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
      component="main"
      id="main"
      role="main"
      aria-label={t('accessibility.mainContentLabel')}
      tabIndex={-1}
      bg="var(--color-background)"
      flex={1}
      direction="column"
      w="100%"
      miw={0}
      px={padding ? { base: 16, sm: 40 } : 0}
      pt={padding ? { base: 40, sm: 80 } : 0}
      pb={padding ? { base: 40, sm: 80 } : 0}
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
