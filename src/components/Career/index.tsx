import { useEffect, useState } from 'react';
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
    Jobs
} from './styles';

import { Job } from '../Job';

export function Career(){
    
    const [jobs, setJobs] = useState<{ title: string; description: string; startDate: string; endDate: string; languages: string[]; databases: string[]; projects: string[]; learnings: string[]; }[]>([]);
    const [educations, setEducations] = useState<{ title: string; description: string; startDate: string; endDate: string; languages: string[]; databases: string[]; projects: string[]; learnings: string[]; }[]>([]);

    useEffect(() => {
        return setJobs(jobsData);
    }, []);
    
    useEffect(() => {
        return setEducations(educationsJobsData);
    }, []);

    if (jobs.length === 0) {
        return <div>Loading...</div>;
    }
    if (educations.length === 0) {
        return <div>Loading...</div>;
    }
    const jobComponents = jobs.map((job: {
        title: string;
        description: string;
        startDate: string;
        endDate: string;
        languages: string[];
        databases: string[];
        projects: string[];
        learnings: string[]; 
    }) => (
        <Job
            title={job.title}
            description={job.description}
            startDate={job.startDate}
            endDate={job.endDate}
            languages={job.languages}
            databases={job.databases}
            projects={job.projects}
            learnings={job.learnings}
        />
    ));
    const educationComponents = educations.map((job: {
        title: string;
        description: string;
        startDate: string;
        endDate: string;
        languages: string[];
        databases: string[];
        projects: string[];
        learnings: string[]; 
    }) => (
        <Job
            title={job.title}
            description={job.description}
            startDate={job.startDate}
            endDate={job.endDate}
            languages={job.languages}
            databases={job.databases}
            projects={job.projects}
            learnings={job.learnings}
        />
    ));

    return (
        <CareerContainer id="career">
            <TagCareer>💼 Career</TagCareer>
            <TitleCareer>My journey so far</TitleCareer>
            <Journalist>
                <Journal>
                    <TitleJournal>Professional field</TitleJournal>
                    <Started>2016 · At the moment</Started>
                    <Jobs>
                        {jobComponents}
                    </Jobs>
                </Journal>
                <Journal>
                    <TitleJournal>Academic</TitleJournal>
                    <Started>2012 · At the moment</Started>
                    <Jobs>
                        {educationComponents}
                    </Jobs>
                </Journal>
            </Journalist>
        </CareerContainer>
    );
}