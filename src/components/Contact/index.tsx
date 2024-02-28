import { useRef } from 'react';

import whatsapp from '../../assets/whatsapp.svg';
import send from '../../assets/send.svg';
import copyIcon from '../../assets/copyMail.svg';
import topBack from '../../assets/topBack.svg';

import {
    ContactContainer, 
    HomeContact, 
    TagContact, 
    HomeFrase,
    TitleContact, 
    DatasContainer,
    MailContainer,
    TextMail,
    TopBack,
    TextBack
} from "./styles";

export function Contact(){
    const emailRef = useRef<HTMLInputElement>(null);

    const handleCopyEmail = () => {
        if (emailRef.current) {
            emailRef.current.select();
            document.execCommand('copy');
        }
    };


    const handleScrollToTop = () => {
        // Lógica para rolar para o topo da página
    };

    return (
        <ContactContainer>
            <TagContact>📬 Contact</TagContact>
            <TitleContact>Let's work together?</TitleContact>
            <DatasContainer>
                <a href="https://api.whatsapp.com/send?phone=55067992027463" target="_blank" rel="noopener noreferrer">
                <HomeContact>
                    <img src={whatsapp} alt=""/>
                    <HomeFrase>Whatsapp</HomeFrase>
                </HomeContact>
                </a>
                
                <MailContainer>
                    <img src={send} alt="" />
                    <TextMail ref={emailRef} type="text" value="wilton.code@gmail.com" readOnly />
                    <img src={copyIcon} onClick={handleCopyEmail} style={{ cursor: 'pointer' }} />
                </MailContainer>
            </DatasContainer>
            <a href="#home">
                <TopBack>
                    <TextBack>Back to top</TextBack>
                    <img src={topBack}/>
                </TopBack>
            </a>

        </ContactContainer>
    );
}