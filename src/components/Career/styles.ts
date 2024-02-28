import styled from 'styled-components';


export const CareerContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 2500px;
`;


export const TagCareer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${props => props.theme['secundary-blue-10']};
`;

export const TitleCareer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${props => props.theme['white']};
`;


export const Journal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 10px;
`;
export const Journalist = styled.div`
    margin-top: 50px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > ${Journal} {
        margin: 0 10px; // Add margin to create spacing between Journal components
    }
`;


export const TitleJournal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; // Adicionado para centralizar o componente
    font-weight: 700;
    width: 300px;
    font-size: x-large;
    color: ${props => props.theme['white']};
`;
export const Started = styled.div`
    
    color: ${props => props.theme['white-50']};
`;

export const Jobs = styled.div`
    gap: 20px;
    height: auto;
`;