import { Button } from '@mantine/core';
import { GlobeIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch = () => {
  // -------- Params --------
  const { i18n, t } = useTranslation();

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
      role="button"
      aria-label={t('headerMenu.languageSwitch')}
      onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
      variant="outline"
      radius="xl"
      color="var(--color-text)"
      leftSection={<GlobeIcon size={16} />}
    >
      {i18n.language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
};
