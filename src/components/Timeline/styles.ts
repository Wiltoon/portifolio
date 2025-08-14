import styled from 'styled-components';

export const TimelineSection = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 3rem auto 2rem;
    padding: 2rem 1rem;
    
    @media (max-width: 768px) {
        padding: 1.5rem 0.5rem;
        margin: 2rem auto 1rem;
    }
`;

export const TimelineContainer = styled.div`
    position: relative;
    width: 100%;
    
    @media (max-width: 768px) {
        padding-left: 2rem;
    }
`;

export const TimelineLine = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
        180deg,
        #8b5cf6 0%,
        #06b6d4 50%,
        #f59e0b 100%
    );
    transform: translateX(-50%);
    border-radius: 2px;
    
    @media (max-width: 768px) {
        left: 1rem;
        transform: none;
        width: 2px;
    }
`;

export const TimelineItem = styled.div<{ type: 'professional' | 'academic' }>`
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    align-items: flex-start;
    
    ${props => props.type === 'professional' ? `
        justify-content: flex-start;
        
        @media (min-width: 769px) {
            padding-right: 50%;
            padding-right: calc(50% + 2rem);
        }
    ` : `
        justify-content: flex-end;
        
        @media (min-width: 769px) {
            padding-left: 50%;
            padding-left: calc(50% + 2rem);
        }
    `}
    
    @media (max-width: 768px) {
        justify-content: flex-start;
        padding-left: 2.5rem;
        padding-right: 0;
    }
`;

export const TimelineDot = styled.div<{ type: 'professional' | 'academic' }>`
    position: absolute;
    left: 50%;
    top: 1rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transform: translateX(-50%);
    border: 3px solid ${props => props.theme['background']};
    background: ${props => props.type === 'professional' ? '#06b6d4' : '#8b5cf6'};
    box-shadow: 0 0 0 3px ${props => props.type === 'professional' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'};
    z-index: 2;
    
    @media (max-width: 768px) {
        left: 1rem;
        transform: none;
        width: 12px;
        height: 12px;
        border-width: 2px;
    }
`;

export const TimelineContent = styled.div<{ type: 'professional' | 'academic' }>`
    background: linear-gradient(135deg, 
        rgba(15, 23, 42, 0.9) 0%, 
        rgba(15, 23, 42, 0.7) 100%
    );
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.5rem;
    width: 100%;
    max-width: 450px;
    border: 2px solid ${props => props.type === 'professional' 
        ? 'rgba(6, 182, 212, 0.2)' 
        : 'rgba(139, 92, 246, 0.2)'};
    transition: all 0.3s ease;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 1rem;
        ${props => props.type === 'professional' ? 'right: -10px;' : 'left: -10px;'}
        width: 0;
        height: 0;
        border-style: solid;
        border-width: ${props => props.type === 'professional' 
            ? '8px 0 8px 10px' 
            : '8px 10px 8px 0'};
        border-color: ${props => props.type === 'professional' 
            ? `transparent transparent transparent rgba(6, 182, 212, 0.2)` 
            : `transparent rgba(139, 92, 246, 0.2) transparent transparent`};
        
        @media (max-width: 768px) {
            left: -10px;
            right: auto;
            border-width: 8px 10px 8px 0;
            border-color: ${props => props.type === 'professional' 
                ? 'transparent rgba(6, 182, 212, 0.2) transparent transparent' 
                : 'transparent rgba(139, 92, 246, 0.2) transparent transparent'};
        }
    }
    
    &:hover {
        transform: translateY(-4px);
        border-color: ${props => props.type === 'professional' 
            ? 'rgba(6, 182, 212, 0.4)' 
            : 'rgba(139, 92, 246, 0.4)'};
        box-shadow: 0 8px 25px ${props => props.type === 'professional' 
            ? 'rgba(6, 182, 212, 0.2)' 
            : 'rgba(139, 92, 246, 0.2)'};
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 1.25rem;
    }
`;

export const TimelineDate = styled.div`
    font-size: 0.8rem;
    color: #8b5cf6;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const TimelineTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme['white']};
    margin-bottom: 0.25rem;
    line-height: 1.3;
    
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const TimelineCompany = styled.div<{ type: 'professional' | 'academic' }>`
    font-size: 0.9rem;
    color: ${props => props.type === 'professional' ? '#06b6d4' : '#8b5cf6'};
    font-weight: 600;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const TimelineDescription = styled.p`
    font-size: 0.85rem;
    color: ${props => props.theme['white-50']};
    line-height: 1.5;
    margin-bottom: 0.75rem;
    text-align: justify;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;
