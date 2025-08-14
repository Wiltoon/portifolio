import { styled } from 'styled-components';


export const JobContainer = styled.section`
    height: auto;
    padding: 2rem;
    border-radius: 16px;
    width: 100%;
    max-width: 500px;
    border: 2px solid ${props => props.theme['secundary-blue-10']};
    background: linear-gradient(135deg, 
        rgba(15, 23, 42, 0.9) 0%, 
        rgba(15, 23, 42, 0.7) 100%
    );
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #8b5cf6, #06b6d4, #f59e0b);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        border-color: ${props => props.theme['purple']};
        transform: translateY(-8px);
        box-shadow: 
            0 20px 40px rgba(139, 92, 246, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.3);
        
        &::before {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
        max-width: 100%;
        
        &:hover {
            transform: translateY(-4px);
        }
    }

    @media (max-width: 480px) {
        padding: 1.25rem;
        border-width: 1px;
        border-radius: 12px;
        
        &:hover {
            transform: translateY(-2px);
        }
    }
`;

export const TitleJob = styled.h3`
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: ${props => props.theme['white']};
    line-height: 1.3;
    background: linear-gradient(135deg, #ffffff, #e2e8f0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const JobDescription = styled.p`
    font-weight: 400;
    font-size: 0.95rem;
    color: ${props => props.theme['white-50']};
    line-height: 1.6;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        -webkit-line-clamp: 2;
        margin-bottom: 1.25rem;
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }
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
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

export const ItemExp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    width: fit-content;
    padding: 0.5rem 1rem;
    height: auto;
    min-height: 32px;
    background: linear-gradient(135deg, 
        rgba(139, 92, 246, 0.15), 
        rgba(6, 182, 212, 0.15)
    );
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: ${props => props.theme['white']};
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);

    &:hover {
        background: linear-gradient(135deg, 
            rgba(139, 92, 246, 0.25), 
            rgba(6, 182, 212, 0.25)
        );
        border-color: rgba(139, 92, 246, 0.5);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(139, 92, 246, 0.2);
    }

    @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.75rem;
        min-height: 28px;
    }
`;

export const DetailsButton = styled.button`
    background: linear-gradient(135deg, #06b6d4, #0891b2);
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    box-shadow: 0 2px 4px rgba(6, 182, 212, 0.2);

    &:hover {
        background: linear-gradient(135deg, #0891b2, #0e7490);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.75rem;
    }
`;