import './App.css';
import { Flex, MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { HeaderMenu } from './components/HeaderMenu';
import { Footer } from './components/Footer';
import { HomePage } from './pages/home/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
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
