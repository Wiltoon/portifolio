import { styled } from 'styled-components'

export const SkillsExpContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex;
    width: 100%;
    height: 600px;
`;

export const Tag = styled.div`
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 210px;
    height: 35px;
    background-color: ${props => props.theme['secundary-blue-10']};
`;

export const TitleSkills = styled.div`
    font-weight: 700;
    width: 600px;
    font-size: 36px; // Change font size to 24px
    color: ${props => props.theme['white']};
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 30px;
`;

export const SubTitleSkills = styled.div`
    font-weight: 400;
    font-size: 24px; // Change font size to 24px
    color: ${props => props.theme['white-50']};
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 600px;
`;

export const StackDaily = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;