import { Contact as ContactComponent } from '../../components/Contact';
import { BackToTop } from '../../components/BackToTop';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import { Container, Header } from './styles';

export function ContactPage() {
  const [language] = useLanguage();

  const labels = language === 'EN' ? {
    title: 'Let\'s Talk?',
    subtitle: 'I\'m always open to new opportunities and interesting projects'
  } : {
    title: 'Vamos Conversar?',
    subtitle: 'Estou sempre aberto a novas oportunidades e projetos interessantes'
  };

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
