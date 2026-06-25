import { Button } from '@mantine/core';
import React from 'react';
import './Buttons.css';

interface PrimaryButtonProps {
  large?: boolean;
  type?: 'button' | 'submit' | 'reset';
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  onClick?: () => void;
  label: string;
  url?: string;
  disabled?: boolean;
  loading?: boolean;
  bg?: string;
}

export function PrimaryButton({
  type,
  large,
  onClick,
  label,
  url,
  iconRight,
  iconLeft,
  disabled,
  loading,
  bg,
}: PrimaryButtonProps) {
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
      type={type ?? 'button'}
      w={large ? '100%' : 'auto'}
      className="button"
      variant="light"
      rightSection={iconRight}
      leftSection={iconLeft}
      c="var(--color-text)"
      bg={bg ?? 'var(--color-primary)'}
      onClick={onClick}
      disabled={isInactive}
      loading={loading}
    >
      {label}
    </Button>
  );
}
