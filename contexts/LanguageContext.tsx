"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/i18n';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Advanced Skills in Building Websites',
      title: 'Design and Develop Complete Websites',
      description: 'Hello, I am Abdelrahman Elsawy, a Professional Web Developer',
      button: 'View My Work',
    },
    projects: {
      title: 'A Selection of',
      titleHighlight: 'Latest Projects',
      visitSite: 'Visit Site',
    },
    experience: {
      title: 'My Experience in',
      titleHighlight: 'Work Field',
    },
    approach: {
      title: 'My Approach to',
      titleHighlight: 'Work',
      step1: {
        title: 'Planning & Strategy',
        order: 'Step 1',
        description: 'We\'ll collaborate to set your website\'s goals, identify your target audience, and outline core features. We\'ll cover things like site structure, navigation, and content requirements.',
      },
      step2: {
        title: 'Development & Progress Updates',
        order: 'Step 2',
        description: 'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.',
      },
      step3: {
        title: 'Development & Launch',
        order: 'Step 3',
        description: 'This is where the magic happens! Based on the approved design, I\'ll translate everything into functional code, building your website from scratch.',
      },
    },
    footer: {
      title: 'Ready to Take Your',
      titleHighlight: 'Digital Presence',
      titleEnd: 'to the Next Level?',
      description: 'Contact me today to discuss how I can help you achieve your goals.',
      button: 'Let\'s Connect',
      copyright: 'Copyright © 2024 Abdelrhman Elsawy',
    },
    testimonials: {
      title: 'Positive Feedback from',
      titleHighlight: 'Happy Clients',
      viewReview: 'View Review on Khamsat',
    },
    contactForm: {
      newMessage: 'New Contact Form Message',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      service: 'Service',
      message: 'Message',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      phonePlaceholder: 'Enter your phone number',
      selectService: 'Select a service',
      messagePlaceholder: 'Tell me about your project...',
      sendMessage: 'Send via WhatsApp',
      services: [
        'Website Development',
        'E-commerce Website',
        'Web Application',
        'Website Redesign',
        'Mobile Responsive Design',
        'UI/UX Design',
        'Website Maintenance',
        'SEO Optimization',
        'Custom Web Solutions',
        'Other',
      ],
    },
    meetingBooking: {
      title: 'Book a Meeting',
      description: 'Schedule a Google Meet consultation to discuss your project',
      newBookingRequest: 'New Meeting Booking Request',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      topic: 'Meeting Topic',
      additionalNotes: 'Additional Notes',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      phonePlaceholder: 'Enter your phone number',
      topicPlaceholder: 'What would you like to discuss?',
      selectTime: 'Select a time',
      notesPlaceholder: 'Any additional information...',
      noNotes: 'No additional notes',
      bookMeeting: 'Book Meeting via WhatsApp',
    },
    about: {
      title: 'About Me',
    },
  },
  ar: {
    nav: {
      about: 'عني',
      projects: 'المشاريع',
      testimonials: 'التقييمات',
      contact: 'تواصل معي',
    },
    hero: {
      subtitle: 'مهارات متقدمة في بناء مواقع ويب',
      title: 'تصميم وتطوير مواقع ويب متكاملة',
      description: 'مرحبًا، أنا عبدالرحمن الصاوي، مطور ويب محترف',
      button: 'مشاهدة الأعمال',
    },
    projects: {
      title: 'مجموعة مختارة من',
      titleHighlight: 'أحدث المشاريع',
      visitSite: 'تصفح الموقع مباشرة',
    },
    experience: {
      title: 'خبراتي في',
      titleHighlight: 'مجال العمل',
    },
    approach: {
      title: 'منهجيتي في',
      titleHighlight: 'العمل',
      step1: {
        title: 'التخطيط والاستراتيجية',
        order: 'المرحلة 1',
        description: 'سنتعاون لوضع أهداف موقعك الإلكتروني، وتحديد الجمهور المستهدف، وتوضيح الوظائف الأساسية. سنتناول أمورًا مثل هيكل الموقع، التنقل، ومتطلبات المحتوى.',
      },
      step2: {
        title: 'التطوير وتحديث التقدم',
        order: 'المرحلة 2',
        description: 'بمجرد الاتفاق على الخطة، أبدأ تشغيل قائمة التشغيل الخاصة بي وأغمر نفسي في البرمجة. من الرسوم الأولية إلى الكود النهائي، سأبقيك على اطلاع بكل خطوة.',
      },
      step3: {
        title: 'التطوير والإطلاق',
        order: 'المرحلة 3',
        description: 'هنا يحدث السحر! بناءً على التصميم المعتمد، سأترجم كل شيء إلى كود وظيفي، وأبني موقعك الإلكتروني من الألف إلى الياء.',
      },
    },
    footer: {
      title: 'هل أنت مستعد للارتقاء ب',
      titleHighlight: 'وجودك',
      titleEnd: 'الرقمي إلى المستوى التالي؟',
      description: 'تواصل معي اليوم لنتحدث عن كيفية مساعدتك في تحقيق أهدافك.',
      button: 'دعنا نتواصل',
      copyright: 'Copyright © 2024 Abdelrhman Elsawy',
    },
    testimonials: {
      title: 'آراء إيجابية من',
      titleHighlight: 'عملاء سعيدين',
      viewReview: 'مشاهدة التقييم على خمسات',
    },
    contactForm: {
      newMessage: 'رسالة جديدة من نموذج الاتصال',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      service: 'الخدمة',
      message: 'الرسالة',
      namePlaceholder: 'أدخل اسمك',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      phonePlaceholder: 'أدخل رقم هاتفك',
      selectService: 'اختر خدمة',
      messagePlaceholder: 'أخبرني عن مشروعك...',
      sendMessage: 'إرسال عبر واتساب',
      services: [
        'تطوير موقع ويب',
        'موقع تجارة إلكترونية',
        'تطبيق ويب',
        'إعادة تصميم موقع',
        'تصميم متجاوب للجوال',
        'تصميم واجهة المستخدم',
        'صيانة الموقع',
        'تحسين محركات البحث',
        'حلول ويب مخصصة',
        'أخرى',
      ],
    },
    meetingBooking: {
      title: 'احجز اجتماع',
      description: 'حدد موعد استشارة عبر Google Meet لمناقشة مشروعك',
      newBookingRequest: 'طلب حجز اجتماع جديد',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      date: 'التاريخ',
      time: 'الوقت',
      topic: 'موضوع الاجتماع',
      additionalNotes: 'ملاحظات إضافية',
      namePlaceholder: 'أدخل اسمك',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      phonePlaceholder: 'أدخل رقم هاتفك',
      topicPlaceholder: 'ما الذي تريد مناقشته؟',
      selectTime: 'اختر وقت',
      notesPlaceholder: 'أي معلومات إضافية...',
      noNotes: 'لا توجد ملاحظات إضافية',
      bookMeeting: 'احجز الاجتماع عبر واتساب',
    },
    about: {
      title: 'عني',
    },
  },
};

