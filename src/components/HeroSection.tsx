'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRef } from 'react';
import { useParams } from 'next/navigation';

import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FloatingOrb({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
      transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mesh noise"
      aria-label="Hero"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-100" aria-hidden="true" />

      {/* Ambient orbs */}
      <FloatingOrb className="w-[600px] h-[600px] bg-primary/20 -top-40 -start-40" />
      <FloatingOrb className="w-[500px] h-[500px] bg-secondary/25 -bottom-20 -end-20" />
      <FloatingOrb className="w-[300px] h-[300px] bg-gold/10 top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating geometric rings */}
      <motion.div
        className="absolute top-24 end-[8%] w-32 h-32 rounded-full border border-white/10 float-1"
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-32 start-[12%] w-20 h-20 rounded-full border border-primary/30 float-2"
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/3 end-[20%] w-10 h-10 rounded-full bg-gold/20 float-3"
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/4 start-[15%] w-6 h-6 rounded-full bg-white/10 float-2"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-max section-px text-center pt-20 pb-10"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 14, duration: 1 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/images/logo.png"
            alt="AL ENAYA Logo"
            style={{ width: '70px', height: '70px', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Tag */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-7 border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
          <span className="text-white/80 text-sm font-medium">
            {locale === 'ar' ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia'}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.08] mb-5 text-white tracking-tight"
        >
          {t('title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-xl sm:text-2xl font-bold mb-5 gradient-text-gold"
        >
          {t('subtitle')}
        </motion.p>

        {/* Description */}
        <motion.p
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('description')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href={`/${locale}/services`} className="btn-primary group flex items-center gap-3">
            {t('cta_services')}
            <ArrowIcon
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <Link href={`/${locale}/contact`} className="btn-glass flex items-center gap-3">
            <Phone size={17} aria-hidden="true" />
            {t('cta_contact')}
          </Link>
        </motion.div>

        {/* Mini stats */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {[
            { num: '30+', label: locale === 'ar' ? 'فندق شريك' : 'Partner Hotels' },
            { num: '3', label: locale === 'ar' ? 'أنواع إعاقة' : 'Disability Types' },
            { num: '10+', label: locale === 'ar' ? 'شركاء نجاح' : 'Success Partners' },
          ].map((s) => (
            <div key={s.label} className="text-center glass rounded-2xl px-6 py-3 min-w-[100px]">
              <div className="text-2xl font-black text-white stat-number">{s.num}</div>
              <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 13, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
