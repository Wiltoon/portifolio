import { HeaderContainer, HeaderContent, HeaderMenu, HeaderItem, HeaderLink } from "./styles";
import logoFloat from '../../assets/logofloat.svg';

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoFloat} alt="" height={36} width={36}/>

                    <HeaderMenu>
                        <HeaderItem><HeaderLink href="#home">Home</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="#about">About me</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="#portfolio">Portfolio</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="#skills">Skills</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="#career">Career</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="#recommendations">Recommendations</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="#contact">Contact</HeaderLink></HeaderItem>
                    </HeaderMenu>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}