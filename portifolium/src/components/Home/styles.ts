import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
`;

export const HomeName = styled.div`
    font-family: 700 1rem Raleway, sans-serif;
    font-size: large;
`;

export const HomeCV = styled.div`
    color: ${props=>props.theme['secundary-blue-50']};
    justify-content: center;
    vertical-align: middle;
`;

export const HomeDowload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeContact = styled.button`
    margin-top: 17px;
    width: 200px;
    align-items: center;
    display: flex;
    padding: 10px;
    background-color: ${props => props.theme['background-blue']};
    color: ${props => props.theme['secundary-blue-50']};
    border-radius: 15px;
    border-color: ${props => props.theme['secundary-blue-50']};
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transition: background-color 0.4s;
        background-color: ${props => props.theme['secundary-blue-50']};
    }
`;

export const HomeFrase = styled.div`
    margin-left: 5px;
`;

export const HomeSaudacao = styled.div`
    width: 120px;
    border-radius: 10px;
    font-size: 15px;
    padding: 5px;
    padding-right: -20px;
    margin-bottom: 35px;
    background-color: ${props => props.theme['secundary-blue']};
    color: ${props => props.theme['background-blue']};
    font-weight: bold;
`;

export const HomeMark = styled.div`
    display: flex;
`;
export const HomeNome = styled.div`
    margin-top: -15px;
    margin-right: 20px;
    font-size: 48px;
    font-family: 700 1rem Raleway, sans-serif;
    font-weight: bold;
`;

export const HomeProfissional = styled.div`
    color: ${props => props.theme['white-50']};
    margin-top: 30px;
`;

export const HomeLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
`;

export const HomeLink = styled.div`
    margin-right: 15px;
`;