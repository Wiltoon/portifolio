import memeBack from '../../assets/mymeme-back.svg';
import dowloadCV from '../../assets/dowloadcv.svg';
import whatsapp from '../../assets/whatsapp.svg';
import mark from '../../assets/mark.svg';
import linkeDin from '../../assets/linkedin.svg';
import gitHub from '../../assets/github.svg';

import { 
    HomeContainer, 
    HomeName, 
    HomeCV, 
    HomeDowload,
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
    return (
        <HomeContainer id="home">
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
                    Software Engineer · Full-Stack 
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
                <HomeDowload>
                    Baixar CV 
                    <img src={dowloadCV} alt=""/>   
                </HomeDowload>
                <HomeContact>
                    <img src={whatsapp} alt=""/>
                    <HomeFrase>Vamos trabalhar juntos?</HomeFrase>
                </HomeContact>
            </HomeCV>
        </HomeContainer>
    )
}