import './App.css';
import { Flex, MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { HeaderMenu } from './components/HeaderMenu.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/home/HomePage.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import React from 'react';

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Flex direction="column" mih="100vh" bg="var(--color-background)">
        <HeaderMenu />
        <Flex component="main" direction="column" flex={1}>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Flex>
        <Footer />
      </Flex>
    </MantineProvider>
  );
}

export default App;
