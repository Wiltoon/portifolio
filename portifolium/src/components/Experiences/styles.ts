import { styled } from "styled-components";

export const ExpContainer = styled.section`
    width: 100%;
    max-width: 1540px;
    height: 300px;
    align-items: center; 
    justify-content: center;
    margin: 0 auto;
    padding: 0 15rem;
    background-color: ${props => props.theme['background-blue']};
    border-top-style: solid;
    border-bottom-style: solid;
    display: flex;
    gap: 60px;
    border-color: ${props => props.theme['secundary-blue-10']};
    color: ${props => props.theme['secundary-blue-50']};
    `;

export const ExpCard = styled.div`
    width: 180px;
    height: 120px;
    border-radius: 10px;
    font-weight: bold;
    border-style: solid;
    border-width: 1px;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['background-blue']};
    border-color: ${props => props.theme['secundary-blue-50']};
    display: block;
    justify-content: center;
    align-items: center;
`;

export const ContentCard = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

