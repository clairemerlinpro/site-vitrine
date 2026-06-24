import { Switch } from '@mantine/core';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

export function ThemeSwitch() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      size="xl"
      color="var(--color-primary)"
      checked={theme === 'light'}
      onChange={(event) => setTheme(event.currentTarget.checked ? 'light' : 'dark')}
      aria-label={t('themeSwitch.label')}
      onLabel={<SunIcon size={16} color="var(--color-white)" />}
      offLabel={<MoonIcon size={16} color="var(--color-background)" />}
    />
  );
}
