import './App.css';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { HeaderMenu } from './components/HeaderMenu.jsx';
import { HomePage } from './pages/HomePage.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import React from 'react';

function App() {
  return (
    <MantineProvider>
      <HeaderMenu />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
