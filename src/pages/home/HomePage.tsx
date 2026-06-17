import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import './HomePage.css';
import { HomeAbout } from './HomeAbout';
import { HomeCatchPhrase } from './HomeCatchPhrase';
import { HomeTechStack } from './HomeTechStack';
import { HomeProjects } from './HomeProjects';

export function HomePage() {
  return (
    <PageLayout>
      <HomeAbout />
      <HomeCatchPhrase />
      <HomeTechStack />
      <HomeProjects />
    </PageLayout>
  );
}
