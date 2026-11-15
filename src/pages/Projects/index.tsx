import { SimpleProjects } from '../../components/SimpleProjects';
import { BackToTop } from '../../components/BackToTop';
import { useT } from '../../styles/languages/LanguageProvider';
import { Container, Header } from './styles';

export function ProjectsPage() {
    const t = useT();

  const labels = t({
        EN: {
    title: 'My Projects',
    subtitle: 'A selection of projects I developed, integrating directly with GitHub'
  },
        BR: {
    title: 'Meus Projetos',
    subtitle: 'Uma seleção dos projetos que desenvolvi, integrando diretamente com o GitHub'
  },
        ES: {
    title: 'Mis Proyectos',
    subtitle: 'Una selección de los proyectos que desarrollé, integrada directamente con GitHub'
  }
    });

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
