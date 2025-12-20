"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaCalendarAlt, FaClock, FaVideo } from 'react-icons/fa';

const MeetingBooking = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    topic: '',
    notes: '',
  });

  // Generate time slots (9 AM to 6 PM, every hour)
  const timeSlots = [];
  for (let hour = 9; hour <= 18; hour++) {
    const time12 = hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`;
    const time24 = `${hour.toString().padStart(2, '0')}:00`;
    timeSlots.push({ label: time12, value: time24 });
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  
  // Get maximum date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'ar-EG', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedTimeSlot = timeSlots.find(slot => slot.value === formData.time);
    const formattedDate = formatDate(formData.date);
    
    // Format message for WhatsApp
    const whatsappMessage = `*${t.meetingBooking.newBookingRequest}*\n\n` +
      `*${t.meetingBooking.name}:* ${formData.name}\n` +
      `*${t.meetingBooking.email}:* ${formData.email}\n` +
      `*${t.meetingBooking.phone}:* ${formData.phone}\n` +
      `*${t.meetingBooking.date}:* ${formattedDate}\n` +
      `*${t.meetingBooking.time}:* ${selectedTimeSlot?.label || formData.time}\n` +
      `*${t.meetingBooking.topic}:* ${formData.topic}\n\n` +
      `*${t.meetingBooking.additionalNotes}:*\n${formData.notes || t.meetingBooking.noNotes}`;

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
      date: '',
      time: '',
      topic: '',
      notes: '',
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16">
      <div className="flex items-center justify-center gap-2 mb-6" dir={language === 'en' ? 'ltr' : undefined}>
        <FaVideo className="text-purple text-2xl" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {t.meetingBooking.title}
        </h2>
      </div>
      <p className="text-white-200 text-center mb-8" dir={language === 'en' ? 'ltr' : undefined}>
        {t.meetingBooking.description}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6" dir={language === 'en' ? 'ltr' : undefined}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white-200 mb-2">
              {t.meetingBooking.name} <span className="text-purple">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
              placeholder={t.meetingBooking.namePlaceholder}
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white-200 mb-2">
              {t.meetingBooking.email} <span className="text-purple">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
              placeholder={t.meetingBooking.emailPlaceholder}
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
              {t.meetingBooking.phone} <span className="text-purple">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
              placeholder={t.meetingBooking.phonePlaceholder}
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            />
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-white-200 mb-2">
              {t.meetingBooking.topic} <span className="text-purple">*</span>
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              required
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
              placeholder={t.meetingBooking.topicPlaceholder}
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-white-200 mb-2 flex items-center gap-2">
              <FaCalendarAlt className="text-purple" />
              {t.meetingBooking.date} <span className="text-purple">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              min={today}
              max={maxDateStr}
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white focus:outline-none focus:border-purple transition-colors"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-white-200 mb-2 flex items-center gap-2">
              <FaClock className="text-purple" />
              {t.meetingBooking.time} <span className="text-purple">*</span>
            </label>
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white focus:outline-none focus:border-purple transition-colors"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
              }}
            >
              <option value="">{t.meetingBooking.selectTime}</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot.value} className="bg-slate-950">
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-white-200 mb-2">
            {t.meetingBooking.additionalNotes}
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors resize-none"
            placeholder={t.meetingBooking.notesPlaceholder}
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
            {t.meetingBooking.bookMeeting}
            <FaVideo className="text-purple" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default MeetingBooking;

