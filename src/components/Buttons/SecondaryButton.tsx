import { Button, Text } from '@mantine/core';
import React from 'react';

interface SecondaryButtonProps {
  onClick: () => void;
  label: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export function SecondaryButton({ onClick, label, iconRight, iconLeft }: SecondaryButtonProps) {
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
  return (
    <Button
      className="button"
      variant="default"
      bg="transparent"
      onClick={onClick}
      c="var(--color-text)"
      rightSection={iconRight}
      leftSection={iconLeft}
    >
      <Text c="var(--color-text)">{label}</Text>
    </Button>
  );
}
