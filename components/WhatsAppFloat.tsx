"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppFloat = () => {
  const { language } = useLanguage();
  const whatsappNumber = '+2001006329357';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-[4000] bottom-6 ${language === 'en' ? 'right-6' : 'left-6'} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-opacity duration-300 hover:opacity-80`}
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      <FaWhatsapp 
        className="text-purple" 
        size={28}
      />
    </a>
  );
};

export default WhatsAppFloat;

