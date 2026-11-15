import { useRef } from 'react';
import { useT } from '../../styles/languages/LanguageProvider';

import send from '../../assets/send.svg';
import copyIcon from '../../assets/copyMail.svg';
import topBack from '../../assets/topBack.svg';

import {
    ContactContainer, 
    TagContact, 
    TitleContact, 
    DatasContainer,
    MailContainer,
    TextMail,
    TopBack,
    TextBack
} from "./styles";

export function Contact(){
    const t = useT();
    const emailRef = useRef<HTMLInputElement>(null);

    const handleCopyEmail = () => {
        if (emailRef.current) {
            emailRef.current.select();
            document.execCommand('copy');
        }
    };

    return (
        <ContactContainer id="contact">
            <TagContact>📬 {t({ EN: 'Contact', BR: 'Contato', ES: 'Contacto' })}</TagContact>
            <TitleContact>{t({ EN: "Let's work together?", BR: 'Vamos trabalhar juntos?', ES: '¿Trabajamos juntos?' })}</TitleContact>
            <DatasContainer>
                
                <MailContainer>
                    <img src={send} alt="" />
                    <TextMail ref={emailRef} type="text" value="wilton.code@gmail.com" readOnly />
                    <img src={copyIcon} onClick={handleCopyEmail} style={{ cursor: 'pointer' }} />
                </MailContainer>
            </DatasContainer>
            <a href="#home">
                <TopBack>
                    <TextBack>{t({ EN: 'Back to top', BR: 'Voltar ao topo', ES: 'Volver arriba' })}</TextBack>
                    <img src={topBack}/>
                </TopBack>
            </a>

        </ContactContainer>
    );
}