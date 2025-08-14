import { useState, useEffect } from 'preact/hooks';
import { useLanguage } from '../../styles/languages/LanguageProvider';
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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = language === 'EN' ? [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'contact', label: 'Contact' }
  ] : [
    { id: 'home', label: 'Início' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experiences', label: 'Experiências' },
    { id: 'contact', label: 'Contato' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (selectedLanguage: string) => {
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
          <LanguageButton 
            active={language === 'EN'} 
            onClick={() => changeLanguage('EN')}
          >
            EN
          </LanguageButton>
          <LanguageButton 
            active={language === 'BR'} 
            onClick={() => changeLanguage('BR')}
          >
            BR
          </LanguageButton>
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
              <LanguageButton 
                active={language === 'EN'} 
                onClick={() => changeLanguage('EN')}
              >
                EN
              </LanguageButton>
              <LanguageButton 
                active={language === 'BR'} 
                onClick={() => changeLanguage('BR')}
              >
                BR
              </LanguageButton>
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
