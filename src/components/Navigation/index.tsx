import { useState, useEffect } from 'preact/hooks';
import { useLanguage, useT, LANGUAGES, Language } from '../../styles/languages/LanguageProvider';
import {
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
  LanguageSelector,
  LanguageButton
} from './styles';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useLanguage();
  const t = useT();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t({ EN: 'Home', BR: 'Início', ES: 'Inicio' }) },
    { id: 'projects', label: t({ EN: 'Projects', BR: 'Projetos', ES: 'Proyectos' }) },
    { id: 'experiences', label: t({ EN: 'Experiences', BR: 'Experiências', ES: 'Experiencias' }) },
    { id: 'contact', label: t({ EN: 'Contact', BR: 'Contato', ES: 'Contacto' }) }
  ];

const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (selectedLanguage: Language) => {
    setLanguage(() => selectedLanguage);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo onClick={() => handleNavClick('home')}>
          <span>{"<WC />"}</span>
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              active={currentPage === item.id}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <LanguageSelector>
          {LANGUAGES.map((lang) => (
            <LanguageButton
              key={lang}
              active={language === lang}
              onClick={() => changeLanguage(lang)}
            >
              {lang}
            </LanguageButton>
          ))}
        </LanguageSelector>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        <MobileMenu open={isMobileMenuOpen}>
          <div style={{ padding: '1rem', borderBottom: '1px solid rgba(203, 213, 225, 0.1)' }}>
            <LanguageSelector>
          {LANGUAGES.map((lang) => (
            <LanguageButton
              key={lang}
              active={language === lang}
              onClick={() => changeLanguage(lang)}
            >
              {lang}
            </LanguageButton>
          ))}
        </LanguageSelector>
          </div>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.id}
              active={currentPage === item.id}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
}
