import { Badge, Flex, Paper, Title } from '@mantine/core';

interface ToolsListProps {
  title: string;
  tools: string[];
}

export function ToolsList({ title, tools }: ToolsListProps) {
  return (
    <Paper shadow="xs" p="xl" bg="var(--color-grey)">
      <Title order={3} c="var(--color-text)">
        {title}
      </Title>
      <Flex direction="row" gap="md" mt="md" mb="md" wrap="wrap" role="list" aria-label={title}>
        {tools.map((tool) => (
          <Badge
            key={tool}
            bg="color-mix(in srgb, var(--color-secondary) 40%, var(--color-grey))"
            color="var(--color-grey)"
            role="listitem"
            aria-label={tool}
          >
            {tool}
          </Badge>
        ))}
      </Flex>
    </Paper>
  );
}
