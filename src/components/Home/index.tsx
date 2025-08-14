import memeBack from '../../assets/mymeme-back.svg';
import mark from '../../assets/mark.svg';
import linkeDin from '../../assets/linkedin.svg';
import gitHub from '../../assets/github.svg';

import { useLanguage } from '../../styles/languages/LanguageProvider';
import { 
    HomeContainer, 
    HomeName, 
    HomeCV, 
    HomeContact,
    HomeFrase,
    HomeSaudacao,
    HomeMark,
    HomeNome,
    HomeProfissional,
    HomeLinks,
    HomeLink,
} from './styles';

export function Home() {
    const [language] = useLanguage();
    
    return (
        <HomeContainer id="home">
            {language === "EN" ? (
                <>
                    <HomeName>
                        <HomeSaudacao>
                            👋 Welcome!
                        </HomeSaudacao>
                        <HomeMark>
                            <HomeNome>
                                <p>Wilton</p>
                                <p>Costa</p>
                            </HomeNome>
                            <img src={mark} alt="" height={52} width={52}/>
                        </HomeMark>
                        <HomeProfissional>
                            Software Engineer · Back-end 
                        </HomeProfissional>
                        <HomeLinks>
                            <a href="https://www.linkedin.com/in/wilton-software-engineer/" target="_blank" rel="noreferrer">
                            <HomeLink>
                                <img src={linkeDin} alt=""/>                    
                            </HomeLink>
                            </a>
                            <a href="https://www.github.com/wiltoon" target="_blank" rel="noreferrer">
                            <HomeLink>
                                <img src={gitHub} alt=""/>
                            </HomeLink>
                            </a>
                        </HomeLinks>
                    </HomeName>
                    
                    <img src={memeBack} alt="" style={{ maxWidth: '100%', height: 'auto', width: '50%' }} />
                    
                    <HomeCV>
                        <a href="#contact" rel="noreferrer">
                            <HomeContact>
                                <HomeFrase>Let's work together?</HomeFrase>
                            </HomeContact>
                        </a>
                    </HomeCV>
                </>
                ) : (
                    <>
                    <HomeName>
                        <HomeSaudacao>
                            👋 Saudações!
                        </HomeSaudacao>
                        <HomeMark>
                            <HomeNome>
                                <p>Wilton</p>
                                <p>Costa</p>
                            </HomeNome>
                            <img src={mark} alt="" height={52} width={52}/>
                        </HomeMark>
                        <HomeProfissional>
                            Engenheiro de Software · Back-end 
                        </HomeProfissional>
                        <HomeLinks>
                            <a href="https://www.linkedin.com/in/wilton-software-engineer/" target="_blank" rel="noreferrer">
                            <HomeLink>
                                <img src={linkeDin} alt=""/>                    
                            </HomeLink>
                            </a>
                            <a href="https://www.github.com/wiltoon" target="_blank" rel="noreferrer">
                            <HomeLink>
                                <img src={gitHub} alt=""/>
                            </HomeLink>
                            </a>
                        </HomeLinks>
                    </HomeName>
                    
                    <img src={memeBack} alt="" style={{ maxWidth: '100%', height: 'auto', width: '50%' }} />
                    
                    <HomeCV>
                        <a href="#contact" rel="noreferrer">
                            <HomeContact>
                                <HomeFrase>Vamos trabalhar juntos?</HomeFrase>
                            </HomeContact>
                        </a>
                    </HomeCV>
                </>
            )}
        </HomeContainer>
    );
}