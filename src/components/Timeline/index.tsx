import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import {
  TimelineWrapper,
  TimelineHeader,
  TimelineSectionTitle,
  TimelineSectionSubtitle,
  TimelineContainer,
  TimelineItem,
  TimelineContent,
  TimelineDate,
  TimelineTitle,
  TimelineCompany,
  TimelineDescription,
  TimelineDot,
  TimelineLine,
  ConnectionLineVertical,
  ConnectionLineHorizontal,
  DurationBadge,
  CurrentTimelineItem,
  CurrentTimelineDot,
  CurrentTimelineContent,
  CurrentTimelineTitle,
  CurrentTimelineDescription,
} from './styles';

interface Experience {
    title: string;
    company?: string;
    description: string;
    startDate: string;
    endDate: string;
    type: 'professional' | 'academic';
    originalIndex?: number;
}

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  const [language] = useLanguage();
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineLineRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [connections, setConnections] = useState<
    {
      top: number;
      left: number;
      height: number;
      duration: string;
      topHorizontal: { top: number; left: number; width: number };
      bottomHorizontal: { top: number; left: number; width: number };
    }[]
  >([]);

  const labels =
    language === 'EN'
      ? {
          professional: 'Professional',
          academic: 'Academic',
          present: 'Present',
        }
      : {
          professional: 'Profissional',
          academic: 'Acadêmico',
          present: 'Atual',
        };

  const sortedExperiences = useMemo(() => {
    return [...experiences].sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
    );
  }, [experiences]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    
    handleResize();
    mediaQuery.addEventListener('change', handleResize);
    
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const calculateConnections = useCallback(() => {
    if (!timelineLineRef.current) return;

    const newConnections: {
      top: number;
      left: number;
      height: number;
      duration: string;
      topHorizontal: { top: number; left: number; width: number };
      bottomHorizontal: { top: number; left: number; width: number };
    }[] = [];
    const experienceGroups: { [key: string]: (Experience & { originalIndex: number })[] } = {};

    sortedExperiences.forEach((exp, index) => {
      if (exp.type === 'professional' && exp.company) {
        const key = exp.company;
        if (!experienceGroups[key]) {
          experienceGroups[key] = [];
        }
        experienceGroups[key].push({ ...exp, originalIndex: index });
      }
    });

    Object.values(experienceGroups).forEach((group) => {
      if (group.length > 1) {
        group.sort(
          (a, b) =>
            new Date(a.startDate).getTime() -
            new Date(b.startDate).getTime(),
        );
        const topExp = group[group.length - 1];
        const bottomExp = group[0];

        const topCardContent = contentRefs.current[topExp.originalIndex];
        const bottomCardContent = contentRefs.current[bottomExp.originalIndex];
        const container = itemRefs.current[topExp.originalIndex]?.parentElement;

        if (topCardContent && bottomCardContent && container && timelineLineRef.current) {
          const topRect = topCardContent.getBoundingClientRect();
          const bottomRect = bottomCardContent.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const timelineLineRect = timelineLineRef.current.getBoundingClientRect();

          const verticalLineLeft = timelineLineRect.left + timelineLineRect.width / 2 - containerRect.left;

          const topCardSide = isMobile ? 'right' : (topExp.originalIndex % 2 === 0 ? 'left' : 'right');
          const bottomCardSide = isMobile ? 'right' : (bottomExp.originalIndex % 2 === 0 ? 'left' : 'right');

          const top = topRect.top + topRect.height / 2 - containerRect.top;
          const height = (bottomRect.top + bottomRect.height / 2) - (topRect.top + topRect.height / 2);

          const topHorizontal = {
            top: topRect.top + topRect.height / 2 - containerRect.top,
            left: topCardSide === 'left' ? topRect.right - containerRect.left : verticalLineLeft,
            width: topCardSide === 'left' 
                ? verticalLineLeft - (topRect.right - containerRect.left) 
                : (topRect.left - containerRect.left) - verticalLineLeft,
          };

          const bottomHorizontal = {
            top: bottomRect.top + bottomRect.height / 2 - containerRect.top,
            left: bottomCardSide === 'left' ? bottomRect.right - containerRect.left : verticalLineLeft,
            width: bottomCardSide === 'left' 
                ? verticalLineLeft - (bottomRect.right - containerRect.left) 
                : (bottomRect.left - containerRect.left) - verticalLineLeft,
          };

          const startDate = new Date(bottomExp.startDate);
          const endDateValue = topExp.endDate === 'At the moment' || topExp.endDate === 'Atual' 
              ? new Date() 
              : new Date(topExp.endDate);
          
          let months = (endDateValue.getFullYear() - startDate.getFullYear()) * 12;
          months -= startDate.getMonth();
          months += endDateValue.getMonth();
          const totalMonths = months <= 0 ? 0 : months;

          const years = Math.floor(totalMonths / 12);
          const remainingMonths = totalMonths % 12;
          
          const durationParts = [];
          if (years > 0) durationParts.push(`${years}a`);
          if (remainingMonths > 0) durationParts.push(`${remainingMonths}m`);
          const duration = durationParts.length > 0 ? durationParts.join(' ') : '1m';

          newConnections.push({ top, left: verticalLineLeft, height, duration, topHorizontal, bottomHorizontal });
        }
      }
    });
    setConnections(newConnections);
  }, [sortedExperiences, isMobile]);

  useEffect(() => {
    calculateConnections();
    window.addEventListener('resize', calculateConnections);
    return () => window.removeEventListener('resize', calculateConnections);
  }, [calculateConnections]);

  return (
    <TimelineWrapper>
      <TimelineHeader>
        <TimelineSectionTitle>
          {language === 'EN' ? 'Career Journey' : 'Jornada Profissional'}
        </TimelineSectionTitle>
        <TimelineSectionSubtitle>
          {language === 'EN' 
            ? 'Follow my career evolution through time, showing the overlap and progression of my professional and academic experiences.'
            : 'Acompanhe a evolução da minha carreira ao longo do tempo, mostrando a sobreposição e progressão das minhas experiências profissionais e acadêmicas.'
          }
        </TimelineSectionSubtitle>
      </TimelineHeader>
      
      <TimelineContainer>
        <TimelineLine ref={timelineLineRef} />
        {sortedExperiences.map((exp, index) => {
        const side = isMobile ? 'right' : (index % 2 === 0 ? 'left' : 'right');
        return (
          <TimelineItem
            key={index}
            side={side}
            ref={(el: HTMLDivElement | null) => (itemRefs.current[index] = el)}
          >
            <TimelineDot type={exp.type}>
              <div>
                {new Date(exp.startDate).toLocaleDateString(
                  language === 'EN' ? 'en-US' : 'pt-BR',
                  { year: '2-digit', month: 'short' },
                )}
              </div>
              <div>
                {exp.endDate === 'At the moment' || exp.endDate === 'Atual'
                  ? (language === 'EN' ? 'Now' : 'Atual')
                  : new Date(exp.endDate).toLocaleDateString(
                      language === 'EN' ? 'en-US' : 'pt-BR',
                      { year: '2-digit', month: 'short' },
                    )}
              </div>
            </TimelineDot>
            <TimelineContent
              type={exp.type}
              side={side}
              ref={(el: HTMLDivElement | null) => (contentRefs.current[index] = el)}
            >
              <TimelineDate>
                {new Date(exp.startDate).toLocaleDateString(
                  language === 'EN' ? 'en-US' : 'pt-BR',
                  { year: 'numeric', month: 'short' },
                )}{' '}
                -{' '}
                {exp.endDate === 'At the moment' || exp.endDate === 'Atual'
                  ? labels.present
                  : new Date(exp.endDate).toLocaleDateString(
                      language === 'EN' ? 'en-US' : 'pt-BR',
                      { year: 'numeric', month: 'short' },
                    )}
              </TimelineDate>
              <TimelineTitle>{exp.title}</TimelineTitle>
              {exp.company && (
                <TimelineCompany type={exp.type}>{exp.company}</TimelineCompany>
              )}
              <TimelineDescription>{exp.description}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        );
      })}
      {connections.map((conn, index) => (
        <React.Fragment key={index}>
          <ConnectionLineVertical
            style={{
              top: `${conn.top}px`,
              left: `${conn.left}px`,
              height: `${conn.height}px`,
            }}
          />
          <ConnectionLineHorizontal
            style={{
              top: `${conn.topHorizontal.top}px`,
              left: `${conn.topHorizontal.left}px`,
              width: `${conn.topHorizontal.width}px`,
            }}
          />
          <ConnectionLineHorizontal
            style={{
              top: `${conn.bottomHorizontal.top}px`,
              left: `${conn.bottomHorizontal.left}px`,
              width: `${conn.bottomHorizontal.width}px`,
            }}
          />
          <DurationBadge
            style={{
              top: `${conn.top + conn.height / 2}px`,
              left: `${conn.left}px`,
            }}
          >
            {conn.duration}
          </DurationBadge>
        </React.Fragment>
      ))}
      
      {/* Item atual na timeline */}
      <CurrentTimelineItem>
        <CurrentTimelineDot>
          {language === 'EN' ? 'NOW' : 'AGORA'}
        </CurrentTimelineDot>
        <CurrentTimelineContent>
          <CurrentTimelineTitle>
            {language === 'EN' 
              ? 'Ready for New Challenges!' 
              : 'Pronto para Novos Desafios!'
            }
          </CurrentTimelineTitle>
          <CurrentTimelineDescription>
            {language === 'EN'
              ? 'Currently exploring new opportunities and looking forward to contributing to innovative projects that make a difference. Open to discussing exciting challenges in software development.'
              : 'Atualmente explorando novas oportunidades e ansioso para contribuir com projetos inovadores que fazem a diferença. Aberto para discutir desafios empolgantes em desenvolvimento de software.'
            }
          </CurrentTimelineDescription>          </CurrentTimelineContent>
        </CurrentTimelineItem>
      </TimelineContainer>
    </TimelineWrapper>
  );
}
