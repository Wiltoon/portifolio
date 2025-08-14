import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  section {
    min-height: 100vh;
    padding: ${spacing.xl} ${spacing.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: ${breakpoints.tablet}) {
      padding: ${spacing.lg} ${spacing.md};
      min-height: auto;
      padding-top: ${spacing.xl};
      padding-bottom: ${spacing.xl};
    }

    @media (max-width: ${breakpoints.mobile}) {
      padding: ${spacing.md} ${spacing.sm};
    }
  }

  #home {
    background: ${colors.background.gradient};
  }

  #about {
    background: ${colors.background.secondary};
  }

  #skills {
    background: ${colors.background.main};
  }
`;
