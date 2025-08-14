import styled from 'styled-components';


export const CareerContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 2rem 1rem;

    @media (max-width: 768px) {
        padding: 1rem 0.5rem;
    }
`;


export const TagCareer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${props => props.theme['secundary-blue-10']};
    margin-bottom: 1rem;
    font-size: 0.9rem;

    @media (max-width: 480px) {
        width: 100px;
        height: 32px;
        font-size: 0.8rem;
    }
`;

export const TitleCareer = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    max-width: 600px;
    font-size: 2.5rem;
    color: ${props => props.theme['white']};
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
`;


export const Journalist = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
    }
`;

export const Journal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: ${props => props.theme['background-secondary']};
    border-radius: 12px;
    padding: 2rem 1rem;
    border: 1px solid ${props => props.theme['secundary-blue-10']};
    
    @media (min-width: 1024px) {
        width: 48%;
        max-width: 580px;
    }

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }
`;


export const TitleJournal = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${props => props.theme['white']};
    margin-bottom: 0.5rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const Started = styled.p`
    color: ${props => props.theme['white-50']};
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }
`;

export const Jobs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

export const LinkedInSection = styled.div`
    margin: 3rem 0 2rem;
    text-align: center;
    padding: 2rem 1rem;
    border-top: 1px solid ${props => props.theme['secundary-blue-10']};
    width: 100%;
    max-width: 600px;

    p {
        margin-bottom: 1rem;
        font-size: 1rem;
        
        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        margin: 2rem 0 1rem;
        padding: 1.5rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }
`;

export const LinkedInButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #0077b5;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;

    &:hover {
        background: #005885;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;