import React from 'react';
import { PageLayout } from '../../components/PageLayout.tsx';
import './HomePage.css';
import { HomeAbout } from './HomeAbout.tsx';
import { HomeCatchPhrase } from './HomeCatchPhrase.tsx';

export function HomePage() {
  return (
    <PageLayout>
      <HomeAbout />
      <HomeCatchPhrase />
    </PageLayout>
  );
}
