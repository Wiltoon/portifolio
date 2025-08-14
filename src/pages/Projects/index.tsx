import { SimpleProjects } from '../../components/SimpleProjects';
import { BackToTop } from '../../components/BackToTop';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import { Container, Header } from './styles';

export function ProjectsPage() {
  const [language] = useLanguage();

  const labels = language === 'EN' ? {
    title: 'My Projects',
    subtitle: 'A selection of projects I developed, integrating directly with GitHub'
  } : {
    title: 'Meus Projetos',
    subtitle: 'Uma seleção dos projetos que desenvolvi, integrando diretamente com o GitHub'
  };

  return (
    <Container>
      <Header>
        <h1>{labels.title}</h1>
        <p>{labels.subtitle}</p>
      </Header>
      
      <SimpleProjects />
      
      <BackToTop />
    </Container>
  );
}
