import { useEffect, useRef } from 'preact/hooks';
import { Home as HomeComponent } from '../../components/Home';
import { About } from '../../components/About';
import { Skills } from '../../components/Skills';
import { BackToTop } from '../../components/BackToTop';
import { Container } from './styles';

interface HomePageProps {
  onNavigate: (page: string, focus?: string | null) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adiciona smooth scroll para âncoras
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      if (target.hash) {
        event.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <Container>
      <section id="home" ref={homeRef}>
        <HomeComponent onNavigate={onNavigate} />
      </section>
      
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      
      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>

      <BackToTop />
    </Container>
  );
}
