import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'EN' | 'BR' | 'ES';
export const LANGUAGES: Language[] = ['EN', 'BR', 'ES'];

type LanguageState = [Language, (value: Language | ((prev: Language) => Language)) => void];

const STORAGE_KEY = 'portfolio-language';

const LOCALES: Record<Language, string> = {
    EN: 'en-US',
    BR: 'pt-BR',
    ES: 'es-ES',
};

function detectInitialLanguage(): Language {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && (LANGUAGES as string[]).includes(saved)) return saved as Language;
    } catch {
        // storage blocked: fall through to browser language
    }
    const browser = (typeof navigator !== 'undefined' ? navigator.language : 'en').toLowerCase();
    if (browser.startsWith('pt')) return 'BR';
    if (browser.startsWith('es')) return 'ES';
    return 'EN';
}

export const LanguageContext = createContext<LanguageState | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>(detectInitialLanguage);

    useEffect(() => {
        document.documentElement.lang = LOCALES[language];
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // ignore
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={[language, setLanguage]}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageState {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
    return context;
}

/** Picks the value for the current language: t({ EN: 'Hi', BR: 'Oi', ES: 'Hola' }) */
export function useT() {
    const [language] = useLanguage();
    return <T,>(values: Record<Language, T>): T => values[language];
}

export function localeOf(language: Language): string {
    return LOCALES[language];
}
