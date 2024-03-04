import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["secundary-purple-10"]};
    padding: .3rem .3rem .3rem;
    margin: 48px 96px;
    border-radius: 16px;
`;

export const HeaderLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

export const HeaderContent = styled.div`
    border-radius: 15;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderMenu = styled.div`
    font-family: 100 .5rem Raleway, sans-serif;
    display: flex;
    color: ${props=>props.theme['white-50']};
`;

export const HeaderItem = styled.div`
    margin-left: 17px;
    &:hover {
        color: ${props => props.theme['secundary-blue']};
    }
`;

export const LanguageButtons = styled.div`
    gap: 10px;
    display: flex;
`;

export const BrenButton = styled.button`
    width: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme['background-blue']};
    color: ${props => props.theme['white-50']};
    border-radius: 15px;
    border-color: ${props => props.theme['white-50']};
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transition: background-color 0.4s;
        background-color: ${props => props.theme['white-50']};
    }
`;