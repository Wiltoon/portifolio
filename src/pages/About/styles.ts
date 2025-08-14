import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme['background']};
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme['white']};
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme['white-50']};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;
