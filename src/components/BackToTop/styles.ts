import styled from 'styled-components';

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(1.05);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
`;

export const BackToTopIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;
