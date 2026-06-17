import { Flex, Paper, Title, Text, Image } from '@mantine/core';
import React from 'react';
import { Carousel } from '@mantine/carousel';
import { TECHSTACKS, TechStack } from '../../context/TECHSTACKS';

export function HomeTechStack() {
  // -------- Params --------

  // -------- Store --------

  // -------- States & Refs --------

  // -------- Init --------

  // -------- Helpers --------

  // -------- Callbacks --------

  // -------- Effects --------

  // -------- Renderers --------
  const CarouselCard = ({ name, icon }: TechStack) => (
    <>
      <Paper bg={'var(--color-grey)'}>
        <Flex direction={'column'} justify={'center'} align="center" p="md" h="200" gap="md">
          <Image radius="md" w={100} h={100} src={icon} fit="contain" />
          <Text fw={600} c="var(--color-text)" ta="center">
            {name}
          </Text>
        </Flex>
      </Paper>
    </>
  );

  // -------- Loading --------

  // -------- Error --------

  // -------- Main renderer --------

  return (
    <Flex pl={40} pr={40} pt={80} pb={80} gap="md" direction="column">
      <Title order={2} c="var(--color-text)">
        TECH STACK
      </Title>
      <Carousel
        height={200}
        slideSize={{ base: '100%', xs: '60%', sm: '40%', md: '20%' }}
        slideGap={{ base: 0, xs: 'md' }}
        emblaOptions={{ loop: true, align: 'start' }}
      >
        {TECHSTACKS.map((item) => (
          <Carousel.Slide key={item.id}>
            <CarouselCard {...item} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
}
