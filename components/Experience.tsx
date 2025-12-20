"use client";
import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { useLanguage } from '@/contexts/LanguageContext'

const Experience = () => {
    const { t, language } = useLanguage();
    
    // Get translated work experience
    const getTranslatedWorkExperience = () => {
        const translations: Record<number, Record<string, { title: string; desc: string }>> = {
            1: {
                en: { title: "Web Application & Website Development", desc: "I worked on developing web applications and websites using technologies like React and Node.js with a focus on improving user experience." },
                ar: { title: "تطوير تطبيقات ومواقع ويب", desc: "عملت على تطوير تطبيقات ومواقع ويب باستخدام تقنيات مثل React و Node.js مع التركيز على تحسين تجربة المستخدم." }
            },
            2: {
                en: { title: "Inventory Management Solutions Development", desc: "I provided technical solutions for inventory management for companies, which helped improve efficiency and reduce costs." },
                ar: { title: "تطوير حلول إدارة المخزون", desc: "قدمت حلولًا تقنية لإدارة المخزون للشركات، مما ساعد على تحسين الكفاءة وتقليل التكاليف." }
            },
            3: {
                en: { title: "Educational Platform Development", desc: "I participated in designing and developing interactive educational platforms that support distance learning." },
                ar: { title: "تطوير منصات تعليمية", desc: "شاركت في تصميم وتطوير منصات تعليمية تفاعلية تدعم التعليم عن بعد." }
            },
            4: {
                en: { title: "Website Development for Media & Construction Companies", desc: "I worked on developing websites for companies operating in media and construction fields to enhance their digital presence." },
                ar: { title: "تطوير مواقع لشركات الإعلام والبناء", desc: "عملت على تطوير مواقع إلكترونية لشركات تعمل في مجالات الإعلام والبناء لتعزيز تواجدها الرقمي." }
            }
        };
        
        return workExperience.map(item => ({
            ...item,
            title: translations[item.id]?.[language]?.title || item.title,
            desc: translations[item.id]?.[language]?.desc || item.desc
        }));
    };

    return (
        <div className='py-20' id="testimonials">
            <h1 className='heading' dir={language === 'en' ? 'ltr' : undefined}>
                {t.experience.title}
                <span className='text-purple'> {t.experience.titleHighlight}</span>
            </h1>

            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {getTranslatedWorkExperience().map((card)=>(
                    <Button duration={Math.floor(Math.random() * 10000 +10000)} key={card.id} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                            <div className={language === 'en' ? 'lg:me-5' : 'lg:ms-5'}>
                                <h1 className={`${language === 'en' ? 'text-left' : 'text-start'} text-xl md:text-2xl font-bold`} dir={language === 'en' ? 'ltr' : undefined}>
                                    {card.title}
                                </h1>

                                <p className={`${language === 'en' ? 'text-left' : 'text-start'} text-white-200 mt-3 font-semibold`} dir={language === 'en' ? 'ltr' : undefined}>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>

    )
}

export default Experience
