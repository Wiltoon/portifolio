import linkedin from "../../assets/linkedin.svg";
import gitHub from "../../assets/github.svg";

import { FooterContainer, TextFooter, HomeLinks, HomeLink } from "./styles";

export function Footer(){
    return (
        <FooterContainer>
            <TextFooter>Copyright © Wilton Costa · 2024</TextFooter>
            <HomeLinks>
                    <a href="https://www.linkedin.com/in/wilton-software-engineer/" target="_blank" rel="noreferrer">
                    <HomeLink>
                        <img src={linkedin} alt=""/>                    
                    </HomeLink>
                    </a>
                    <a href="https://www.github.com/wiltoon" target="_blank" rel="noreferrer">
                    <HomeLink>
                        <img src={gitHub} alt=""/>
                    </HomeLink>
                    </a>
            </HomeLinks>
        </FooterContainer>
    )
}

