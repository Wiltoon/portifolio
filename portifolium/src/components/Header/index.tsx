import { HeaderContainer, HeaderContent, HeaderMenu, HeaderItem } from "./styles";
import logoFloat from '../../assets/logofloat.svg';

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoFloat} alt="" height={36} width={36}/>
                    <HeaderMenu>
                        <HeaderItem><a href="#home">Home</a></HeaderItem>
                        <HeaderItem><a href="#about">About me</a></HeaderItem>
                        <HeaderItem><a href="#portfolio">Portfolio</a></HeaderItem>
                        <HeaderItem><a href="#skills">Skills</a></HeaderItem>
                        <HeaderItem><a href="#career">Career</a></HeaderItem>
                        <HeaderItem><a href="#recommendations">Recommendations</a></HeaderItem>
                        <HeaderItem><a href="#contact">Contact</a></HeaderItem>
                    </HeaderMenu>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}