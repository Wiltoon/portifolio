import { Career } from '../../components/Career';
import { BackToTop } from '../../components/BackToTop';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import { Container, Header } from './styles';

export function AboutPage() {
  const [language] = useLanguage();

  const labels = language === 'EN' ? {
    title: 'About Me',
    subtitle: 'Know my professional and academic trajectory'
  } : {
    title: 'Sobre Mim',
    subtitle: 'Conheça minha trajetória profissional e acadêmica'
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
