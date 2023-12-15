import {
    ButtonWork,
    CardDescription,
    CardImage,
    CardTags,
    CardTitle,
    HeaderPortifolio,
    ProjectCard,
    ProjectContainer,
    SelectWorks,
    Tag,
    TitleWorks,
    TagSelected,
    Cards
} from "./styles";

export function Projects(){
    return (
        <ProjectContainer>
            <Tag>🔗 Portfólio</Tag>
            <HeaderPortifolio>
                <TitleWorks>Works and Projects</TitleWorks>
                <SelectWorks>
                    <ButtonWork>Backend</ButtonWork>
                    <ButtonWork>Frontend</ButtonWork>
                    <ButtonWork>IAs</ButtonWork>
                </SelectWorks>
            </HeaderPortifolio>
            <Cards>
                <ProjectCard>
                    <CardTitle>
                        Move it
                    </CardTitle>
                    <CardDescription>
                        Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.
                    </CardDescription>
                    <CardTags>
                        <TagSelected>Online</TagSelected>
                        <TagSelected>Typescript</TagSelected>
                    </CardTags>
                    <CardImage>

                    </CardImage>
                </ProjectCard>
                <ProjectCard>
                    <CardTitle>
                        My Second
                    </CardTitle>
                    <CardDescription>
                        Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.
                    </CardDescription>
                    <CardTags>
                        <TagSelected>Online</TagSelected>
                        <TagSelected>Typescript</TagSelected>
                    </CardTags>
                    <CardImage>

                    </CardImage>
                </ProjectCard>
                <ProjectCard>
                    <CardTitle>
                        My Third
                    </CardTitle>
                    <CardDescription>
                        Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.
                    </CardDescription>
                    <CardTags>
                        <TagSelected>Online</TagSelected>
                        <TagSelected>Typescript</TagSelected>
                    </CardTags>
                    <CardImage>

                    </CardImage>
                </ProjectCard>
            </Cards>
        </ProjectContainer>
    )
}