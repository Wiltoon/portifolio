import styled from 'styled-components';

export const TimelineWrapper = styled.section`
    width: 100%;
    margin: 4rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, 
        rgba(15, 23, 42, 0.5) 0%, 
        rgba(30, 41, 59, 0.3) 100%
    );
    border-radius: 24px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    
    @media (max-width: 768px) {
        margin: 2rem 0;
        padding: 2rem 0;
        border-radius: 16px;
    }
`;

export const TimelineHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

export const TimelineSectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.theme['white']};
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #f59e0b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const TimelineSectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme['white-50']};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 1rem;
    }
`;

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

export const TimelineItem = styled.div<{ side: 'left' | 'right' }>`
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    align-items: flex-start;
    
    ${props => props.side === 'left' ? `
        justify-content: flex-start;
        
        @media (min-width: 1200px) {
            padding-right: calc(50% + 0.2rem);
        }
        
        @media (min-width: 769px) and (max-width: 1199px) {
            padding-right: calc(50% + 0.3rem);
        }
    ` : `
        justify-content: flex-end;
        
        @media (min-width: 1200px) {
            padding-left: calc(50% + 0.2rem);
        }
        
        @media (min-width: 769px) and (max-width: 1199px) {
            padding-left: calc(50% + 0.3rem);
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
    min-width: 90px;
    height: 50px;
    border-radius: 25px;
    transform: translateX(-50%);
    border: 3px solid ${props => props.theme['background']};
    background: ${props => props.type === 'professional' ? '#06b6d4' : '#8b5cf6'};
    box-shadow: 0 0 0 3px ${props => props.type === 'professional' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'};
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    color: white;
    text-align: center;
    line-height: 1.1;
    padding: 4px;
    
    @media (max-width: 768px) {
        left: 1rem;
        transform: none;
        min-width: 70px;
        height: 40px;
        border-radius: 20px;
        border-width: 2px;
        font-size: 0.6rem;
        padding: 2px;
    }
`;

export const TimelineContent = styled.div<{ type: 'professional' | 'academic', side: 'left' | 'right' }>`
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
        width: 0;
        height: 0;
        border-style: solid;

        @media (min-width: 769px) {
            ${props => {
                const color = props.type === 'professional' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(139, 92, 246, 0.2)';
                if (props.side === 'left') {
                    // card on left, arrow points right
                    return `
                        right: -4px;
                        border-width: 8px 4px 8px 0;
                        border-color: transparent ${color} transparent transparent;
                    `;
                } else {
                    // card on right, arrow points left
                    return `
                        left: -4px;
                        border-width: 8px 0 8px 4px;
                        border-color: transparent transparent transparent ${color};
                    `;
                }
            }}
        }

        @media (max-width: 768px) {
            // all cards on right of line, arrows point left
            left: -10px;
            right: auto;
            border-width: 8px 0 8px 10px;
            border-color: transparent transparent transparent ${props => props.type === 'professional' 
                ? 'rgba(6, 182, 212, 0.2)' 
                : 'rgba(139, 92, 246, 0.2)'};
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

export const ConnectionLineVertical = styled.div`
    position: absolute;
    width: 3px;
    background: #f59e0b; /* Amber */
    transform: translateX(-50%);
    z-index: 0;
    border-radius: 2px;
`;

export const ConnectionLineHorizontal = styled.div`
    position: absolute;
    height: 3px;
    background: #f59e0b; /* Amber */
    z-index: 0;
    border-radius: 2px;
`;

export const DurationBadge = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #f59e0b;
    color: #0f172a; /* Slate 900 */
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 3;
    white-space: nowrap;
    border: 2px solid ${props => props.theme['background']};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const CurrentTimelineItem = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const CurrentTimelineDot = styled.div`
    position: absolute;
    left: 50%;
    top: 1rem;
    min-width: 100px;
    height: 50px;
    border-radius: 25px;
    transform: translateX(-50%);
    border: 3px solid ${props => props.theme['background']};
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    color: white;
    text-align: center;
    line-height: 1.2;
    animation: pulse 2s infinite;
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
        }
        50% {
            box-shadow: 0 0 0 6px rgba(245, 158, 11, 0.2);
        }
        100% {
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
        }
    }
    
    @media (max-width: 768px) {
        left: 1rem;
        transform: none;
        min-width: 80px;
        height: 40px;
        border-radius: 20px;
        border-width: 2px;
        font-size: 0.7rem;
    }
`;

export const CurrentTimelineContent = styled.div`
    background: linear-gradient(135deg, 
        rgba(245, 158, 11, 0.15) 0%, 
        rgba(217, 119, 6, 0.1) 100%
    );
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    border: 2px solid rgba(245, 158, 11, 0.3);
    transition: all 0.3s ease;
    position: relative;
    margin-top: 3rem;
    
    &:hover {
        transform: translateY(-4px);
        border-color: rgba(245, 158, 11, 0.5);
        box-shadow: 0 8px 25px rgba(245, 158, 11, 0.2);
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 1.25rem;
        margin-left: 2.5rem;
    }
`;

export const CurrentTimelineTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    color: #f59e0b;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

export const CurrentTimelineDescription = styled.p`
    font-size: 0.9rem;
    color: ${props => props.theme['white-50']};
    line-height: 1.5;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`;
