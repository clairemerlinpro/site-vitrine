import { ActionIcon, Flex, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { PauseIcon, PlayIcon } from '@phosphor-icons/react';
import type { EmblaCarouselType } from 'embla-carousel';
import { useEffect, useState } from 'react';
import { TECHSTACKS_EN, TECHSTACKS_FR } from '../../context/TECHSTACKS';
import { TechStackCard } from '../../components/TechStackCard';
import { useTranslation } from 'react-i18next';
import './HomeTechStack.css';

const AUTOPLAY_DELAY_MS = 2000;

export function HomeTechStack() {
  const { t, i18n } = useTranslation();
  const techStacks = i18n.language === 'fr' ? TECHSTACKS_FR : TECHSTACKS_EN;
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => {
    if (!embla || isAutoplayPaused) return;

    const interval = window.setInterval(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      embla.scrollNext();
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(interval);
  }, [embla, isAutoplayPaused]);

  useEffect(() => {
    if (!embla) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncAutoplay = () => {
      if (prefersReducedMotion.matches) {
        setIsAutoplayPaused(true);
      }
    };

    syncAutoplay();
    prefersReducedMotion.addEventListener('change', syncAutoplay);

    return () => prefersReducedMotion.removeEventListener('change', syncAutoplay);
  }, [embla]);

  return (
    <Flex
      component="section"
      px={{ base: 16, sm: 40 }}
      py={{ base: 40, sm: 80 }}
      gap="md"
      direction="column"
      w="100%"
      miw={0}
      style={{ overflow: 'hidden' }}
      aria-labelledby="home-tech-stack-title"
    >
      <Flex align="center" justify="space-between" gap="md" wrap="wrap">
        <Title id="home-tech-stack-title" order={2} c="var(--color-text)">
          {t('home.techStack.title')}
        </Title>
        <ActionIcon
          variant="light"
          color="var(--color-primary)"
          size="lg"
          radius="xl"
          aria-pressed={isAutoplayPaused}
          aria-label={
            isAutoplayPaused ? t('home.techStack.playAutoplay') : t('home.techStack.pauseAutoplay')
          }
          onClick={() => setIsAutoplayPaused((paused) => !paused)}
        >
          {isAutoplayPaused ? (
            <PlayIcon size={18} weight="bold" />
          ) : (
            <PauseIcon size={18} weight="bold" />
          )}
        </ActionIcon>
      </Flex>
      <Carousel
        classNames={{ root: 'tech-stack-carousel' }}
        height={200}
        slideSize={{ base: '100%', xs: '60%', sm: '40%', md: '20%' }}
        slideGap="md"
        getEmblaApi={setEmbla}
        emblaOptions={{ loop: true, align: 'start' }}
        aria-label={t('home.techStack.carouselLabel')}
        previousControlProps={{ 'aria-label': t('home.techStack.previous') }}
        nextControlProps={{ 'aria-label': t('home.techStack.next') }}
      >
        {techStacks.map((item, index) => (
          <Carousel.Slide
            key={item.id}
            aria-label={t('home.techStack.slideLabel', {
              name: item.name,
              current: index + 1,
              total: techStacks.length,
            })}
          >
            <TechStackCard tech={item} titleId={`tech-stack-name-${item.id}`} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
}
