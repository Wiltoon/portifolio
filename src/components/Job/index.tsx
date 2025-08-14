import { useState } from 'react';
import { differenceInMonths } from 'date-fns';
import { useLanguage } from '../../styles/languages/LanguageProvider';

import { 
    JobContainer,
    JobDescription,
    TitleJob,
    FooterJob,
    Duration,
    DataJob,
    ItemExp,
    TagsItems,
    DetailsButton
} from './styles';

interface JobProps {
    title: string;
    company?: string;
    description: string;
    languages: string[];
    databases: string[];
    projects: string[];
    learnings: string[];
    startDate: string;
    endDate: string;
    onDetailsClick?: () => void;
}

export function Job(props: JobProps) {
    const [expanded, setExpanded] = useState(false);
    const [language] = useLanguage();
    
    const startDate = new Date(props.startDate);
    const endDate = props.endDate === 'At the moment' ? new Date() : new Date(props.endDate);
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

    const labels = language === 'EN' ? {
        languages: 'Technologies',
        databases: 'Databases',
        projects: 'Key Projects',
        learnings: 'Learnings',
        viewDetails: 'View Details',
        showLess: 'Show Less',
        showMore: 'Show More'
    } : {
        languages: 'Tecnologias',
        databases: 'Bancos de Dados',
        projects: 'Projetos Principais',
        learnings: 'Aprendizados',
        viewDetails: 'Ver Detalhes',
        showLess: 'Mostrar Menos',
        showMore: 'Mostrar Mais'
    };

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleDetailsClick = () => {
        if (props.onDetailsClick) {
            props.onDetailsClick();
        }
    };

    return (
        <JobContainer className={expanded ? 'expanded' : 'collapsed'}>
            <div style={{ marginBottom: '1rem' }}>
                <TitleJob>{props.title}</TitleJob>
                {props.company && (
                    <div style={{ 
                        color: '#8b5cf6', 
                        fontSize: '1rem', 
                        fontWeight: 600,
                        marginTop: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{ 
                            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold'
                        }}>
                            🏢 {props.company}
                        </span>
                    </div>
                )}
            </div>
            
            <JobDescription style={{ 
                display: '-webkit-box',
                WebkitLineClamp: expanded ? 'none' : 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}>
                {props.description}
            </JobDescription>

            {expanded && (
                <>
                    <TitleJob>{labels.languages}</TitleJob>
                    <TagsItems>
                        {props.languages.slice(0, 6).map((language, index) => (
                            <ItemExp key={index}>{language}</ItemExp>
                        ))}
                        {props.languages.length > 6 && (
                            <ItemExp>+{props.languages.length - 6} {language === 'EN' ? 'more' : 'mais'}</ItemExp>
                        )}
                    </TagsItems>
                    
                    {props.databases.length > 0 && (
                        <>
                            <TitleJob>{labels.databases}</TitleJob>
                            <TagsItems>
                                {props.databases.slice(0, 4).map((database, index) => (
                                    <ItemExp key={index}>{database}</ItemExp>
                                ))}
                                {props.databases.length > 4 && (
                                    <ItemExp>+{props.databases.length - 4} {language === 'EN' ? 'more' : 'mais'}</ItemExp>
                                )}
                            </TagsItems>
                        </>
                    )}
                    
                    {props.projects.length > 0 && (
                        <>
                            <TitleJob>{labels.projects}</TitleJob>
                            <TagsItems>
                                {props.projects.slice(0, 3).map((project, index) => (
                                    <ItemExp key={index} style={{ maxWidth: '100%' }}>{project}</ItemExp>
                                ))}
                            </TagsItems>
                        </>
                    )}
                </>
            )}

            <FooterJob>
                <Duration>{formatDuration()}</Duration>
                <DataJob>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        {props.onDetailsClick && (
                            <DetailsButton onClick={handleDetailsClick}>
                                <span>👁️</span> {labels.viewDetails}
                            </DetailsButton>
                        )}
                        <button
                            onClick={handleToggleExpand}
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                color: '#8b5cf6',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                fontWeight: '500',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(4px)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))';
                                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                                e.currentTarget.style.color = '#a855f7';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(139, 92, 246, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))';
                                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                                e.currentTarget.style.color = '#8b5cf6';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {expanded ? labels.showLess : labels.showMore}
                        </button>
                    </div>
                </DataJob>
            </FooterJob>
        </JobContainer>
    );
}