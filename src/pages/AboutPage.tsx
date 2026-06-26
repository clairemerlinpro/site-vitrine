import React from 'react';
import { Flex, Title, Text, Divider, SimpleGrid, Paper, Badge, Timeline, Box } from '@mantine/core';
import { ProfilePicture } from '../components/ProfilePicture';
import {
  AI_TOOLS,
  CI_CD_TOOLS,
  METHODS_EN,
  METHODS_FR,
  TECHSTACKS_EN,
  TECHSTACKS_FR,
} from '../context/TECHSTACKS';
import { TechStackCard } from '../components/TechStackCard';
import { Formation, FORMATIONS_EN, FORMATIONS_FR } from '../context/FORMATIONS';
import { COMPANIES_EN, COMPANIES_FR } from '../context/PROJECTS';
import { PageLayout } from '../components/PageLayout/PageLayout';
import { useTranslation } from 'react-i18next';
import { ResumeButton } from '../components/Buttons/ResumeButton';
import { ToolsList } from '../components/ToolsList';
import { TimelineItem } from '../components/TimelineItem';

export function AboutPage() {
  const { t, i18n } = useTranslation();
  const formations = i18n.language === 'fr' ? FORMATIONS_FR : FORMATIONS_EN;
  const companies = i18n.language === 'fr' ? COMPANIES_FR : COMPANIES_EN;
  const techStacks = i18n.language === 'fr' ? TECHSTACKS_FR : TECHSTACKS_EN;
  const methods = i18n.language === 'fr' ? METHODS_FR : METHODS_EN;

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------

  const FormationCard = ({ formation }: { formation: Formation }) => {
    return (
      <Paper shadow="xs" p="xl" bg="var(--color-grey)" role="listitem" aria-label={formation.name}>
        <Flex direction="column" gap="md">
          {formation.type && <Badge color="var(--color-primary)">{formation.type}</Badge>}
          <Title order={3} c="var(--color-text)">
            {formation.name}
          </Title>
          <Text fw={600} c="var(--color-secondary)">
            {formation.date} • {formation.location}
          </Text>
          <Text c="var(--color-text)">{formation.description}</Text>
        </Flex>
      </Paper>
    );
  };

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------
  return (
    <PageLayout padding={true} title={t('about.title')}>
      <Flex
        role="section"
        aria-label={t('about.title')}
        direction={{ base: 'column', sm: 'row' }}
        gap="xl"
        align={{ base: 'stretch', sm: 'center' }}
        miw={0}
      >
        <Flex direction="column" gap="md" miw={0} flex={1}>
          <Text c="var(--color-text)">{t('about.description')}</Text>
          <Timeline
            active={1}
            bulletSize={24}
            lineWidth={2}
            mt="md"
            role="list"
            aria-label={t('about.experience.title')}
          >
            {companies.map((company) => (
              <TimelineItem
                key={company.id}
                company={company}
                role="listitem"
                aria-label={company.name}
              />
            ))}
          </Timeline>
        </Flex>
        <ProfilePicture />
      </Flex>
      <Divider
        mt="xl"
        pb="md"
        label={
          <Title c="var(--color-text)" order={2}>
            {t('about.expertise.title')}
          </Title>
        }
        labelPosition="left"
      />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap="md"
        align="stretch"
        role="section"
        aria-label={t('about.expertise.title')}
      >
        <SimpleGrid
          cols={{ base: 2, xs: 2, sm: 3, md: 3 }}
          spacing="md"
          flex={1}
          miw={0}
          role="list"
          aria-label={t('about.expertise.title')}
        >
          {techStacks.map((tech) => (
            <TechStackCard
              key={tech.id}
              tech={tech}
              titleId={`tech-stack-name-${tech.id}`}
              role="listitem"
              aria-label={tech.name}
            />
          ))}
        </SimpleGrid>
        <Flex
          direction="column"
          gap="md"
          w={{ base: '100%', md: '40%' }}
          maw={{ md: '40%' }}
          style={{ flexShrink: 0 }}
        >
          <ToolsList title={t('about.expertise.aiTools')} tools={AI_TOOLS} />
          <ToolsList title={t('about.expertise.ciCd')} tools={CI_CD_TOOLS} />
          <ToolsList title={t('about.expertise.methods')} tools={methods} />
        </Flex>
      </Flex>
      <Divider
        mt="xl"
        pb="md"
        label={
          <Title c="var(--color-text)" order={2}>
            {t('about.formations.title')}
          </Title>
        }
        labelPosition="left"
      />
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing="md"
        flex={1}
        miw={0}
        mb="xl"
        role="list"
        aria-label={t('about.formations.title')}
      >
        {formations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </SimpleGrid>
      <Box w="fit-content" mt="xl">
        <ResumeButton />
      </Box>
    </PageLayout>
  );
}
