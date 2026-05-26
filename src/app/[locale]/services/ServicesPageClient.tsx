'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Eye, Activity, Ear, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const SECTIONS = [
  {
    id: 'visual', icon: Eye,
    gradient: 'from-primary to-primary-dark',
    bg: 'bg-[#FFF5F6]',
    accent: 'text-primary',
    border: 'border-primary/20',
    checkColor: 'text-primary',
  },
  {
    id: 'motor', icon: Activity,
    gradient: 'from-secondary to-secondary-dark',
    bg: 'bg-[#F5F7FF]',
    accent: 'text-secondary',
    border: 'border-secondary/20',
    checkColor: 'text-secondary',
  },
  {
    id: 'hearing', icon: Ear,
    gradient: 'from-primary to-primary-dark',
    bg: 'bg-[#FFF5F6]',
    accent: 'text-primary',
    border: 'border-primary/20',
    checkColor: 'text-primary',
  },
];

export default function ServicesPageClient() {
  const t = useTranslations('services');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="relative bg-dark hero-mesh overflow-hidden py-28">
        <div className="absolute inset-0 dot-pattern opacity-50" aria-hidden="true" />
        <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container-max section-px relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-white/60 text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
            {locale === 'ar' ? 'خدماتنا' : 'Our Services'}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black text-white mb-5"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Service sections */}
      {SECTIONS.map((sec, sectionIdx) => {
        const Icon = sec.icon;
        const items: string[] = t.raw(`${sec.id}.items`) as string[];
        const isEven = sectionIdx % 2 === 0;

        return (
          <section
            id={sec.id}
            key={sec.id}
            className={`section-py ${isEven ? 'bg-white' : sec.bg}`}
            aria-labelledby={`${sec.id}-heading`}
          >
            <div className="container-max section-px">
              {/* Section header */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 mb-6 bg-gradient-to-br ${sec.gradient}`}>
                  <Icon size={24} className="text-white" aria-hidden="true" />
                  <h2 id={`${sec.id}-heading`} className="text-xl font-black text-white">
                    {t(`${sec.id}.title`)}
                  </h2>
                </div>
                <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                  {t(`${sec.id}.description`)}
                </p>
              </motion.div>

              {/* Items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className={`group flex items-start gap-3 p-5 bg-white rounded-2xl border ${sec.border} hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    <CheckCircle2 size={18} className={`${sec.checkColor} shrink-0 mt-0.5`} aria-hidden="true" />
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Hotels CTA */}
      <section className="section-py relative bg-dark overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" aria-hidden="true" />
        <div className="relative container-max section-px text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-white mb-5"
          >
            {locale === 'ar' ? 'خدمات الفنادق المتخصصة' : 'Specialized Hotel Services'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 mb-10 max-w-lg mx-auto"
          >
            {locale === 'ar' ? 'حلول متكاملة وفق متطلبات وزارة السياحة السعودية' : 'Complete solutions per Saudi Ministry of Tourism requirements'}
          </motion.p>
          <Link
            href={`/${locale}/services/hotels`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dark font-black rounded-2xl hover:bg-gray-50 hover:-translate-y-1 hover:shadow-premium transition-all duration-300 group"
          >
            {locale === 'ar' ? 'اعرف أكثر' : 'Learn More'}
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
