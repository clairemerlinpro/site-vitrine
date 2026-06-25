import './App.css';
import { Flex, MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './utils/ScrollToTop';
import { HomePage } from './pages/home/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/contact/ContactPage';
import { ThemeProvider } from './context/ThemeContext';
import { LegalNotice } from './pages/legalNotice/LegalNotice';
import { ScrollToTopButton } from './components/Buttons/ScrollToTopButton';

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Montserrat, sans-serif' }}>
      <ThemeProvider>
        <ScrollToTop />
        <ScrollToTopButton />
        <Flex direction="column" mih="100vh" w="100%" miw={0} bg="var(--color-background)">
          <HeaderMenu />
          <Flex component="main" direction="column" flex={1} w="100%" miw={0}>
            <Routes>
              <Route path="*" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
            </Routes>
          </Flex>
          <Footer />
        </Flex>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
