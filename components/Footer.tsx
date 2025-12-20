"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import ContactForm from "./ContactForm";
import MeetingBooking from "./MeetingBooking";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
const { t, language } = useLanguage();
return (
    <footer className="relative w-full  pb-10 mb-[100px] md:mb-5 overflow-hidden" id="contact">
    <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
        src="./footer-grid.svg"
        alt="grid"
        className="w-full h-full opacity-50 "
        />
    </div>
    <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]" dir={language === 'en' ? 'ltr' : undefined}>
        {t.footer.title}<span className="text-purple">{t.footer.titleHighlight}</span> {t.footer.titleEnd}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center" dir={language === 'en' ? 'ltr' : undefined}>
        {t.footer.description}
        </p>
        
        <MeetingBooking />
        
        <div className="mt-16 w-full max-w-2xl">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white-200 opacity-20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black-100 text-white-200" dir={language === 'en' ? 'ltr' : undefined}>
                {language === 'en' ? 'OR' : 'أو'}
              </span>
            </div>
          </div>
        </div>
        
        <ContactForm />
    </div>
    <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
        {t.footer.copyright}
        </p>

        <div className="flex items-center md:gap-3 gap-6 pt-10">
        {socialMedia.map((info) => (
            <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
            <a href={info.link} target="_blank" aria-label={info.link}> 
                <img src={info.img} alt="icons" width={20} height={20} />
            </a>
            </div>
        ))}
        </div>
    </div>
    </footer>
);
};

export default Footer;