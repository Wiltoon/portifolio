import { styled } from "styled-components";

export const ProjectContainer = styled.section`
    width: 100%;
    
`;

export const Tag = styled.div`
    display: flex;
    margin: 30px;
    margin-left: 25%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${props => props.theme['secundary-blue-10']};
`;

export const HeaderPortifolio = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const TitleWorks = styled.div`
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${props => props.theme['white']};
    `;

export const SelectWorks = styled.div`
    display: flex;
    gap: 20px;
    `;

export const Cards = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(4, 3fr);
    justify-content: center;
    padding: 90px;
`;
export const ButtonWork = styled.button`
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${props => props.theme['background-blue']};
    color: ${props => props.theme['secundary-blue-50']};
    border-radius: 8px;
    border-width: 1px;
    border-color: ${props => props.theme['secundary-blue-50']};
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transition: background-color 0.4s;
        background-color: ${props => props.theme['secundary-blue-50']};
    }
`;

export const ProjectCard = styled.div`
    width: 220px;
    height: 300px;
    border-width: 1px;
    border-color: ${props => props.theme['secundary-blue-50']};
    border-style: solid;
    padding: 20px;
    border-radius: 9px;
`;

export const CardTitle = styled.div`
    font-size: small;
    font-weight: bold;
    
    color: ${props => props.theme['white']};
`;

export const CardDescription = styled.div`
    font-size: small;
    
    color: ${props => props.theme['white-50']};
`;

export const CardTags = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 35px;
`;

export const CardImage = styled.div`
    margin-top: 10px;
    width: 180px;
    height: 40%;
    background-color: ${props => props.theme['secundary-blue-10']};
`;

export const TagSelected = styled.div`
    padding: 10px;
    border-radius: 12px;
    font-weight: bold;
    font-size: small;
    background-color: ${props => props.theme['secundary-blue-10']};
`;
