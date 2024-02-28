import { styled } from "styled-components";

export const FooterContainer = styled.section`
    height: 80px;
    display: flex;
    flex-direction: row;
    color: ${props => props.theme['white-50']};
    background-color: ${props => props.theme['secundary-blue-10']};
`;

export const TextFooter = styled.div`
    height: 100%;
    padding-left: 80px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-family: Haleway, sans-serif;
`;

export const HomeLinks = styled.div`
    margin: 23%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    height: 20px;
`;

export const HomeLink = styled.div`
    margin-right: 15px;
`;