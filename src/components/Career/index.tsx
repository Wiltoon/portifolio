import { useEffect, useState } from 'react';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import { CareerService } from '../../services/career';
import { LinkedInService } from '../../services/linkedin';
import { JobModal } from '../JobModal';
import { Timeline } from '../Timeline';
import jobsData from './jobs.json';
import educationsJobsData from './academics.json';
import {
    CareerContainer,
    TagCareer,
    TitleCareer,
    Journalist,
    Journal,
    TitleJournal,
    Started,
    Jobs,
    LinkedInSection,
    LinkedInButton
} from './styles';

import { Job } from '../Job';

interface JobData {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    languages: string[];
    databases: string[];
    projects: string[];
    learnings: string[];
    company?: string;
    linkedInUrl?: string;
    achievements?: string[];
}

export function Career(){
    const [jobs, setJobs] = useState<JobData[]>([]);
    const [educations, setEducations] = useState<JobData[]>([]);
    const [selectedJob, setSelectedJob] = useState<JobData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [language] = useLanguage();

    useEffect(() => {
        const loadCareerData = async () => {
            try {
                // Tenta buscar do GitHub primeiro
                const careerData = await CareerService.fetchCareerData();
                setJobs(careerData.jobs);
                setEducations(careerData.education);
            } catch (error) {
                // Fallback para dados locais
                console.error('Error loading career data:', error);
                setJobs(jobsData);
                setEducations(educationsJobsData);
            }
        };

        loadCareerData();
    }, []);

    const labels = language === 'EN' ? {
        career: 'Career',
        journey: 'My journey so far',
        professional: 'Professional Experience',
        academic: 'Academic Background',
        professionalPeriod: '2016 · Present',
        academicPeriod: '2012 · Present',
        loading: 'Loading...',
        linkedIn: 'Connect on LinkedIn',
        linkedInDesc: 'View my complete professional profile'
    } : {
        career: 'Carreira',
        journey: 'Minha jornada até aqui',
        professional: 'Experiência Profissional',
        academic: 'Formação Acadêmica',
        professionalPeriod: '2016 · Atualmente',
        academicPeriod: '2012 · Atualmente',
        loading: 'Carregando...',
        linkedIn: 'Conectar no LinkedIn',
        linkedInDesc: 'Veja meu perfil profissional completo'
    };

    const handleJobClick = (job: JobData) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    // Combinar experiências para o Timeline
    const getAllExperiences = () => {
        const professionalExperiences = jobs.map(job => ({
            ...job,
            type: 'professional' as const
        }));
        
        const academicExperiences = educations.map(education => ({
            ...education,
            type: 'academic' as const
        }));
        
        return [...professionalExperiences, ...academicExperiences];
    };

    if (jobs.length === 0 && educations.length === 0) {
        return (
            <CareerContainer id="career">
                <div style={{ textAlign: 'center', padding: '2rem', color: '#8b5cf6' }}>
                    {labels.loading}
                </div>
            </CareerContainer>
        );
    }

    return (
        <>
            <CareerContainer id="career">
                <TagCareer>💼 {labels.career}</TagCareer>
                <TitleCareer>{labels.journey}</TitleCareer>
                <Journalist>
                    <Journal>
                        <TitleJournal>{labels.professional}</TitleJournal>
                        <Started>{labels.professionalPeriod}</Started>
                        <Jobs>
                            {jobs.map((job, index) => (
                                <Job
                                    key={index}
                                    title={job.title}
                                    company={job.company}
                                    description={job.description}
                                    startDate={job.startDate}
                                    endDate={job.endDate}
                                    languages={job.languages}
                                    databases={job.databases}
                                    projects={job.projects}
                                    learnings={job.learnings}
                                    onDetailsClick={() => handleJobClick(job)}
                                />
                            ))}
                        </Jobs>
                    </Journal>
                    <Journal>
                        <TitleJournal>{labels.academic}</TitleJournal>
                        <Started>{labels.academicPeriod}</Started>
                        <Jobs>
                            {educations.map((education, index) => (
                                <Job
                                    key={index}
                                    title={education.title}
                                    company={education.company}
                                    description={education.description}
                                    startDate={education.startDate}
                                    endDate={education.endDate}
                                    languages={education.languages}
                                    databases={education.databases}
                                    projects={education.projects}
                                    learnings={education.learnings}
                                    onDetailsClick={() => handleJobClick(education)}
                                />
                            ))}
                        </Jobs>
                    </Journal>
                </Journalist>
                
                <Timeline experiences={getAllExperiences()} />
                
                <LinkedInSection>
                    <p style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                        {labels.linkedInDesc}
                    </p>
                    <LinkedInButton 
                        href={LinkedInService.getProfileUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span>💼</span> {labels.linkedIn}
                    </LinkedInButton>
                </LinkedInSection>
            </CareerContainer>

            {selectedJob && (
                <JobModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    job={selectedJob}
                />
            )}
        </>
    );
}