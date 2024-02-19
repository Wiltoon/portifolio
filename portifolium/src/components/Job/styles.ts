import { styled } from 'styled-components';


export const JobContainer = styled.section`
    margin-top: 30px;
    padding: 30px;
    border-radius: 10px;
    width: 450px;
    border: 3px solid ${props => props.theme['secundary-blue-10']};
`;

export const TitleJob = styled.div`
    display: flex;
    font-weight: 700;
    width: 300px;
    font-size: large;
    color: ${props => props.theme['white']};
`;

export const JobDescription = styled.div`
    display: flex;
    font-weight: 400;
    font-size: medium;
    color: ${props => props.theme['white-50']};
`;

export const FooterJob = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Duration = styled.div`
    display: flex;
    font-weight: 700;
    font-size: medium;
    color: ${props => props.theme['secundary-blue']};
`;

export const DataJob = styled.div`
    display: flex;
    font-weight: 400;
    font-size: medium;
    color: ${props => props.theme['secundary-blue-50']};
`;


export const TagsItems = styled.div`
    display: flex;  
    flex-wrap: wrap;
    gap: 5px; /* Reduce the gap value */
`;

export const ItemExp = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: fit-content;
    padding: 10px;
    height: 30px;
    background-color: ${props => props.theme['secundary-blue-10']};
    text-align: center;
`;