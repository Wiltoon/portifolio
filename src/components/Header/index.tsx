import { 
    HeaderContainer, 
    HeaderContent, 
    HeaderMenu, 
    HeaderItem, 
    HeaderLink, 
    LanguageButtons,
    BrenButton
} from "./styles";
import logoFloat from '../../assets/logofloat.svg';
import { useLanguage } from '../../styles/languages/LanguageProvider';

export function Header() {
    const {language, setLanguage} = useLanguage();
    const changeLanguage = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
    }
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoFloat} alt="" height={36} width={36}/>
                    <LanguageButtons>
                        <BrenButton onClick={() => changeLanguage('EN')}>EN</BrenButton>
                        <BrenButton onClick={() => changeLanguage('BR')}>BR</BrenButton>
                    </LanguageButtons>
                    <HeaderMenu>
                        {language === "EN" ? (
                            <>
                                <HeaderItem><HeaderLink href="#home">Home</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#about">About me</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#portfolio">Portfolio</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#skills">Skills</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#career">Career</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#recommendations">Recommendations</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#contact">Contact</HeaderLink></HeaderItem>
                            </>
                        ) : (
                            <>
                                <HeaderItem><HeaderLink href="#home">Início</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#about">Sobre</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#portfolio">Portfólio</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#skills">Habilidades</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#career">Carreira</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#recommendations">Recomendações</HeaderLink></HeaderItem>
                                <HeaderItem><HeaderLink href="#contact">Contato</HeaderLink></HeaderItem>
                            </>
                        )}
                    </HeaderMenu>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}