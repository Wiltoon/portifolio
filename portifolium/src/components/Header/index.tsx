import { HeaderContainer, HeaderContent, HeaderMenu, HeaderItem } from "./styles";
import logoFloat from '../../assets/logofloat.svg';

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoFloat} alt="" height={36} width={36}/>
                    <HeaderMenu>
                        <HeaderItem>Home</HeaderItem>
                        <HeaderItem>About me</HeaderItem>
                        <HeaderItem>Portfolio</HeaderItem>
                        <HeaderItem>Skills</HeaderItem>
                        <HeaderItem>Carrier</HeaderItem>
                        <HeaderItem>Recommendations</HeaderItem>
                        <HeaderItem>Contact</HeaderItem>
                    </HeaderMenu>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}