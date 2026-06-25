import { Button, Text } from '@mantine/core';
import React from 'react';
import './Buttons.css';
import { useTheme } from '../../context/ThemeContext';

interface SecondaryButtonProps {
  onClick: () => void;
  label: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  ariaLabel: string;
}

export function SecondaryButton({
  onClick,
  label,
  iconRight,
  iconLeft,
  disabled,
  loading,
  ariaLabel,
}: SecondaryButtonProps) {
  // -------- Params --------
  const { theme } = useTheme();

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
  const isInactive = disabled || loading;

  return (
    <Button
      role="button"
      aria-label={ariaLabel}
      className="button"
      variant="default"
      bg={theme === 'dark' ? 'transparent' : 'var(--color-white)'}
      onClick={onClick}
      c="var(--color-text)"
      rightSection={iconRight}
      leftSection={iconLeft}
      disabled={isInactive}
      loading={loading}
    >
      <Text c="inherit">{label}</Text>
    </Button>
  );
}
