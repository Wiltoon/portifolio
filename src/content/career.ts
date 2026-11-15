import { differenceInMonths } from 'date-fns';
import { Language, localeOf } from '../styles/languages/LanguageProvider';
import { CAREER_DATA, ExperienceData, ExperienceKind, ExperienceText, LINKEDIN_URL } from './careerData';

export type { ExperienceKind };

/** One experience, flattened for a given language (shape expected by JobModal). */
export interface Experience extends ExperienceText {
    id: string;
    kind: ExperienceKind;
    company: string;
    formerly?: string;
    startDate: string;
    endDate: string;
    languages: string[];
    databases: string[];
    linkedInUrl: string;
}

type Dated = Pick<ExperienceData, 'startDate' | 'endDate'>;

/** Parses "YYYY-MM-DD" as a local date (new Date("2015-01-01") is UTC and shows as Dec 2014 in Brazil). */
export function parseDate(value: string): Date {
    const [y, m = 1, d = 1] = value.split('-').map(Number);
    return new Date(y, m - 1, d);
}

export const isCurrent = (exp: Pick<Dated, 'endDate'>) => exp.endDate === 'At the moment';

const endOf = (exp: Pick<Dated, 'endDate'>) => (isCurrent(exp) ? new Date() : parseDate(exp.endDate));

/** Data with a stable id, oldest first. */
const BASE = CAREER_DATA
    .map((d, i) => ({ ...d, id: `${d.kind}-${i}` }))
    .sort((a, b) => parseDate(a.startDate).getTime() - parseDate(b.startDate).getTime());

const cache = new Map<Language, Experience[]>();

/** All experiences in the given language, oldest first. */
export function getExperiences(language: Language): Experience[] {
    let list = cache.get(language);
    if (!list) {
        list = BASE.map(({ text, ...rest }) => ({ ...rest, ...text[language], linkedInUrl: LINKEDIN_URL }));
        cache.set(language, list);
    }
    return list;
}

/** "Platform Science (ex-Trimble)" style label for cards and the guide. */
export function companyLabel(exp: { company: string; formerly?: string }, language: Language): string {
    if (!exp.formerly) return exp.company;
    const prefix = { EN: 'formerly', BR: 'ex-', ES: 'ex-' }[language];
    return `${exp.company} (${prefix}${language === 'EN' ? ' ' : ''}${exp.formerly})`;
}

/** Short company / institution name, e.g. "UFMS" instead of the long form. */
export const shortCompany = (exp: { company?: string }) => (exp.company ?? '').split(' - ')[0];

export function formatPeriod(exp: Dated, language: Language): string {
    const fmt = (d: Date) => d.toLocaleDateString(localeOf(language), { year: 'numeric', month: 'short' });
    const now = { EN: 'Present', BR: 'Atual', ES: 'Actualidad' }[language];
    return `${fmt(parseDate(exp.startDate))} – ${isCurrent(exp) ? now : fmt(endOf(exp))}`;
}

export function formatDuration(exp: Dated, language: Language): string {
    const total = Math.max(1, differenceInMonths(endOf(exp), parseDate(exp.startDate)) + 1);
    const y = Math.floor(total / 12);
    const m = total % 12;
    const words = {
        EN: { y: ['year', 'years'], m: ['month', 'months'], and: 'and' },
        BR: { y: ['ano', 'anos'], m: ['mês', 'meses'], and: 'e' },
        ES: { y: ['año', 'años'], m: ['mes', 'meses'], and: 'y' },
    }[language];
    const parts: string[] = [];
    if (y) parts.push(`${y} ${words.y[y > 1 ? 1 : 0]}`);
    if (m) parts.push(`${m} ${words.m[m > 1 ? 1 : 0]}`);
    return parts.join(` ${words.and} `);
}

/** Experiences of the other kind whose period overlaps this one (e.g. studying while working). */
export function overlapping(exp: Experience & Dated): { company: string }[] {
    const start = parseDate(exp.startDate).getTime();
    const end = endOf(exp).getTime();
    return BASE.filter((other) =>
        other.kind !== exp.kind
        && parseDate(other.startDate).getTime() <= end
        && endOf(other).getTime() >= start,
    );
}
