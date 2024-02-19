import { useState } from 'react';
import { differenceInMonths } from 'date-fns';

                
import { 
    JobContainer,
    JobDescription,
    TitleJob ,
    FooterJob,
    Duration,
    DataJob,
    ItemExp,
    TagsItems
} from './styles';

interface JobProps {
    title: string;
    description: string;
    languages: string[];
    databases: string[];
    projects: string[];
    learnings: string[];
    startDate: string;
    endDate: string;
}

export function Job(props: JobProps) {
    const [expanded, setExpanded] = useState(false);
    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);
    const durationInMonths = differenceInMonths(endDate, startDate);
    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <JobContainer onClick={handleClick}>
            <TitleJob>{props.title}</TitleJob>
            <JobDescription>{props.description}</JobDescription>
            {expanded && (
                <>
                    <TitleJob>Languages:</TitleJob>
                    <TagsItems>
                        {props.languages.map((language, index) => (
                            <ItemExp key={index}>{language}</ItemExp>
                        ))}
                    </TagsItems>
                    <TitleJob>Databases:</TitleJob>
                    <TagsItems>
                        {props.databases.map((database, index) => (
                            <ItemExp key={index}>{database}</ItemExp>
                        ))}
                    </TagsItems>
                    <TitleJob>Projects:</TitleJob>
                    <TagsItems>
                        {props.projects.map((project, index) => (
                            <ItemExp key={index}>{project}</ItemExp>
                        ))}
                    </TagsItems>
                    <TitleJob>Learnings:</TitleJob>
                    <TagsItems>
                        {props.learnings.map((learning, index) => (
                            <ItemExp key={index}>{learning}</ItemExp>
                        ))}
                    </TagsItems>
                </>
            )}
            <FooterJob>
                <Duration>
                    {(durationInMonths >= 12) ? 
                    (Math.floor(durationInMonths / 12) + ' Year'+
                    ((Math.floor(durationInMonths / 12) > 1 )? ('s '):(' ')) +
                    ((durationInMonths % 12 === 0) ? ('') :( 'and ' + durationInMonths % 12 + ' Months' ))) : (durationInMonths + ' Months')}</Duration>
                <DataJob>{props.startDate} - {props.endDate}</DataJob>
            </FooterJob>
        </JobContainer>
    );
}