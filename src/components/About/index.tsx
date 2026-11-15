import { useLanguage, useT } from '../../styles/languages/LanguageProvider';
import { ABOUT } from '../../content/about';
import { Reveal } from '../Reveal';
import { AboutContainer, TagAboutMe, Name, Grid, Card } from './styles';

export function About() {
    const [language] = useLanguage();
    const t = useT();

    return (
        <AboutContainer id="about-content">
            <Reveal>
                <TagAboutMe>🧐 {t({ EN: 'About me', BR: 'Sobre mim', ES: 'Sobre mí' })}</TagAboutMe>
                <Name>Wilton Costa</Name>
            </Reveal>
            <Grid>
                {ABOUT[language].map((item, i) => (
                    <Reveal key={item.icon + i} delay={i * 90}>
                        <Card>
                            <span aria-hidden="true">{item.icon}</span>
                            <p>{item.text}</p>
                        </Card>
                    </Reveal>
                ))}
            </Grid>
        </AboutContainer>
    );
}
