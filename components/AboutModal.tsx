"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  const { language, t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[6000]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[6001] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.95)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
              }}
              dir={language === 'en' ? 'ltr' : 'rtl'}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-black-200/50 backdrop-blur-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  <span className="text-purple">{t.about.title}</span>
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white hover:text-purple"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto h-[calc(100%-80px)] px-6 md:px-8 py-6 md:py-8 about-modal-scroll">
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-6 text-white-200 leading-relaxed">
                    {language === 'ar' ? (
                      <>
                        <p className="text-lg">
                          اسمي <span className="text-purple font-semibold">عبد الرحمن الصاوي</span>، مطوّر ويب Full-Stack، رحلتي في عالم البرمجة لم تبدأ فقط بدراسة أكاديمية، بل برغبة حقيقية في فهم كيف تتحول الأفكار إلى أنظمة حية يعتمد عليها الناس والشركات يوميًا.
                        </p>

                        <p>
                          تخرجت من <span className="text-purple font-semibold">كلية علوم الحاسب والذكاء الاصطناعي – جامعة حلوان</span>، وخلال سنوات الدراسة لم أكتفِ بالمقررات، بل ركزت على بناء مشاريع حقيقية، لأنني أؤمن أن أفضل مطوّر هو من يفهم المشكلة قبل أن يكتب الحل.
                        </p>

                        <p>
                          بدأت مسيرتي كمطوّر <span className="text-purple font-semibold">Front-End</span>، حيث قدت تطوير مواقع وتجارب مستخدم تحاكي منصات عالمية مثل Booking وTrivago في مجال السياحة، وحرصت دائمًا على تقديم تجربة استخدام سلسة، سريعة، وجذابة بصريًا. مع الوقت، توسعت خبرتي لتشمل <span className="text-purple font-semibold">Full-Stack Development</span>، وبناء أنظمة متكاملة من الواجهة وحتى قواعد البيانات.
                        </p>

                        <p>
                          عملت مع شركات وفرق داخل مصر والسعودية في مجالات متعددة مثل:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4 text-purple/80">
                          <li className="text-white-200">تقنية المعلومات</li>
                          <li className="text-white-200">الإعلام والإنتاج الفني</li>
                          <li className="text-white-200">التعليم والمنصات الرقمية</li>
                          <li className="text-white-200">الإنشاءات ومواد البناء</li>
                          <li className="text-white-200">أنظمة إدارة المخزون</li>
                        </ul>

                        <p>
                          هذا التنوع علّمني كيف أفكر بعقلية المنتج وليس فقط الكود، وكيف أقدّم حلولًا قابلة للتوسع وتخدم أهداف العمل.
                        </p>

                        <p>
                          في عملي الحالي كمطوّر <span className="text-purple font-semibold">Front-End بشركة Orbit Tech</span>، أشارك في تطوير وتحسين أنظمة داخلية معقّدة، أركز فيها على:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4 text-purple/80">
                          <li className="text-white-200">تصميم واجهات حديثة وفق مبادئ UX/UI</li>
                          <li className="text-white-200">تحسين الأداء وتجربة المستخدم</li>
                          <li className="text-white-200">التعاون الوثيق مع فرق Back-End لضمان تكامل النظام</li>
                        </ul>

                        <p>
                          ومن أبرز إنجازاتي:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4 text-purple/80">
                          <li className="text-white-200">تطوير نظام إدارة مخزون ذكي مدعوم بخوارزميات توصية وبيانات لحظية</li>
                          <li className="text-white-200">بناء Clone متكامل لـ Figma يدعم التعاون اللحظي بين المستخدمين</li>
                          <li className="text-white-200">إنشاء منصات تعليمية وتجارية وإعلامية تخدم آلاف المستخدمين</li>
                        </ul>

                        <p>
                          أتميز بفهم عميق للهندسة البرمجية، الأمان، الأداء، وقابلية التوسع، وأؤمن أن الكود النظيف، والعمل الجماعي، والتعلّم المستمر هم أساس أي منتج ناجح.
                        </p>

                        <div className="mt-8 p-6 rounded-lg border border-purple/30 bg-purple/5">
                          <p className="text-white font-semibold mb-2">
                            إذا كنت تبحث عن مطوّر:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li className="text-white-200">يفهم احتياجات العمل لا مجرد المتطلبات التقنية</li>
                            <li className="text-white-200">قادر على بناء حلول قوية وقابلة للنمو</li>
                            <li className="text-white-200">يهتم بالتفاصيل دون أن يفقد رؤية الهدف الكبير</li>
                          </ul>
                          <p className="mt-4 text-white font-semibold">
                            فأنا <span className="text-purple">عبد الرحمن الصاوي</span>، وجاهز أكون شريكك التقني في بناء منتج حقيقي وناجح.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-lg">
                          My name is <span className="text-purple font-semibold">Abdulrahman El-Sawy</span>, a Full-Stack Web Developer driven by a genuine passion for turning ideas into reliable, scalable digital systems.
                        </p>

                        <p>
                          I hold a <span className="text-purple font-semibold">B.S. in Computer Science & Artificial Intelligence from Helwan University</span>, where I quickly learned that real growth happens beyond classrooms. From early on, I focused on building real-world projects, believing that great developers understand problems before writing solutions.
                        </p>

                        <p>
                          I began my career as a <span className="text-purple font-semibold">Front-End Developer</span>, leading the development of tourism platforms inspired by global products like Booking and Trivago, with a strong focus on performance, usability, and visual clarity. Over time, my role naturally evolved into <span className="text-purple font-semibold">Full-Stack Development</span>, where I now design and build complete systems from UI to backend and databases.
                        </p>

                        <p>
                          I&apos;ve worked with companies and teams across Egypt and Saudi Arabia, delivering solutions in industries such as:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4 text-purple/80">
                          <li className="text-white-200">Information Technology</li>
                          <li className="text-white-200">Media & Film Production</li>
                          <li className="text-white-200">E-learning & Online Platforms</li>
                          <li className="text-white-200">Construction & Materials</li>
                          <li className="text-white-200">Inventory & Business Management Systems</li>
                        </ul>

                        <p>
                          This diversity shaped my mindset to think like a product builder—not just a coder—always aiming for scalable, secure, and business-oriented solutions.
                        </p>

                        <p>
                          Currently, as a <span className="text-purple font-semibold">Front-End Developer at Orbit Tech</span>, I contribute to enhancing complex internal systems by:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4 text-purple/80">
                          <li className="text-white-200">Designing modern, responsive UI based on UX/UI best practices</li>
                          <li className="text-white-200">Optimizing performance and data visualization</li>
                          <li className="text-white-200">Collaborating closely with back-end teams to deliver cohesive systems</li>
                        </ul>

                        <p>
                          Some of my key achievements include:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4 text-purple/80">
                          <li className="text-white-200">Leading the development of an AI-powered inventory management system</li>
                          <li className="text-white-200">Building a high-fidelity Figma clone with real-time collaboration</li>
                          <li className="text-white-200">Delivering production-ready platforms for education, IT services, media, and construction companies</li>
                        </ul>

                        <p>
                          I bring strong expertise in modern web technologies, system architecture, security, and performance optimization. I value clean code, teamwork, and continuous learning—and I always aim to build products that are not only functional, but impactful.
                        </p>

                        <div className="mt-8 p-6 rounded-lg border border-purple/30 bg-purple/5">
                          <p className="text-white font-semibold mb-2">
                            If you&apos;re looking for a developer who:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li className="text-white-200">Understands business goals before technical details</li>
                            <li className="text-white-200">Builds scalable and future-proof solutions</li>
                            <li className="text-white-200">Pays attention to both details and the bigger picture</li>
                          </ul>
                          <p className="mt-4 text-white font-semibold">
                            Then I&apos;m <span className="text-purple">Abdulrahman El-Sawy</span>, and I&apos;d be excited to help you build something meaningful and lasting.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;

