import { Button } from '@mantine/core';
import { GlobeIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch = () => {
  const { i18n, t } = useTranslation();

  return (
    <Button
      role="button"
      aria-label={t('headerMenu.languageSwitch')}
      onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
      variant="outline"
      radius="xl"
      color="var(--color-text)"
      leftSection={<GlobeIcon size={16} aria-hidden="true" />}
    >
      {i18n.language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
};