// List of Arabic-speaking countries (ISO 3166-1 alpha-2 codes)
const ARABIC_COUNTRIES = [
  'SA', // Saudi Arabia
  'AE', // United Arab Emirates
  'EG', // Egypt
  'JO', // Jordan
  'LB', // Lebanon
  'IQ', // Iraq
  'SY', // Syria
  'KW', // Kuwait
  'QA', // Qatar
  'BH', // Bahrain
  'OM', // Oman
  'YE', // Yemen
  'PS', // Palestine
  'MA', // Morocco
  'DZ', // Algeria
  'TN', // Tunisia
  'LY', // Libya
  'SD', // Sudan
  'MR', // Mauritania
  'KM', // Comoros
  'DJ', // Djibouti
  'SO', // Somalia
  'TD', // Chad
];

// Function to detect user's country
async function detectUserCountry(): Promise<string | null> {
  try {
    // Try using ipapi.co (free tier: 1000 requests/day)
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.country_code || null;
    }
  } catch (error) {
    console.log('Error detecting country:', error);
  }

  // Fallback to geojs.io
  try {
    const response = await fetch('https://get.geojs.io/v1/ip/country.json');
    if (response.ok) {
      const data = await response.json();
      return data.country || null;
    }
  } catch (error) {
    console.log('Error detecting country (fallback):', error);
  }

  return null;
}

// Function to determine default language based on country
function getDefaultLanguageByCountry(countryCode: string | null): Language {
  if (!countryCode) {
    return 'ar'; // Default to Arabic if detection fails
  }
  
  // Check if country is in Arabic-speaking countries list
  return ARABIC_COUNTRIES.includes(countryCode.toUpperCase()) ? 'ar' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    const initializeLanguage = async () => {
      // First, check if user has manually selected a language
      const savedLanguage = localStorage.getItem('language') as Language;
      
      if (savedLanguage === 'en' || savedLanguage === 'ar') {
        // User has already selected a language, use it
        setLanguageState(savedLanguage);
        setIsDetecting(false);
        return;
      }

      // No saved language, detect country and set default
      try {
        const countryCode = await detectUserCountry();
        const defaultLanguage = getDefaultLanguageByCountry(countryCode);
        setLanguageState(defaultLanguage);
        // Save the auto-detected language so we don't detect again
        localStorage.setItem('language', defaultLanguage);
      } catch (error) {
        console.log('Error initializing language:', error);
        // Default to Arabic on error
        setLanguageState('ar');
      } finally {
        setIsDetecting(false);
      }
    };

    initializeLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update HTML lang attribute and dir
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // Update body class
    document.body.classList.remove('lang-ar', 'lang-en');
    document.body.classList.add(`lang-${lang}`);
  };

  useEffect(() => {
    // Set initial direction and lang
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    // Update body class
    document.body.classList.remove('lang-ar', 'lang-en');
    document.body.classList.add(`lang-${language}`);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

