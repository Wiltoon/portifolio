import styled from 'styled-components';
import { colors, spacing, typography, shadows, radius } from '../../styles/theme';

export const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.cardOverlay};
  color: ${colors.text.secondary};
  padding: 0.25rem 0.5rem;
  border-radius: ${radius.small};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  border: 1px solid ${colors.borderLight};
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

export const CardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const TagSelected = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
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

export const ProjectsInfo = styled.div`
  text-align: center;
  margin: ${spacing.lg} 0;
  color: ${colors.text.secondary};
  font-size: ${typography.fontSize.sm};
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: ${spacing.xl} auto;
  background: ${colors.gradients.primary};
  color: ${colors.text.primary};
  border: none;
  padding: ${spacing.md} ${spacing.xl};
  border-radius: ${radius.medium};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${shadows.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.hover};
    background: ${colors.gradients.hover};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.md};
  margin: ${spacing.xl} 0;
`;

export const PaginationButton = styled.button`
  background: ${colors.cardOverlay};
  border: 1px solid ${colors.borderLight};
  color: ${colors.text.primary};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${radius.small};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.gradients.card};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;
