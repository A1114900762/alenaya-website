'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Ear, Activity, Eye, CheckCircle2, Building2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function HotelsPage() {
  const t = useTranslations('hotels');
  const params = useParams();
  const locale = params.locale as string;

  const cards = [
    {
      icon: Ear,
      titleKey: 'hearing_card_title',
      descKey: 'hearing_card_desc',
      gradient: 'from-primary to-primary-dark',
      bg: 'bg-[#FFF5F6]',
      accent: 'text-primary',
      border: 'border-primary/20',
    },
    {
      icon: Activity,
      titleKey: 'motor_card_title',
      descKey: 'motor_card_desc',
      gradient: 'from-secondary to-secondary-dark',
      bg: 'bg-[#F5F7FF]',
      accent: 'text-secondary',
      border: 'border-secondary/20',
    },
    {
      icon: Eye,
      titleKey: 'visual_card_title',
      descKey: 'visual_card_desc',
      gradient: 'from-primary to-primary-dark',
      bg: 'bg-[#FFF5F6]',
      accent: 'text-primary',
      border: 'border-primary/20',
    },
  ];

  const services = [t('gap_analysis'), t('compliance'), t('supply')];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-dark hero-mesh overflow-hidden py-28">
        <div className="absolute inset-0 dot-pattern opacity-50" aria-hidden="true" />
        <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container-max section-px relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 glass rounded-2xl px-5 py-2.5 mb-6"
          >
            <Building2 size={20} className="text-gold" aria-hidden="true" />
            <span className="text-white/70 text-sm font-semibold">
              {locale === 'ar' ? 'قطاع الفنادق والسياحة' : 'Hotels & Tourism Sector'}
            </span>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Description + core services */}
      <section className="section-py bg-white">
        <div className="container-max section-px">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-500 leading-relaxed mb-10">{t('description')}</p>
              <div className="space-y-4">
                {services.map((svc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-[#F8F9FB] rounded-2xl p-4 border border-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} className="text-primary" aria-hidden="true" />
                    </div>
                    <span className="font-semibold text-gray-700">{svc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-premium-lg aspect-video"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80"
                alt={locale === 'ar' ? 'فندق فاخر مع وصول شامل' : 'Luxury hotel with universal access'}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three disability type cards */}
      <section className="section-py bg-[#F8F9FB]" aria-label="Hotel services by disability type">
        <div className="container-max section-px">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-dark mb-4">
              {locale === 'ar' ? 'حلولنا للفنادق حسب نوع الإعاقة' : 'Our Hotel Solutions by Disability Type'}
            </h2>
            <div className="line-accent mx-auto mt-4" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.titleKey}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`group bg-white rounded-3xl p-8 border ${card.border} hover:shadow-premium hover:-translate-y-1 transition-all duration-400`}
                >
                  <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className={`text-lg font-black mb-3 ${card.accent}`}>{t(card.titleKey as any)}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(card.descKey as any)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            {locale === 'ar' ? 'هل فندقك جاهز للوصول الشامل؟' : 'Is Your Hotel Ready for Universal Access?'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 mb-10 max-w-lg mx-auto"
          >
            {locale === 'ar'
              ? 'تواصل معنا اليوم لدراسة فجوات فندقك والبدء في الحلول'
              : 'Contact us today for a gap analysis and get started on solutions'}
          </motion.p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dark font-black rounded-2xl hover:bg-gray-50 hover:-translate-y-1 hover:shadow-premium transition-all duration-300 group"
          >
            {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
