import React, { createContext, useContext, useState } from 'react';

// 1. Crie um novo Context
const LanguageContext = createContext({});

// 2. Crie um Provider Component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
  
    if (!context) {
      throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
  
    return context;
  }