import { Timeline, Text } from '@mantine/core';
import { Company } from '../context/PROJECTS';

type TimelineItemProps = {
  company: Company;
  role?: string;
  ariaLabel?: string;
};

export function TimelineItem({ company, role, ariaLabel }: TimelineItemProps) {
  return (
    <Timeline.Item
      bullet={<company.icon size={12} />}
      title={company.name}
      c="var(--color-text)"
      role={role}
      aria-label={ariaLabel}
    >
      <Text size="sm" fw={600} c="var(--color-secondary)">
        {company.date} • {company.location}
      </Text>
      <Text c="var(--color-text)" size="sm">
        {company.description}
      </Text>
    </Timeline.Item>
  );
}
