import { styled } from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 600px;
`;

export const AboutPhoto = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 400px;
    background-color: ${props => props.theme['white']};
`;

export const TagAboutMe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${props => props.theme['secundary-blue-10']};
`;

export const Name = styled.div`
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${props => props.theme['white']};
`;

export const Description = styled.div`
    font-weight: 400;
    color: ${props => props.theme['white-50']};
`;