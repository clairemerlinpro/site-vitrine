import React from 'react';
import { Flex, Title, Text, Divider, SimpleGrid, Paper, Badge, Timeline } from '@mantine/core';
import { ProfilePicture } from '../components/ProfilePicture';
import { AI_TOOLS, CI_CD_TOOLS, METHODS, TECHSTACKS } from '../context/TECHSTACKS';
import { TechStackCard } from '../components/TechStackCard';
import { Formation, FORMATIONS } from '../context/FORMATIONS';
import { COMPANIES, Company } from '../context/PROJECTS';

export function AboutPage() {
  // -------- Params --------

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------

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
            <Badge key={tool} variant="white" color="var(--color-grey)">
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
    <Flex direction="column" gap="md" pl={40} pr={40} pt={80} pb={80}>
      <Flex direction="row" gap="xl" align="center">
        <Flex direction="column" gap="md">
          <Title c="var(--color-text)" order={1} fw={800}>
            Mon Parcours
          </Title>
          <Text c="var(--color-text)">
            Ingénieure Fullstack spécialisée dans le développement mobile et web haute performance.
            Mon approche fusionne la rigueur technique du freelance avec une vision produit affûtée,
            forgée au sein de structures innovantes comme La Mobilery, Premedit, et 7Digital.
          </Text>
          <Timeline active={1} bulletSize={24} lineWidth={2} mt="md">
            {COMPANIES.map((company) => (
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
            Expertise Technique
          </Title>
        }
        labelPosition="left"
      />
      <Flex direction={{ base: 'column', md: 'row' }} gap="md" align="stretch">
        <SimpleGrid cols={{ base: 2, xs: 2, sm: 3, md: 3 }} spacing="md" flex={1} miw={0}>
          {TECHSTACKS.map((tech) => (
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
          <ToolsList title="Outils IA" tools={AI_TOOLS} />
          <ToolsList title="CI/CD" tools={CI_CD_TOOLS} />
          <ToolsList title="Méthodes" tools={METHODS} />
        </Flex>
      </Flex>
      <Divider
        mt="xl"
        pb="md"
        label={
          <Title c="var(--color-text)" order={2}>
            Formations & Certifications
          </Title>
        }
        labelPosition="left"
      />
      <SimpleGrid cols={2} spacing="md" flex={1} miw={0}>
        {FORMATIONS.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
