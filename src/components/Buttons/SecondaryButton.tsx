import { Button, Text } from '@mantine/core';
import React from 'react';
import './Buttons.css';

interface SecondaryButtonProps {
  onClick: () => void;
  label: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export function SecondaryButton({
  onClick,
  label,
  iconRight,
  iconLeft,
  disabled,
  loading,
}: SecondaryButtonProps) {
  // -------- Params --------

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
      className="button"
      variant="default"
      bg="transparent"
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
