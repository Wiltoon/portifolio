import { styled } from 'styled-components';

export const ContactContainer = styled.section`
    display: flex;
    margin-top: 30px;
    gap: 50px;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    border: 3px solid ${props => props.theme['secundary-blue-10']};
`;

export const TagContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${props => props.theme['secundary-blue-10']};
`;

export const TitleContact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 100%;
    font-size: 64px;
    color: ${props => props.theme['white']};
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    color: ${props => props.theme['secundary-blue-50']};
    text-align: center;
`;

export const DatasContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    gap: 150px;
`;


export const MailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    gap: 15px;
`;

export const TextMail = styled.input`
    margin-left: 5px;
    font-size: 20px;
    color: ${props => props.theme['white-50']};
    font-weight: 400;
    background-color: ${props => props.theme['background-blue']};
    border: none; // Remove the border
    user-select: none; // Prevent selection with mouse
`;


export const TopBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 15px;
`;

export const TextBack = styled.div`
    color: ${props => props.theme['secundary-blue-50']};
    font-size: 20px;
    font-weight: 400;
    margin-left: 5px;
`;
