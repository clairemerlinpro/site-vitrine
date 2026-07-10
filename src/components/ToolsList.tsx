import { Badge, Flex, Paper, Title } from '@mantine/core';
import { Language } from '../context/TECHSTACKS';

interface ToolsListProps {
  title: string;
  tools?: string[];
  languages?: Language[];
}

export function ToolsList({ title, tools, languages }: ToolsListProps) {
  return (
    <Paper shadow="xs" p="xl" bg="var(--color-grey)">
      <Title order={3} c="var(--color-text)">
        {title}
      </Title>
      <Flex direction="row" gap="md" mt="md" mb="md" wrap="wrap" role="list" aria-label={title}>
        {tools
          ? tools.map((tool) => (
              <Badge
                key={tool}
                bg="color-mix(in srgb, var(--color-secondary) 40%, var(--color-grey))"
                color="var(--color-grey)"
                role="listitem"
                aria-label={tool}
              >
                {tool}
              </Badge>
            ))
          : languages?.map((language) => (
              <Badge
                key={language.id}
                variant="gradient"
                gradient={{
                  from: language.gradient.from,
                  to: language.gradient.to,
                  deg: language.gradient.deg,
                }}
                role="listitem"
                aria-label={language.name}
              >
                {language.name}
              </Badge>
            ))}
      </Flex>
    </Paper>
  );
}
