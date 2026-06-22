import React from 'react';
import { Flex, Title, Text, Divider, SimpleGrid, Paper, Badge, Timeline } from '@mantine/core';
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
import { COMPANIES_EN, COMPANIES_FR, Company } from '../context/PROJECTS';
import { PageLayout } from '../components/PageLayout';
import { useTranslation } from 'react-i18next';

export function AboutPage() {
  // -------- Params --------
  const { t, i18n } = useTranslation();
  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------
  const formations = i18n.language === 'fr' ? FORMATIONS_FR : FORMATIONS_EN;
  const companies = i18n.language === 'fr' ? COMPANIES_FR : COMPANIES_EN;
  const techStacks = i18n.language === 'fr' ? TECHSTACKS_FR : TECHSTACKS_EN;
  const methods = i18n.language === 'fr' ? METHODS_FR : METHODS_EN;

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------

  const TimelineItem = ({ company }: { company: Company }) => {
    return (
      <Timeline.Item bullet={<company.icon size={12} />} title={company.name} c="var(--color-text)">
        <Text size="sm" fw={600} c="var(--color-secondary)">
          {company.date} • {company.location}
        </Text>
        <Text c="var(--color-text)" size="sm">
          {company.description}
        </Text>
      </Timeline.Item>
    );
  };

  const ToolsList = ({ tools, title }: { tools: string[]; title: string }) => {
    return (
      <Paper shadow="xs" p="xl" bg="var(--color-grey)">
        <Title order={3} c="var(--color-text)">
          {title}
        </Title>
        <Flex direction="row" gap="md" mt="md" mb="md" wrap="wrap">
          {tools.map((tool) => (
            <Badge
              key={tool}
              bg="color-mix(in srgb, var(--color-secondary) 40%, var(--color-grey))"
              color="var(--color-grey)"
            >
              {tool}
            </Badge>
          ))}
        </Flex>
      </Paper>
    );
  };

  const FormationCard = ({ formation }: { formation: Formation }) => {
    return (
      <Paper shadow="xs" p="xl" bg="var(--color-grey)">
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
      <Flex direction="row" gap="xl" align="center">
        <Flex direction="column" gap="md">
          <Text c="var(--color-text)">{t('about.description')}</Text>
          <Timeline active={1} bulletSize={24} lineWidth={2} mt="md">
            {companies.map((company) => (
              <TimelineItem key={company.id} company={company} />
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
      <Flex direction={{ base: 'column', md: 'row' }} gap="md" align="stretch">
        <SimpleGrid cols={{ base: 2, xs: 2, sm: 3, md: 3 }} spacing="md" flex={1} miw={0}>
          {techStacks.map((tech) => (
            <TechStackCard key={tech.id} tech={tech} />
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
      <SimpleGrid cols={2} spacing="md" flex={1} miw={0}>
        {formations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </SimpleGrid>
    </PageLayout>
  );
}
