import { useEffect, useState } from "react";
import { useLanguage } from "../../styles/languages/LanguageProvider";

import { 
    AboutContainer, 
    AboutPhoto, 
    Description, 
    Name, 
    TagAboutMe,
    ProfilePicture 
} from "./styles";

export function About(){
    const [language] = useLanguage();
    const [profilePicture, setProfilePicture] = useState<string>("");
    
    useEffect(() => {
        fetch("https://api.github.com/users/wiltoon")
            .then(response => response.json())
            .then(data => setProfilePicture(data.avatar_url))
            .catch(error => console.log(error));
    }, []);
    
    return (
            <AboutContainer id="about">
                <AboutPhoto>
                    <ProfilePicture src={profilePicture} alt="Profile" />
                </AboutPhoto>
                {language === "EN" ? (
                    <div>
                        <TagAboutMe>🧐 About me</TagAboutMe>
                        <Name>Wilton Costa</Name>
                        
                        <Description>
                            👋 My name is Wilton, and I work in the Software Engineering field, but I also have an interest in Artificial Intelligence. With that being said, I believe I can branch out and become a backend developer in the field of AI. Pleasure to have you here!<br/>
                            👨‍💻 For over 7 years, I have been seeking new solutions using languages such as C, C++, Java, Python, and TypeScript.<br/>
                            🎓 I have a Bachelor's degree in Computer Engineering from the Federal University of Mato Grosso do Sul - UFMS.<br/>
                            🎓 I also have a Master's degree in Computer Science from the Federal University of Mato Grosso do Sul - UFMS.<br/>

                            💡 My interests lie in Backend Development, Data Science, and Frontend Development.<br/>

                            🚀 AWS Certified Cloud Practitioner<br/>
                            🚀 AWS Certified Solutions Architect<br/>

                            🚀 By being 1% better every working day, we can achieve an improvement of 1.01^252 (working days) = 12.27x better within a year! So, I always strive for continuous improvement! Embracing new technologies is part of the learning process!
                        
                        </Description>
                    </div>
                    ) : ( 
                    <div>
                        <TagAboutMe>🧐 Sobre mim</TagAboutMe>
                        <Name>Wilton Costa</Name>
                        <Description>
                        👋 Me chamo Wilton, e atuo na área de Engenharia de Software, mas também tenho interesse na área de Inteligência Artificial, dito isso acredito ser capaz de abrir um novo ramo sendo um back-end agregando na área de IA. Prazer em recebê-lo!<br/>
                        👨‍💻 Há mais de 7 anos buscando novas soluções com as linguagem C. C++, Java, Python, Typescript;<br/>
                        🎓 Graduado em Engenharia da Computação na Universidade Federal de Mato Grosso do Sul - UFMS;<br/>
                        🎓 Mestrado em Ciências da Computação na Universidade Federal de Mato Grosso do Sul - UFMS;<br/>
                        <br/>
                        💡 Meus interesses estão em Back-end, Data Science e Front-end;<br/>
                        <br/>
                        🚀 AWS Certified Cloud Practitioner<br/>
                        🚀 AWS Certified Solutions Architect<br/>
                        <br/>
                        🚀 Bom sendo 1% melhor a cada dia trabalhado temos uma melhora de 1,01^252 (dias úteis) = 12,27x melhor dentro de um ano útil! Então busco sempre estar em evolução! Novas tecnologias fazem parte do aprendizado!
                        </Description>
                    </div>
                )}  
            </AboutContainer>
    )
}