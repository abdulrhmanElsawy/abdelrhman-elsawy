"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center justify-center px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors text-white text-sm font-medium"
      aria-label="Switch language"
    >
      <span className="text-xs md:text-sm">
        {language === 'ar' ? 'EN' : 'AR'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;

