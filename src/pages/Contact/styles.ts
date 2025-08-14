import styled from 'styled-components';
import { colors, spacing, typography, breakpoints } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${colors.background.secondary};
  padding: ${spacing.xl} ${spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.lg} ${spacing.md};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.md} ${spacing.sm};
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: ${spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: ${typography.fontSize['5xl']};
    background: ${colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${spacing.md};

    @media (max-width: ${breakpoints.tablet}) {
      font-size: ${typography.fontSize['4xl']};
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize['3xl']};
    }
  }

  p {
    font-size: ${typography.fontSize.lg};
    color: ${colors.text.secondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.base};
    }
  }
`;
