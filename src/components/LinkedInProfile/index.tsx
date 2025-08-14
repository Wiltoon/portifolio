import { useState } from 'react';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import { ProcessedLinkedInData } from '../../services/linkedin-processor';
import {
  LinkedInContainer,
  ProfileSection,
  ProfileHeader,
  ProfileTitle,
  ProfileAbout,
  SectionTitle,
  ExperienceGrid,
  ExperienceCard,
  ExperienceHeader,
  ExperienceDetails,
  TechTags,
  TechTag,
  RecommendationsSection,
  RecommendationCard,
  RecommendationAuthor,
  RecommendationText,
  SkillsSection,
  SkillTag,
  LinkedInButton,
  ViewMoreButton
} from './styles';

interface LinkedInProfileProps {
  data?: ProcessedLinkedInData;
  showFullProfile?: boolean;
}

export function LinkedInProfile({ data }: LinkedInProfileProps) {
  const [language] = useLanguage();
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

  // Dados de exemplo (substituir pelos seus dados reais)
  const defaultData: ProcessedLinkedInData = {
    profile: {
      name: 'Wilton Costa',
      title: 'Senior Full Stack Developer',
      about: 'Desenvolvedor Full Stack apaixonado por tecnologia com 5+ anos de experiência em React, Node.js e TypeScript. Especialista em criar soluções web modernas e escaláveis.',
      profileUrl: 'https://www.linkedin.com/in/wilton-software-engineer',
      email: 'wilton@example.com',
      github: 'wiltoon'
    },
    experiences: [
      {
        id: 'exp_1',
        position: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc',
        period: 'Jan 2023 - Atual',
        startDate: '2023-01-01',
        endDate: 'At the moment',
        description: 'Desenvolvimento de aplicações web modernas usando React e Node.js. Liderança técnica de equipe de 4 desenvolvedores.',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
        achievements: ['Reduziu tempo de resposta da API em 40%', 'Implementou arquitetura de microserviços'],
        duration: '1y 8m'
      },
      {
        id: 'exp_2',
        position: 'Full Stack Developer',
        company: 'Digital Startup',
        period: 'Mar 2021 - Dez 2022',
        startDate: '2021-03-01',
        endDate: '2022-12-31',
        description: 'Desenvolvimento do zero de plataforma de e-commerce com React e Python.',
        technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
        achievements: ['Criou sistema que processou R$ 2M+ em vendas'],
        duration: '1y 10m'
      }
    ],
    education: [
      {
        id: 'edu_1',
        degree: 'Bacharelado em Ciência da Computação',
        institution: 'Universidade Federal',
        period: '2018 - 2022',
        startDate: '2018-03-01',
        endDate: '2022-12-01'
      }
    ],
    recommendations: [
      {
        id: 'rec_1',
        author: 'João Silva',
        authorPosition: 'Tech Lead',
        authorCompany: 'Tech Solutions Inc',
        text: 'Wilton é um desenvolvedor excepcional. Sua capacidade técnica e liderança foram fundamentais para o sucesso dos projetos.',
        relationship: 'manager',
        date: '2024'
      },
      {
        id: 'rec_2',
        author: 'Maria Santos',
        authorPosition: 'Product Manager',
        authorCompany: 'Digital Startup',
        text: 'Trabalhar com Wilton foi uma experiência incrível. Sempre entregava no prazo com qualidade excepcional.',
        relationship: 'colleague',
        date: '2023'
      }
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Python', 'Next.js']
  };

  const profileData = data || defaultData;

  const labels = language === 'EN' ? {
    about: 'About',
    experience: 'Professional Experience',
    recommendations: 'Recommendations',
    skills: 'Skills',
    viewProfile: 'View LinkedIn Profile',
    viewMore: 'View More',
    viewLess: 'View Less',
    duration: 'Duration',
    achievements: 'Key Achievements',
    technologies: 'Technologies'
  } : {
    about: 'Sobre',
    experience: 'Experiência Profissional',
    recommendations: 'Recomendações',
    skills: 'Competências',
    viewProfile: 'Ver Perfil no LinkedIn',
    viewMore: 'Ver Mais',
    viewLess: 'Ver Menos',
    duration: 'Duração',
    achievements: 'Principais Conquistas',
    technologies: 'Tecnologias'
  };

  const displayedExperiences = showAllExperiences 
    ? profileData.experiences 
    : profileData.experiences.slice(0, 2);

  const displayedRecommendations = showAllRecommendations
    ? profileData.recommendations
    : profileData.recommendations.slice(0, 2);

  return (
    <LinkedInContainer>
      <ProfileSection>
        <ProfileHeader>
          <h2>{profileData.profile.name}</h2>
          <ProfileTitle>{profileData.profile.title}</ProfileTitle>
        </ProfileHeader>
        
        <ProfileAbout>
          <SectionTitle>💼 {labels.about}</SectionTitle>
          <p>{profileData.profile.about}</p>
        </ProfileAbout>

        <LinkedInButton 
          href={profileData.profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>📎</span> {labels.viewProfile}
        </LinkedInButton>
      </ProfileSection>

      {profileData.experiences.length > 0 && (
        <section>
          <SectionTitle>🚀 {labels.experience}</SectionTitle>
          <ExperienceGrid>
            {displayedExperiences.map((exp) => (
              <ExperienceCard key={exp.id}>
                <ExperienceHeader>
                  <div>
                    <h4>{exp.position}</h4>
                    <span className="company">{exp.company}</span>
                  </div>
                  <div className="duration">
                    <span>{exp.period}</span>
                    <small>{exp.duration}</small>
                  </div>
                </ExperienceHeader>
                
                <ExperienceDetails>
                  <p>{exp.description}</p>
                  
                  {exp.achievements.length > 0 && (
                    <div className="achievements">
                      <strong>{labels.achievements}:</strong>
                      <ul>
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="tech-section">
                    <strong>{labels.technologies}:</strong>
                    <TechTags>
                      {exp.technologies.slice(0, 5).map((tech, index) => (
                        <TechTag key={index}>{tech}</TechTag>
                      ))}
                      {exp.technologies.length > 5 && (
                        <TechTag className="more">
                          +{exp.technologies.length - 5} {language === 'EN' ? 'more' : 'mais'}
                        </TechTag>
                      )}
                    </TechTags>
                  </div>
                </ExperienceDetails>
              </ExperienceCard>
            ))}
          </ExperienceGrid>
          
          {profileData.experiences.length > 2 && (
            <ViewMoreButton 
              onClick={() => setShowAllExperiences(!showAllExperiences)}
            >
              {showAllExperiences ? labels.viewLess : labels.viewMore} 
              ({profileData.experiences.length} {language === 'EN' ? 'experiences' : 'experiências'})
            </ViewMoreButton>
          )}
        </section>
      )}

      {profileData.skills.length > 0 && (
        <SkillsSection>
          <SectionTitle>💻 {labels.skills}</SectionTitle>
          <TechTags>
            {profileData.skills.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </TechTags>
        </SkillsSection>
      )}

      {profileData.recommendations.length > 0 && (
        <RecommendationsSection>
          <SectionTitle>💬 {labels.recommendations}</SectionTitle>
          {displayedRecommendations.map((rec) => (
            <RecommendationCard key={rec.id}>
              <RecommendationAuthor>
                <div>
                  <strong>{rec.author}</strong>
                  <span>{rec.authorPosition} • {rec.authorCompany}</span>
                </div>
                <small>{rec.date}</small>
              </RecommendationAuthor>
              <RecommendationText>"{rec.text}"</RecommendationText>
            </RecommendationCard>
          ))}
          
          {profileData.recommendations.length > 2 && (
            <ViewMoreButton 
              onClick={() => setShowAllRecommendations(!showAllRecommendations)}
            >
              {showAllRecommendations ? labels.viewLess : labels.viewMore}
              ({profileData.recommendations.length} {language === 'EN' ? 'recommendations' : 'recomendações'})
            </ViewMoreButton>
          )}
        </RecommendationsSection>
      )}
    </LinkedInContainer>
  );
}

export default LinkedInProfile;
