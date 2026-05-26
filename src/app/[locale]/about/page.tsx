'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Target, Eye as EyeIcon, CheckCircle2, Megaphone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const MILESTONES = ['milestone_1','milestone_2','milestone_3','milestone_4','milestone_5','milestone_6'];

export default function AboutPage() {
  const t = useTranslations('about');
  const params = useParams();
  const locale = params.locale as string;
  const uniqueItems: string[] = t.raw('unique_items') as string[];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-dark hero-mesh overflow-hidden py-28">
        <div className="absolute inset-0 dot-pattern opacity-50" aria-hidden="true" />
        <div className="absolute bottom-0 start-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container-max section-px relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-5xl sm:text-6xl font-black text-white mb-5">
            {t('title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-white/50 text-lg max-w-xl mx-auto">
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-white">
        <div className="container-max section-px">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: t('mission_title'), desc: t('mission_desc'), gradient: 'from-primary to-primary-dark', bg: 'bg-[#FFF5F6]', border: 'border-primary/15' },
              { icon: EyeIcon, title: t('vision_title'), desc: t('vision_desc'), gradient: 'from-secondary to-secondary-dark', bg: 'bg-[#F5F7FF]', border: 'border-secondary/15' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`${card.bg} rounded-3xl p-8 border ${card.border}`}
                >
                  <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} items-center justify-center mb-6 shadow-lg`}>
                    <Icon size={26} className="text-white" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-black text-dark mb-4">{card.title}</h2>
                  <p className="text-gray-500 leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What makes us unique */}
      <section className="section-py bg-[#F8F9FB]" aria-labelledby="unique-heading">
        <div className="container-max section-px">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/8 text-primary rounded-full px-5 py-2 text-sm font-bold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                {t('unique_title')}
              </div>
              <h2 id="unique-heading" className="text-4xl font-black text-dark mb-10 leading-tight">{t('unique_title')}</h2>
              <div className="space-y-4">
                {uniqueItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 group hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} className="text-primary" aria-hidden="true" />
                    </div>
                    <span className="text-gray-700 font-semibold text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-square shadow-premium-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=700&q=80"
                alt={locale === 'ar' ? 'فريق العناية' : 'AL ENAYA team'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-white" aria-labelledby="timeline-heading">
        <div className="container-max section-px">
          <div className="text-center mb-16">
            <h2 id="timeline-heading" className="text-4xl font-black text-dark">{t('timeline_title')}</h2>
            <div className="line-accent mx-auto mt-4" aria-hidden="true" />
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute start-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary" aria-hidden="true" />
            <div className="space-y-6">
              {MILESTONES.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className={`shrink-0 w-11 h-11 rounded-full border-4 ${i % 2 === 0 ? 'border-primary bg-primary/10' : 'border-secondary bg-secondary/10'} flex items-center justify-center font-black text-sm z-10 bg-white`} aria-hidden="true">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100 hover:shadow-md transition-shadow">
                    <p className="text-gray-700 font-semibold text-sm leading-relaxed">{t(key as any)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop CTA */}
      <section className="section-py relative bg-dark overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" aria-hidden="true" />
        <div className="relative container-max section-px">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 glass rounded-2xl px-4 py-2 mb-5">
                <Megaphone size={20} className="text-gold" aria-hidden="true" />
                <span className="text-white/70 text-sm font-semibold">{t('workshop_title')}</span>
              </div>
              <p className="text-white/50 leading-relaxed">{t('workshop_desc')}</p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-dark font-black rounded-2xl hover:bg-gray-50 hover:-translate-y-1 hover:shadow-premium transition-all duration-300 group"
            >
              {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
