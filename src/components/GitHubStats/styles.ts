import styled from 'styled-components';

export const StatsContainer = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

export const StatsTitle = styled.h2`
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #4ecdc4;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const StatLabel = styled.div`
  color: #b8b8b8;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const ChartContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #ffffff;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const LanguageList = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export const LanguageItem = styled.div`
  margin-bottom: 1rem;
  
  span {
    color: #ffffff;
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

export const LanguagePercent = styled.span`
  color: #4ecdc4 !important;
  font-weight: bold !important;
`;

export const LanguageBar = styled.div<{ percentage: number; color: string }>`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.percentage}%;
    background: ${props => props.color};
    border-radius: 4px;
    animation: slideIn 1s ease-out;
  }

  @keyframes slideIn {
    from {
      width: 0%;
    }
    to {
      width: ${props => props.percentage}%;
    }
  }
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  color: #4ecdc4;
  font-size: 1.1rem;
  padding: 2rem;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-size: 1.1rem;
  padding: 2rem;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 107, 107, 0.3);
`;
