import { Career } from '../../components/Career';
import { BackToTop } from '../../components/BackToTop';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import { Container, Header } from './styles';

export function AboutPage() {
  const [language] = useLanguage();

  const labels = language === 'EN' ? {
    title: 'My Experiences',
    subtitle: 'Discover my professional and academic journey'
  } : {
    title: 'Minhas Experiências',
    subtitle: 'Conheça minha jornada profissional e acadêmica'
  };

  return (
    <Container>
      <Header>
        <h1>{labels.title}</h1>
        <p>{labels.subtitle}</p>
      </Header>
      
      <Career />
      
      <BackToTop />
    </Container>
  );
}
