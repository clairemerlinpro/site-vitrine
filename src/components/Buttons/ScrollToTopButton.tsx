import { ActionIcon, Portal, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { ArrowUpIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import './ScrollToTopButton.css';

const SCROLL_THRESHOLD = 400;

export function ScrollToTopButton() {
  const { t } = useTranslation();
  const [{ y }] = useWindowScroll();

  const handleClick = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <Portal>
      <Transition transition="fade-up" duration={200} mounted={y > SCROLL_THRESHOLD}>
        {(styles) => (
          <div className="scroll-to-top-button-wrapper" style={styles}>
            <ActionIcon
              className="scroll-to-top-button light-shadow"
              variant="filled"
              size="xl"
              radius="xl"
              aria-label={t('scrollToTop.label')}
              onClick={handleClick}
            >
              <ArrowUpIcon size={22} weight="bold" />
            </ActionIcon>
          </div>
        )}
      </Transition>
    </Portal>
  );
}
