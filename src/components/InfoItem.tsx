import { Box, Flex, Text } from '@mantine/core';

type InfoItemProps = {
  icon?: React.ReactNode;
  title: string;
  value: string;
};

export function InfoItem({ icon, title, value }: InfoItemProps) {
  return (
    <Flex direction="row" gap="md" align="center">
      {icon && (
        <Box
          p="sm"
          bg="color-mix(in srgb, var(--color-secondary) 20%, var(--color-grey))"
          style={{
            borderRadius: 'var(--mantine-radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
      )}
      <Flex direction="column">
        <Text c="var(--color-secondary)" fw={600}>
          {title}
        </Text>
        <Text c="var(--color-text)">{value}</Text>
      </Flex>
    </Flex>
  );
}
