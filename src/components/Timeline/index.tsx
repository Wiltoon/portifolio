import { useMemo } from 'react';
import { useLanguage } from '../../styles/languages/LanguageProvider';

interface Experience {
    title: string;
    company?: string;
    description: string;
    startDate: string;
    endDate: string;
    type: 'professional' | 'academic';
}

interface TimelineProps {
    experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
    const [language] = useLanguage();

    const labels = language === 'EN' ? {
        professional: 'Professional',
        academic: 'Academic',
        present: 'Present',
        timeline: 'Career Timeline',
        concurrent: 'Concurrent Activities',
        concurrentDesc: 'Professional and academic activities happening simultaneously'
    } : {
        professional: 'Profissional',
        academic: 'Acadêmico',
        present: 'Atual',
        timeline: 'Linha do Tempo',
        concurrent: 'Atividades Simultâneas',
        concurrentDesc: 'Atividades profissionais e acadêmicas acontecendo simultaneamente'
    };

    // Ordenar experiências por data de início (mais recente primeiro)
    const sortedExperiences = experiences.sort((a, b) => {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });

    // Encontrar períodos de sobreposição
    const overlappingPeriods = useMemo(() => {
        const overlaps: Array<{
            startDate: string;
            endDate: string;
            experiences: Experience[];
        }> = [];

        for (let i = 0; i < experiences.length; i++) {
            for (let j = i + 1; j < experiences.length; j++) {
                const exp1 = experiences[i];
                const exp2 = experiences[j];

                // Apenas verificar se são tipos diferentes
                if (exp1.type !== exp2.type) {
                    const start1 = new Date(exp1.startDate);
                    const end1 = new Date(exp1.endDate === 'At the moment' || exp1.endDate === 'Atual' ? new Date() : exp1.endDate);
                    const start2 = new Date(exp2.startDate);
                    const end2 = new Date(exp2.endDate === 'At the moment' || exp2.endDate === 'Atual' ? new Date() : exp2.endDate);

                    // Verificar sobreposição
                    const overlapStart = new Date(Math.max(start1.getTime(), start2.getTime()));
                    const overlapEnd = new Date(Math.min(end1.getTime(), end2.getTime()));

                    if (overlapStart <= overlapEnd) {
                        overlaps.push({
                            startDate: overlapStart.toISOString().split('T')[0],
                            endDate: overlapEnd.toISOString().split('T')[0],
                            experiences: [exp1, exp2]
                        });
                    }
                }
            }
        }

        return overlaps;
    }, [experiences]);

    const formatDate = (dateString: string) => {
        if (dateString === 'At the moment' || dateString === 'Atual') {
            return labels.present;
        }
        const date = new Date(dateString);
        return language === 'EN' 
            ? date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
            : date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
    };

    const formatDateRange = (startDate: string, endDate: string) => {
        return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '1000px',
            margin: '3rem auto 2rem',
            padding: '2rem 1rem',
            textAlign: 'center'
        }}>
            <h2 style={{ 
                color: '#8b5cf6', 
                marginBottom: '2rem',
                fontSize: '1.5rem',
                fontWeight: '600'
            }}>
                📅 {labels.timeline}
            </h2>

            {/* Seção de Atividades Simultâneas */}
            {overlappingPeriods.length > 0 && (
                <div style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '2px solid rgba(139, 92, 246, 0.2)',
                    marginBottom: '3rem',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#8b5cf6',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        🔄 {labels.concurrent}
                    </h3>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        lineHeight: '1.5'
                    }}>
                        {labels.concurrentDesc}
                    </p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                    }}>
                        {overlappingPeriods.map((overlap, index) => (
                            <div key={index} style={{
                                padding: '1rem',
                                borderRadius: '12px',
                                background: 'rgba(15, 23, 42, 0.5)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: '#f59e0b',
                                    fontWeight: '600',
                                    marginBottom: '0.5rem'
                                }}>
                                    {formatDateRange(overlap.startDate, overlap.endDate)}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.25rem'
                                }}>
                                    {overlap.experiences.map((exp, expIndex) => (
                                        <div key={expIndex} style={{
                                            fontSize: '0.85rem',
                                            color: exp.type === 'professional' ? '#06b6d4' : '#8b5cf6',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            {exp.type === 'professional' ? '🏢' : '🎓'} {exp.title} - {exp.company}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <div style={{
                position: 'relative',
                width: '100%',
                paddingLeft: '2rem'
            }}>
                {/* Linha central */}
                <div style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '0',
                    bottom: '0',
                    width: '3px',
                    background: 'linear-gradient(180deg, #8b5cf6 0%, #06b6d4 50%, #f59e0b 100%)',
                    borderRadius: '2px'
                }} />
                
                {sortedExperiences.map((experience, index) => (
                    <div key={index} style={{
                        position: 'relative',
                        marginBottom: '2rem',
                        paddingLeft: '3rem'
                    }}>
                        {/* Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '-0.5rem',
                            top: '1rem',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: experience.type === 'professional' ? '#06b6d4' : '#8b5cf6',
                            border: '3px solid #0f172a',
                            boxShadow: `0 0 0 3px ${experience.type === 'professional' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
                            zIndex: 2
                        }} />
                        
                        {/* Content */}
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            border: `2px solid ${experience.type === 'professional' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(139, 92, 246, 0.2)'}`,
                            textAlign: 'left',
                            maxWidth: '600px'
                        }}>
                            <div style={{
                                fontSize: '0.8rem',
                                color: '#8b5cf6',
                                fontWeight: '600',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {formatDateRange(experience.startDate, experience.endDate)}
                            </div>
                            
                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                color: '#ffffff',
                                marginBottom: '0.25rem',
                                lineHeight: '1.3'
                            }}>
                                {experience.title}
                            </h3>
                            
                            {experience.company && (
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: experience.type === 'professional' ? '#06b6d4' : '#8b5cf6',
                                    fontWeight: '600',
                                    marginBottom: '0.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    {experience.type === 'professional' ? '🏢' : '🎓'} {experience.company}
                                </div>
                            )}
                            
                            <p style={{
                                fontSize: '0.85rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                lineHeight: '1.5',
                                marginBottom: '0.75rem'
                            }}>
                                {experience.description.length > 120 
                                    ? `${experience.description.substring(0, 120)}...`
                                    : experience.description
                                }
                            </p>
                            
                            <div style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                background: experience.type === 'professional' 
                                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(8, 145, 178, 0.1))'
                                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(168, 85, 247, 0.1))',
                                border: `1px solid ${experience.type === 'professional' 
                                    ? 'rgba(6, 182, 212, 0.3)' 
                                    : 'rgba(139, 92, 246, 0.3)'}`,
                                color: experience.type === 'professional' ? '#06b6d4' : '#8b5cf6'
                            }}>
                                {labels[experience.type]}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
