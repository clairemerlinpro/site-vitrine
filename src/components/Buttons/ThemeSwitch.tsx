import { Switch } from '@mantine/core';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

export function ThemeSwitch() {
  // -------- Params --------
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
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
    <Switch
      role="button"
      aria-label={
        theme === 'dark' ? t('headerMenu.themeSwitchtoLight') : t('headerMenu.themeSwitchtoDark')
      }
      size="xl"
      color="var(--color-primary)"
      checked={theme === 'light'}
      onChange={(event) => setTheme(event.currentTarget.checked ? 'light' : 'dark')}
      onLabel={<SunIcon size={16} color="var(--color-white)" />}
      offLabel={<MoonIcon size={16} color="var(--color-background)" />}
    />
  );
}
