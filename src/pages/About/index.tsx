import { Career } from '../../components/Career';
import { BackToTop } from '../../components/BackToTop';
import { useT } from '../../styles/languages/LanguageProvider';
import { Container, Header } from './styles';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
  focusId?: string | null;
}

export function AboutPage({ onNavigate, focusId }: AboutPageProps) {
    const t = useT();

  const labels = t({
        EN: {
    title: 'My Experiences',
    subtitle: 'Discover my professional and academic journey'
  },
        BR: {
    title: 'Minhas Experiências',
    subtitle: 'Conheça minha jornada profissional e acadêmica'
  },
        ES: {
    title: 'Mis Experiencias',
    subtitle: 'Conoce mi trayectoria profesional y académica'
  }
    });

  return (
    <Container>
      <Header>
        <h1>{labels.title}</h1>
        <p>{labels.subtitle}</p>
      </Header>
      
      <Career onNavigate={onNavigate} focusId={focusId} />
      
      <BackToTop />
    </Container>
  );
}
