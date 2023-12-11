import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["secundary-purple-10"]};
    padding: .3rem .3rem .3rem;
    margin: 48px 96px;
    border-radius: 16px;
`;

export const HeaderContent = styled.div`
    border-radius: 15;
    width: 100%;
    max-width: 1120px;
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