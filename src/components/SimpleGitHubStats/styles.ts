import styled from 'styled-components';
import { colors, spacing, typography, shadows, radius, breakpoints } from '../../styles/theme';

export const StatsContainer = styled.div`
  max-width: 600px;
  margin: ${spacing.xl} auto;
  padding: ${spacing.xl};
  background: ${colors.gradients.card};
  border-radius: ${radius.large};
  border: 1px solid ${colors.borderLight};
  box-shadow: ${shadows.card};
  backdrop-filter: blur(10px);
  
  @media (max-width: ${breakpoints.tablet}) {
    margin: ${spacing.lg} auto;
    padding: ${spacing.lg};
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: ${spacing.md} ${spacing.sm};
    padding: ${spacing.md};
  }
`;

export const StatsTitle = styled.h2`
  color: ${colors.text.primary};
  font-size: ${typography.fontSize['2xl']};
  margin-bottom: ${spacing.xl};
  text-align: center;
  background: ${colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${typography.fontWeight.semibold};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.xl};
    margin-bottom: ${spacing.lg};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.lg};

  @media (max-width: ${breakpoints.tablet}) {
    gap: ${spacing.md};
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${spacing.md};
  }
`;

export const StatCard = styled.div`
  background: ${colors.background.card};
  border-radius: ${radius.medium};
  padding: ${spacing.lg} ${spacing.md};
  text-align: center;
  border: 1px solid ${colors.borderLight};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${colors.gradients.primary};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.hover};
    background: ${colors.gradients.card};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.md};
  }
`;

export const StatNumber = styled.div`
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.primary};
  margin-bottom: ${spacing.sm};
  font-family: ${typography.fontFamily.mono};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize['2xl']};
  }
`;

export const StatLabel = styled.div`
  color: ${colors.text.secondary};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.xs};
  }
`;

export const LoadingCard = styled.div`
  max-width: 600px;
  margin: ${spacing.xl} auto;
  padding: ${spacing.xl};
  text-align: center;
  background: ${colors.gradients.card};
  border-radius: ${radius.large};
  border: 1px solid ${colors.borderLight};
  color: ${colors.primary};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.medium};
  
  @media (max-width: ${breakpoints.tablet}) {
    margin: ${spacing.lg} auto;
    padding: ${spacing.lg};
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: ${spacing.md} ${spacing.sm};
    padding: ${spacing.md};
    font-size: ${typography.fontSize.base};
  }
`;
