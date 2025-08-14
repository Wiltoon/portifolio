import { useEffect } from 'react';
import { differenceInMonths, format } from 'date-fns';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalSection,
  SectionTitle,
  SectionContent,
  TagsList,
  Tag,
  ProjectsList,
  ProjectItem,
  Duration,
  LinkedInSection,
  LinkedInButton
} from './styles';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    title: string;
    company?: string;
    description: string;
    languages: string[];
    databases: string[];
    projects: string[];
    learnings: string[];
    startDate: string;
    endDate: string;
    achievements?: string[];
    responsibilities?: string[];
    linkedInUrl?: string;
    recommendations?: Array<{
      author: string;
      text: string;
      relationship: string;
    }>;
  };
}

export function JobModal({ isOpen, onClose, job }: JobModalProps) {
  const [language] = useLanguage();

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const startDate = new Date(job.startDate);
  const endDate = job.endDate === 'At the moment' ? new Date() : new Date(job.endDate);
  const durationInMonths = differenceInMonths(endDate, startDate);
  
  const formatDuration = () => {
    const years = Math.floor(durationInMonths / 12);
    const months = durationInMonths % 12;
    
    if (language === 'EN') {
      if (years > 0 && months > 0) return `${years}y ${months}mo`;
      if (years > 0) return `${years} year${years > 1 ? 's' : ''}`;
      return `${months} month${months > 1 ? 's' : ''}`;
    } else {
      if (years > 0 && months > 0) return `${years}a ${months}m`;
      if (years > 0) return `${years} ano${years > 1 ? 's' : ''}`;
      return `${months} mes${months > 1 ? 'es' : ''}`;
    }
  };

  const formatPeriod = () => {
    const startFormatted = format(startDate, 'MMM yyyy');
    const endFormatted = job.endDate === 'At the moment' 
      ? (language === 'EN' ? 'Present' : 'Atual')
      : format(endDate, 'MMM yyyy');
    
    return `${startFormatted} - ${endFormatted}`;
  };

  const labels = language === 'EN' ? {
    duration: 'Duration',
    description: 'Description', 
    technologies: 'Technologies',
    databases: 'Databases',
    projects: 'Key Projects',
    learnings: 'Learning & Growth',
    achievements: 'Achievements',
    responsibilities: 'Key Responsibilities',
    recommendations: 'Recommendations',
    viewOnLinkedIn: 'View on LinkedIn',
    company: 'Company'
  } : {
    duration: 'Duração',
    description: 'Descrição',
    technologies: 'Tecnologias', 
    databases: 'Bancos de Dados',
    projects: 'Projetos Principais',
    learnings: 'Aprendizados',
    achievements: 'Conquistas',
    responsibilities: 'Principais Responsabilidades',
    recommendations: 'Recomendações',
    viewOnLinkedIn: 'Ver no LinkedIn',
    company: 'Empresa'
  };

  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <div>
            <ModalTitle>{job.title}</ModalTitle>
            {job.company && (
              <div style={{ color: '#8b5cf6', fontSize: '1rem', marginTop: '0.5rem' }}>
                {job.company}
              </div>
            )}
          </div>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <Duration>
          {formatPeriod()} • {formatDuration()}
        </Duration>

        <ModalSection>
          <SectionTitle>📋 {labels.description}</SectionTitle>
          <SectionContent>{job.description}</SectionContent>
        </ModalSection>

        {job.achievements && job.achievements.length > 0 && (
          <ModalSection>
            <SectionTitle>🏆 {labels.achievements}</SectionTitle>
            <ProjectsList>
              {job.achievements.map((achievement, index) => (
                <ProjectItem key={index}>{achievement}</ProjectItem>
              ))}
            </ProjectsList>
          </ModalSection>
        )}

        {job.languages.length > 0 && (
          <ModalSection>
            <SectionTitle>💻 {labels.technologies}</SectionTitle>
            <TagsList>
              {job.languages.map((tech, index) => (
                <Tag key={index}>{tech}</Tag>
              ))}
            </TagsList>
          </ModalSection>
        )}

        {job.databases.length > 0 && (
          <ModalSection>
            <SectionTitle>🗄️ {labels.databases}</SectionTitle>
            <TagsList>
              {job.databases.map((db, index) => (
                <Tag key={index}>{db}</Tag>
              ))}
            </TagsList>
          </ModalSection>
        )}

        {job.projects.length > 0 && (
          <ModalSection>
            <SectionTitle>🚀 {labels.projects}</SectionTitle>
            <ProjectsList>
              {job.projects.map((project, index) => (
                <ProjectItem key={index}>{project}</ProjectItem>
              ))}
            </ProjectsList>
          </ModalSection>
        )}

        {job.learnings.length > 0 && (
          <ModalSection>
            <SectionTitle>📚 {labels.learnings}</SectionTitle>
            <ProjectsList>
              {job.learnings.map((learning, index) => (
                <ProjectItem key={index}>{learning}</ProjectItem>
              ))}
            </ProjectsList>
          </ModalSection>
        )}

        {job.responsibilities && job.responsibilities.length > 0 && (
          <ModalSection>
            <SectionTitle>📝 {labels.responsibilities}</SectionTitle>
            <ProjectsList>
              {job.responsibilities.map((responsibility, index) => (
                <ProjectItem key={index}>{responsibility}</ProjectItem>
              ))}
            </ProjectsList>
          </ModalSection>
        )}

        {job.recommendations && job.recommendations.length > 0 && (
          <ModalSection>
            <SectionTitle>💬 {labels.recommendations}</SectionTitle>
            {job.recommendations.map((rec, index) => (
              <div key={index} style={{ 
                backgroundColor: '#1e293b', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                marginBottom: '0.5rem',
                borderLeft: '3px solid #8b5cf6'
              }}>
                <p style={{ 
                  fontStyle: 'italic', 
                  marginBottom: '0.5rem',
                  color: '#e2e8f0'
                }}>
                  "{rec.text}"
                </p>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#94a3b8',
                  textAlign: 'right'
                }}>
                  — {rec.author} ({rec.relationship})
                </p>
              </div>
            ))}
          </ModalSection>
        )}

        {job.linkedInUrl && (
          <LinkedInSection>
            <LinkedInButton href={job.linkedInUrl} target="_blank" rel="noopener noreferrer">
              <span>💼</span> {labels.viewOnLinkedIn}
            </LinkedInButton>
          </LinkedInSection>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}
