import { useRef } from 'react';

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

    return (
        <ContactContainer id="contact">
            <TagContact>📬 Contact</TagContact>
            <TitleContact>Let's work together?</TitleContact>
            <DatasContainer>
                
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