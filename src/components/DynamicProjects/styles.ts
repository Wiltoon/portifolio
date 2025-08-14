import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Tag = styled.span`
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
`;

export const HeaderPortifolio = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TitleWorks = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`;

export const SelectWorks = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const ButtonWork = styled.button<{ active?: boolean }>`
  background: ${props => props.active 
    ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' 
    : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#b8b8b8'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.3)'};
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' 
      : 'rgba(255, 255, 255, 0.1)'};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const ProjectCard = styled.div`
  background: linear-gradient(135deg, #2d2d44 0%, #3d3d5c 100%);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(78, 205, 196, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
    background-size: 400% 400%;
    animation: gradientShift 3s ease infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

export const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const CardDescription = styled.p`
  color: #b8b8b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  min-height: 60px;
`;

export const CardStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const StatItem = styled.span`
  color: #4ecdc4;
  font-size: 0.8rem;
  background: rgba(78, 205, 196, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  border: 1px solid rgba(78, 205, 196, 0.3);
`;

export const CardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const TagSelected = styled.span<{ color?: string }>`
  background: ${props => props.color ? `${props.color}20` : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.color || '#ffffff'};
  border: 1px solid ${props => props.color ? `${props.color}50` : 'rgba(255, 255, 255, 0.3)'};
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const CardLink = styled.a`
  color: #4ecdc4;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #4ecdc4;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #4ecdc4;
    color: #1e1e2e;
    transform: translateY(-2px);
  }
`;

export const CardImage = styled.div`
  height: 80px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const LoadingCard = styled.div`
  background: linear-gradient(135deg, #2d2d44 0%, #3d3d5c 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: pulse 1.5s ease-in-out infinite;

  .loading-content {
    .loading-title {
      height: 24px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
      background-size: 200% 100%;
      border-radius: 4px;
      margin-bottom: 1rem;
      animation: shimmer 2s infinite;
    }

    .loading-description {
      height: 60px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
      background-size: 200% 100%;
      border-radius: 4px;
      margin-bottom: 1rem;
      animation: shimmer 2s infinite 0.5s;
    }

    .loading-tags {
      height: 30px;
      width: 60%;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
      background-size: 200% 100%;
      border-radius: 4px;
      animation: shimmer 2s infinite 1s;
    }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

export const FilteredMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  color: #b8b8b8;
  font-size: 1.1rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

export const ModalContent = styled.div`
  background: linear-gradient(135deg, #2d2d44 0%, #3d3d5c 100%);
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: modalSlideIn 0.3s ease-out;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    color: #ffffff;
    margin: 0;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 107, 107, 0.2);
    color: #ff6b6b;
  }
`;

export const ModalBody = styled.div`
  padding: 0;
  max-height: 60vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(78, 205, 196, 0.5);
    border-radius: 4px;
  }
`;

export const ReadmeContent = styled.div`
  padding: 2rem;
  color: #ffffff;
  line-height: 1.6;

  h1, h2, h3, h4, h5, h6 {
    color: #4ecdc4;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.3rem; }

  p {
    margin-bottom: 1rem;
    color: #b8b8b8;
  }

  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    color: #ff6b6b;
  }

  pre {
    background: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1rem 0;
    border-left: 4px solid #4ecdc4;
  }

  pre code {
    background: none;
    padding: 0;
    color: #ffffff;
  }

  ul, ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #b8b8b8;
  }

  a {
    color: #4ecdc4;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s ease;

    &:hover {
      border-bottom-color: #4ecdc4;
    }
  }

  blockquote {
    border-left: 4px solid #ff6b6b;
    padding-left: 1rem;
    margin: 1rem 0;
    background: rgba(255, 107, 107, 0.1);
    border-radius: 0 8px 8px 0;
    
    p {
      color: #ffffff;
      font-style: italic;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    border-radius: 8px;
    overflow: hidden;
  }

  th, td {
    padding: 0.8rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  th {
    background: rgba(78, 205, 196, 0.2);
    color: #4ecdc4;
    font-weight: 600;
  }

  td {
    color: #b8b8b8;
  }
`;
