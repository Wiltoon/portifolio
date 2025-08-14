import styled from 'styled-components';
import { colors, spacing, typography, shadows, radius, breakpoints } from '../../styles/theme';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background: ${colors.background.card};
  border: 1px solid ${colors.borderLight};
  border-radius: ${radius.large};
  padding: ${spacing.xl};
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  margin: ${spacing.md};
  position: relative;
  box-shadow: ${shadows.hover};

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 95vw;
    padding: ${spacing.lg};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.md};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${spacing.lg};
  padding-bottom: ${spacing.md};
  border-bottom: 1px solid ${colors.borderLight};
`;

export const ModalTitle = styled.h2`
  color: ${colors.text.primary};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.semibold};
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.xl};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.text.secondary};
  font-size: ${typography.fontSize['2xl']};
  cursor: pointer;
  padding: ${spacing.xs};
  border-radius: ${radius.small};
  transition: all 0.3s ease;
  line-height: 1;

  &:hover {
    background: ${colors.cardOverlay};
    color: ${colors.text.primary};
  }
`;

export const ModalSection = styled.div`
  margin-bottom: ${spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  color: ${colors.primary};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  margin-bottom: ${spacing.md};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

export const SectionContent = styled.div`
  color: ${colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${spacing.md};
`;

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
`;

export const Tag = styled.span`
  background: ${colors.cardOverlay};
  color: ${colors.text.primary};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${radius.small};
  font-size: ${typography.fontSize.sm};
  border: 1px solid ${colors.borderLight};
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.gradients.card};
    transform: translateY(-1px);
  }
`;

export const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ProjectItem = styled.li`
  color: ${colors.text.secondary};
  margin-bottom: ${spacing.sm};
  padding-left: ${spacing.md};
  position: relative;
  line-height: 1.5;

  &:before {
    content: '🚀';
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const Duration = styled.div`
  background: ${colors.gradients.card};
  color: ${colors.text.primary};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${radius.medium};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  display: inline-block;
  margin-bottom: ${spacing.md};
`;

export const LinkedInSection = styled.div`
  background: ${colors.gradients.card};
  border-radius: ${radius.medium};
  padding: ${spacing.md};
  margin-top: ${spacing.lg};
  border: 1px solid ${colors.borderLight};
`;

export const LinkedInButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  background: #0077b5;
  color: white;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${radius.small};
  text-decoration: none;
  font-weight: ${typography.fontWeight.medium};
  transition: all 0.3s ease;

  &:hover {
    background: #005885;
    transform: translateY(-1px);
    box-shadow: ${shadows.medium};
  }
`;
