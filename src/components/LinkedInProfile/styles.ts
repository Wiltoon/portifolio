import styled from 'styled-components';

export const LinkedInContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme['background']};
  border-radius: 12px;
  border: 1px solid ${props => props.theme['secundary-blue-10']};
  
  section {
    margin-bottom: 2.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme['secundary-blue-10']};
`;

export const ProfileHeader = styled.div`
  margin-bottom: 1.5rem;
  
  h2 {
    color: ${props => props.theme['white']};
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
  }
`;

export const ProfileTitle = styled.div`
  color: ${props => props.theme['secundary-blue']};
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ProfileAbout = styled.div`
  margin: 1.5rem 0;
  text-align: left;
  
  p {
    color: ${props => props.theme['white-50']};
    font-size: 1rem;
    line-height: 1.6;
    margin: 0.5rem 0;
  }
`;

export const SectionTitle = styled.h3`
  color: ${props => props.theme['white']};
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ExperienceCard = styled.div`
  background: ${props => props.theme['background-secondary']};
  border: 1px solid ${props => props.theme['secundary-blue-10']};
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme['secundary-blue']};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  h4 {
    color: ${props => props.theme['white']};
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
  }
  
  .company {
    color: ${props => props.theme['secundary-blue']};
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  .duration {
    text-align: right;
    
    span {
      color: ${props => props.theme['white-50']};
      font-size: 0.85rem;
      display: block;
    }
    
    small {
      color: ${props => props.theme['secundary-blue-50']};
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    
    .duration {
      text-align: left;
    }
  }
`;

export const ExperienceDetails = styled.div`
  p {
    color: ${props => props.theme['white-50']};
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  
  .achievements {
    margin-bottom: 1rem;
    
    strong {
      color: ${props => props.theme['white']};
      font-size: 0.85rem;
      display: block;
      margin-bottom: 0.5rem;
    }
    
    ul {
      margin: 0;
      padding-left: 1rem;
      
      li {
        color: ${props => props.theme['white-50']};
        font-size: 0.8rem;
        line-height: 1.4;
        margin-bottom: 0.25rem;
      }
    }
  }
  
  .tech-section {
    strong {
      color: ${props => props.theme['white']};
      font-size: 0.85rem;
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TechTag = styled.span`
  background: ${props => props.theme['secundary-blue-10']};
  color: ${props => props.theme['white']};
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  
  &.more {
    background: ${props => props.theme['secundary-blue']};
    color: white;
  }
`;

export const SkillTag = styled(TechTag)`
  background: linear-gradient(135deg, ${props => props.theme['secundary-blue']}, ${props => props.theme['primary-cyan']});
  color: white;
  font-weight: 600;
`;

export const RecommendationsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RecommendationCard = styled.div`
  background: ${props => props.theme['background-secondary']};
  border: 1px solid ${props => props.theme['secundary-blue-10']};
  border-radius: 10px;
  padding: 1.5rem;
  border-left: 4px solid ${props => props.theme['primary-cyan']};
`;

export const RecommendationAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  div {
    strong {
      color: ${props => props.theme['white']};
      font-size: 1rem;
      font-weight: 600;
      display: block;
      margin-bottom: 0.25rem;
    }
    
    span {
      color: ${props => props.theme['secundary-blue']};
      font-size: 0.85rem;
    }
  }
  
  small {
    color: ${props => props.theme['white-50']};
    font-size: 0.8rem;
  }
`;

export const RecommendationText = styled.p`
  color: ${props => props.theme['white-50']};
  font-size: 0.95rem;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
  
  &::before,
  &::after {
    content: '"';
    color: ${props => props.theme['primary-cyan']};
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const SkillsSection = styled.section`
  ${TechTags} {
    justify-content: center;
  }
`;

export const LinkedInButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #0077b5, #00a0dc);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(135deg, #005885, #0077b5);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
  }

  span {
    font-size: 1.1rem;
  }
`;

export const ViewMoreButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme['secundary-blue']};
  color: ${props => props.theme['secundary-blue']};
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  margin: 1rem auto 0;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme['secundary-blue']};
    color: white;
    transform: translateY(-1px);
  }
`;
