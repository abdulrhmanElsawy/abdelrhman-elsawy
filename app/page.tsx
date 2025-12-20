"use client"
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip px-5" dir={language === 'en' ? 'ltr' : 'rtl'}>
      <div className="max-w-7xl w-full">
        <FloatingNav 
          className=""
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
        <WhatsAppFloat />
      </div>
    </main>
  );
}
