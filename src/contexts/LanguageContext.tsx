import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage, SupportedLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, params?: Record<string, string>) => string;
  getCurrentLanguageConfig: () => any;
  supportedLanguages: any[];
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const languageHook = useLanguage();

  // Función de traducción con interpolación
  const t = (key: string, params?: Record<string, string>): string => {
    console.log(`[Translation] Current language: ${languageHook.currentLanguage}, Key: ${key}`);
    
    const keys = key.split('.');
    let value: any = translations[languageHook.currentLanguage];
    
    // Special handling for ALL lesson keys that are directly in the root for Spanish
    if (key.startsWith('lessons.lesson-') && languageHook.currentLanguage === 'es') {
      const lessonKey = keys[1]; // Extract 'lesson-X-Y' from 'lessons.lesson-X-Y.property'
      const property = keys[2]; // Extract property like 'title', 'content', etc.
      
      console.log(`[Translation] Special lesson key handling: ${lessonKey}.${property}`);
      console.log(`[Translation] Looking for: translations.es['${lessonKey}']['${property}']`);
      
      // Look directly in the root for Spanish lesson translations
      const lessonData = translations[languageHook.currentLanguage][lessonKey];
      console.log(`[Translation] Lesson data found:`, !!lessonData);
      
      if (lessonData && lessonData[property]) {
        value = lessonData[property];
        console.log(`[Translation] Found Spanish lesson translation: ${key} -> ${typeof value === 'string' ? value.substring(0, 50) + '...' : typeof value}`);
      } else {
        console.warn(`[Translation] Spanish lesson not found, falling back to English`);
        console.warn(`[Translation] LessonData:`, lessonData);
        console.warn(`[Translation] Property '${property}' exists:`, lessonData ? !!lessonData[property] : false);
        value = undefined; // Will trigger fallback
      }
    } else {
      // Normal key lookup
      for (const k of keys) {
        value = value?.[k];
      }
    }

    if (typeof value !== 'string') {
      // Fallback a inglés si no existe la traducción
      let fallbackValue: any = translations.en;
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k];
      }
      value = fallbackValue || key;
      
      // Log missing translations in development
      if (process.env.NODE_ENV === 'development' && value === key) {
        console.warn(`Translation missing for key: "${key}" in language: "${languageHook.currentLanguage}"`);
      }
      
      if (value !== key) {
        console.log(`[Translation] Using fallback (EN) for key: ${key} -> ${value}`);
      }
    } else {
      console.log(`[Translation] Found translation for key: ${key} -> ${value}`);
    }

    // Interpolación de parámetros
    if (params && typeof value === 'string') {
      Object.entries(params).forEach(([param, replacement]) => {
        value = value.replace(new RegExp(`{{${param}}}`, 'g'), replacement);
      });
    }

    return value;
  };

  const contextValue: LanguageContextType = {
    ...languageHook,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
