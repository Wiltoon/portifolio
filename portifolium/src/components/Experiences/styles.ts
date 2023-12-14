import { styled } from "styled-components";

export const ExpContainer = styled.section`
    width: 100%;
    height: 300px;
    align-items: center;
    margin: 0 auto;
    padding: 0 15rem;
    background-color: ${props => props.theme['background-blue']};
    border-top-style: solid;
    border-bottom-style: solid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
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

