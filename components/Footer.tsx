import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
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
        <h1 className="heading lg:max-w-[45vw]">
        هل أنت مستعد للارتقاء ب<span className="text-purple">وجودك</span> الرقمي إلى المستوى التالي؟
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        تواصل معي اليوم لنتحدث عن كيفية مساعدتك في تحقيق أهدافك.
        </p>
        <a href="https://wa.me/+2001006329357" target="_blank">
        <MagicButton
            title="دعنا نتواصل"
            icon={<FaLocationArrow />}
            position="right"
        />
        </a>
    </div>
    <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Abdelrhman Elsawy
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