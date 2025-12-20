"use client";
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const Grid = () => {
    const { language } = useLanguage();
    
    // Get translated grid items
    const getTranslatedGridItems = () => {
        const translations: Record<number, Record<string, { title: string; description: string }>> = {
            1: {
                en: { title: "Building High-Performance Websites with Exceptional User Experience", description: "" },
                ar: { title: "بناء مواقع ويب ذات أداء عالي وتجربة مستخدم استثنائية", description: "" }
            },
            2: {
                en: { title: "Specialized in Building Websites for All Devices", description: "" },
                ar: { title: "متخصص في بناء مواقع تلائم جميع الأجهزة", description: "" }
            },
            3: {
                en: { title: "To Successful Websites", description: "Transforming Creative Ideas" },
                ar: { title: "إلى مواقع ويب ناجحة", description: "تحويل الأفكار الإبداعية" }
            },
            4: {
                en: { title: "Complete Website Programming Services from a Trusted Freelancer", description: "" },
                ar: { title: "خدمات برمجة مواقع متكاملة من مبرمج حر موثوق.", description: "" }
            },
            5: {
                en: { title: "Freelance Website Programming Services at Competitive Prices and High Quality", description: "Experienced Freelancer" },
                ar: { title: "خدمات برمجة مواقع حرة بأسعار تنافسية وجودة عالية", description: "مبرمج حر بخبرة طويلة" }
            },
            6: {
                en: { title: "Would You Like to Build a Website for You or Your Company?", description: "" },
                ar: { title: "هل ترغب في بناء موقع لك او لشركتك ؟", description: "" }
            }
        };
        
        return gridItems.map(item => ({
            ...item,
            title: translations[item.id]?.[language]?.title || item.title,
            description: translations[item.id]?.[language]?.description || item.description
        }));
    };

    return (
        <section id="about">
            <BentoGrid >
                {getTranslatedGridItems().map
                (({id,title,description,className,img ,imgClassName, titleClassName,spareImg})=>(
                    <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid
