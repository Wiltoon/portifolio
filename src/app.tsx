import { useState } from 'preact/hooks';
import { GlobalStyle } from './styles/global';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { LanguageProvider } from './styles/languages/LanguageProvider';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'experiences':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <LanguageProvider>
      <GlobalStyle />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ paddingTop: '80px' }}>
        {renderPage()}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
