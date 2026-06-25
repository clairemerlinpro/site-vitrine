export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'color-theme';

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return 'dark';
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const background =
    theme === 'dark' ? 'var(--color-background)' : 'var(--color-background-section)';
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  themeColorMeta?.setAttribute('content', background);

  const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
  if (favicon) {
    favicon.href = theme === 'dark' ? '/icon-dark.svg' : '/icon-light.svg';
  }
}

export function initTheme() {
  applyTheme(getStoredTheme());
}
