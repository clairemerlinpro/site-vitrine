import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import '../../index.css';
import { HomeAbout } from './HomeAbout';
import { HomeCatchPhrase } from './HomeCatchPhrase';
import { HomeTechStack } from './HomeTechStack';
import { HomeProjects } from './HomeProjects';
import { Flex, Title, Text } from '@mantine/core';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@phosphor-icons/react';

export function HomePage() {
  // -------- Params --------
  const navigate = useNavigate();

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
    <PageLayout>
      <HomeAbout />
      <HomeCatchPhrase />
      <HomeTechStack />
      <HomeProjects />
      <Flex
        pl={40}
        pr={40}
        pt={80}
        pb={80}
        gap="md"
        direction="column"
        justify="center"
        align="center"
      >
        <Title c="var(--color-text)" order={1} fw={800} ta="center">
          Prêt à lancer votre projet ?
        </Title>
        <Text c="var(--color-text)">
          Besoin d'une expertise front-end de pointe pour votre prochaine application ? Discutons de
          vos objectifs.
        </Text>
        <SecondaryButton
          onClick={() => navigate('/contact')}
          label="Démarrer une conversation"
          iconRight={<ArrowRightIcon className="button__arrow" size={14} />}
        />
      </Flex>
    </PageLayout>
  );
}
