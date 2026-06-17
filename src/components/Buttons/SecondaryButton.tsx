import { Button, Text } from '@mantine/core';
import React from 'react';

interface SecondaryButtonProps {
  onClick: () => void;
  label: string;
}

export function SecondaryButton({ onClick, label }: SecondaryButtonProps) {
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
    <Button className="button" variant="default" bg="transparent" onClick={onClick}>
      <Text c="var(--color-text)">{label}</Text>
    </Button>
  );
}
