import { useEffect, useState } from 'preact/hooks';
import styled, { keyframes } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { LanguageProvider } from './styles/languages/LanguageProvider';

const pageIn = keyframes`
  from { opacity: 0; transform: translate3d(0, 16px, 0); }
  to   { opacity: 1; transform: none; }
`;

const PageTransition = styled.div`
  animation: ${pageIn} 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [focusId, setFocusId] = useState<string | null>(null);

  /** Changes page; `focus` lets the guide open a specific item (e.g. one experience). */
  const navigate = (page: string, focus: string | null = null) => {
    setFocusId(focus);
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'projects':
        return <ProjectsPage />;
      case 'experiences':
        return <AboutPage onNavigate={navigate} focusId={focusId} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <LanguageProvider>
      <GlobalStyle />
      <Navigation currentPage={currentPage} setCurrentPage={(page) => navigate(page)} />
      <main style={{ paddingTop: '80px' }}>
        <PageTransition key={currentPage}>{renderPage()}</PageTransition>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
