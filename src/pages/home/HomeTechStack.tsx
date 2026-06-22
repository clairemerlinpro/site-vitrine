import { Flex, Title } from '@mantine/core';
import React from 'react';
import { Carousel } from '@mantine/carousel';
import { TECHSTACKS_EN, TECHSTACKS_FR } from '../../context/TECHSTACKS';
import { TechStackCard } from '../../components/TechStackCard';
import { useTranslation } from 'react-i18next';

export function HomeTechStack() {
  // -------- Params --------
  const { t, i18n } = useTranslation();

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------
  const techStacks = i18n.language === 'fr' ? TECHSTACKS_FR : TECHSTACKS_EN;

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------

  return (
    <Flex pl={40} pr={40} pt={80} pb={80} gap="md" direction="column">
      <Title order={2} c="var(--color-text)">
        {t('home.techStack.title')}
      </Title>
      <Carousel
        height={200}
        slideSize={{ base: '100%', xs: '60%', sm: '40%', md: '20%' }}
        slideGap={{ base: 0, xs: 'md' }}
        emblaOptions={{ loop: true, align: 'start' }}
      >
        {techStacks.map((item) => (
          <Carousel.Slide key={item.id}>
            <TechStackCard tech={item} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
}
