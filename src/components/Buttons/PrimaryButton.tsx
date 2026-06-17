import { Button } from '@mantine/core';
import React from 'react';

interface PrimaryButtonProps {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  onClick: () => void;
  label: string;
  url?: string;
}

export function PrimaryButton({ onClick, label, url, iconRight, iconLeft }: PrimaryButtonProps) {
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
      variant="light"
      rightSection={iconRight}
      leftSection={iconLeft}
      c="var(--color-text)"
      bg="var(--color-primary)"
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
