import styled from 'styled-components';
import { colors, typography, spacing, shadows, breakpoints, radius } from '../../styles/theme';

interface NavProps {
  scrolled: boolean;
}

interface NavLinkProps {
  active: boolean;
}

interface MobileMenuProps {
  open: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.scrolled 
    ? `${colors.background.main}dd` 
    : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? shadows.medium : 'none'};
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.md} ${spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.sm} ${spacing.md};
  }
`;

export const Logo = styled.div`
  font-family: ${typography.fontFamily.mono};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.accent};
    transform: scale(1.05);
  }

  span {
    background: ${colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${spacing.lg};

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.div<NavLinkProps>`
  color: ${props => props.active ? colors.primary : colors.text.primary};
  text-decoration: none;
  font-weight: ${typography.fontWeight.medium};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
    background: ${colors.cardOverlay};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: ${props => props.active ? '80%' : '0'};
    height: 2px;
    background: ${colors.gradients.primary};
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${spacing.sm};

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }

  span {
    width: 24px;
    height: 3px;
    background: ${colors.primary};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover span {
    background: ${colors.accent};
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${colors.background.main};
  box-shadow: ${shadows.large};
  border-top: 1px solid ${colors.borderLight};
  display: flex;
  flex-direction: column;
  transform: translateY(${props => props.open ? '0' : '-100%'});
  opacity: ${props => props.open ? '1' : '0'};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transition: all 0.3s ease;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNavLink = styled.div<NavLinkProps>`
  color: ${props => props.active ? colors.primary : colors.text.primary};
  text-decoration: none;
  font-weight: ${typography.fontWeight.medium};
  padding: ${spacing.md} ${spacing.lg};
  border-bottom: 1px solid ${colors.borderLight};
  transition: all 0.3s ease;
  background: ${props => props.active ? colors.cardOverlay : 'transparent'};
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
    background: ${colors.cardOverlay};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: ${spacing.xs};
  background: ${colors.cardOverlay};
  border-radius: ${radius.small};
  padding: ${spacing.xs};
  border: 1px solid ${colors.borderLight};

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`;

interface LanguageButtonProps {
  active: boolean;
}

export const LanguageButton = styled.button<LanguageButtonProps>`
  background: ${props => props.active ? colors.gradients.primary : 'transparent'};
  color: ${props => props.active ? colors.text.primary : colors.text.secondary};
  border: none;
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${radius.small};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 36px;

  &:hover {
    background: ${props => props.active ? colors.gradients.primary : colors.cardOverlay};
    color: ${colors.text.primary};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
