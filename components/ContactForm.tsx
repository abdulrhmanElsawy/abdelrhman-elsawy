"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*${t.contactForm.newMessage}*\n\n` +
      `*${t.contactForm.name}:* ${formData.name}\n` +
      `*${t.contactForm.email}:* ${formData.email}\n` +
      `*${t.contactForm.phone}:* ${formData.phone}\n` +
      `*${t.contactForm.service}:* ${formData.service}\n\n` +
      `*${t.contactForm.message}:*\n${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '+2001006329357';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16">
      <form onSubmit={handleSubmit} className="space-y-6" dir={language === 'en' ? 'ltr' : undefined}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white-200 mb-2">
              {t.contactForm.name} <span className="text-purple">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
              placeholder={t.contactForm.namePlaceholder}
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white-200 mb-2">
              {t.contactForm.email} <span className="text-purple">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
              placeholder={t.contactForm.emailPlaceholder}
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white-200 mb-2">
              {t.contactForm.phone} <span className="text-purple">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
              placeholder={t.contactForm.phonePlaceholder}
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white-200 mb-2">
              {t.contactForm.service} <span className="text-purple">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white focus:outline-none focus:border-purple transition-colors"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            >
              <option value="">{t.contactForm.selectService}</option>
              {t.contactForm.services.map((service: string, index: number) => (
                <option key={index} value={service} className="bg-slate-950">
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white-200 mb-2">
            {t.contactForm.message} <span className="text-purple">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors resize-none"
            placeholder={t.contactForm.messagePlaceholder}
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none group"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-opacity-90 transition-all">
            {t.contactForm.sendMessage}
            <FaPaperPlane className="text-purple" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

