import { Language } from '../styles/languages/LanguageProvider';

export interface AboutItem {
    icon: string;
    text: string;
}

const CAREER_START_YEAR = 2016;
const years = new Date().getFullYear() - CAREER_START_YEAR;

/** "About me" content, shared by the About section and the guide character. */
export const ABOUT: Record<Language, AboutItem[]> = {
    EN: [
        { icon: '👋', text: "My name is Wilton. I work in Software Engineering with a strong interest in Artificial Intelligence — my goal is to be a back-end engineer who brings AI into real products." },
        { icon: '👨‍💻', text: `For over ${years} years I've been building solutions with C, C++, Java, Python and TypeScript.` },
        { icon: '🎓', text: "Bachelor's in Computer Engineering and Master's in Computer Science, both at the Federal University of Mato Grosso do Sul (UFMS)." },
        { icon: '💡', text: 'My interests: Back-end, AI Engineering, Forward Deployed Engineering (FDE), Data Engineering and Front-end.' },
        { icon: '☁️', text: 'AWS Certified Cloud Practitioner and AWS Certified Solutions Architect.' },
        { icon: '🚀', text: 'Being 1% better every working day gives 1.01^252 ≈ 12.27x in a year. That is why I keep learning — new technologies are part of the journey!' },
    ],
    BR: [
        { icon: '👋', text: 'Me chamo Wilton. Atuo em Engenharia de Software com forte interesse em Inteligência Artificial — meu objetivo é ser um back-end que leva IA para produtos reais.' },
        { icon: '👨‍💻', text: `Há mais de ${years} anos construindo soluções com C, C++, Java, Python e TypeScript.` },
        { icon: '🎓', text: 'Graduado em Engenharia da Computação e Mestre em Ciência da Computação pela Universidade Federal de Mato Grosso do Sul (UFMS).' },
        { icon: '💡', text: 'Meus interesses: Back-end, Engenharia de IA (AI Engineer), Forward Deployed Engineering (FDE), Engenharia de Dados e Front-end.' },
        { icon: '☁️', text: 'AWS Certified Cloud Practitioner e AWS Certified Solutions Architect.' },
        { icon: '🚀', text: 'Sendo 1% melhor a cada dia útil temos 1,01^252 ≈ 12,27x em um ano. Por isso estou sempre evoluindo — novas tecnologias fazem parte do caminho!' },
    ],
    ES: [
        { icon: '👋', text: 'Me llamo Wilton. Trabajo en Ingeniería de Software con un gran interés en Inteligencia Artificial — mi objetivo es ser un ingeniero back-end que lleve la IA a productos reales.' },
        { icon: '👨‍💻', text: `Desde hace más de ${years} años construyo soluciones con C, C++, Java, Python y TypeScript.` },
        { icon: '🎓', text: 'Ingeniero en Computación y Máster en Ciencias de la Computación por la Universidad Federal de Mato Grosso do Sul (UFMS).' },
        { icon: '💡', text: 'Mis intereses: Back-end, Ingeniería de IA (AI Engineer), Forward Deployed Engineering (FDE), Ingeniería de Datos y Front-end.' },
        { icon: '☁️', text: 'AWS Certified Cloud Practitioner y AWS Certified Solutions Architect.' },
        { icon: '🚀', text: 'Ser 1% mejor cada día hábil da 1,01^252 ≈ 12,27x en un año. Por eso sigo aprendiendo — ¡las nuevas tecnologías son parte del camino!' },
    ],
};

export const LINKS = {
    linkedin: 'https://www.linkedin.com/in/wilton-software-engineer/',
    github: 'https://www.github.com/wiltoon',
};
