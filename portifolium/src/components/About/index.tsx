import { 
    AboutContainer, 
    AboutPhoto, 
    Description, 
    Name, 
    TagAboutMe 
} from "./styles";

export function About(){
    return (
        <AboutContainer id="about">
            <AboutPhoto>

            </AboutPhoto>
            <div>
                <TagAboutMe>🧐 About me</TagAboutMe>
                <Name>Wilton Gustavo Gomes da Costa</Name>
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
        </AboutContainer>
    )
}