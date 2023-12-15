import { styled } from "styled-components";

export const ExpContainer = styled.section`
    width: 100%;
    max-width: 1140px;
    height: 300px;
    align-items: center;
    margin: 0 auto;
    background-color: ${props => props.theme['background-blue']};
    border-top-style: solid;
    border-bottom-style: solid;
    display: flex;
    justify-content: space-evenly;
    border-color: ${props => props.theme['secundary-blue-10']};
    color: ${props => props.theme['secundary-blue-50']};
    `;

export const ExpCard = styled.div`
    width: 200px;
    height: 120px;
    border-radius: 10px;
    font-weight: bold;
    border-style: solid;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['background-blue']};
    border-color: ${props => props.theme['secundary-blue-10']};
    display: block;
`;

