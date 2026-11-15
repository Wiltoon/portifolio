import { Contact as ContactComponent } from '../../components/Contact';
import { BackToTop } from '../../components/BackToTop';
import { useT } from '../../styles/languages/LanguageProvider';
import { Container, Header } from './styles';

export function ContactPage() {
    const t = useT();

  const labels = t({
        EN: {
    title: 'Let\'s Talk?',
    subtitle: 'I\'m always open to new opportunities and interesting projects'
  },
        BR: {
    title: 'Vamos Conversar?',
    subtitle: 'Estou sempre aberto a novas oportunidades e projetos interessantes'
  },
        ES: {
    title: '¿Hablamos?',
    subtitle: 'Siempre estoy abierto a nuevas oportunidades y proyectos interesantes'
  }
    });

  return (
    <Container>
      <Header>
        <h1>{labels.title}</h1>
        <p>{labels.subtitle}</p>
      </Header>
      
      <ContactComponent />
      
      <BackToTop />
    </Container>
  );
}
