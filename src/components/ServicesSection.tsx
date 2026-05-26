'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Eye, Activity, Ear, ArrowUpRight } from 'lucide-react';

const services = [
  {
    key: 'visual', icon: Eye, num: '01',
    gradient: 'from-primary to-primary-dark',
    glow: 'rgba(200,16,46,0.2)',
    border: 'group-hover:border-primary/40',
    badge: 'bg-primary/10 text-primary',
  },
  {
    key: 'motor', icon: Activity, num: '02',
    gradient: 'from-secondary to-secondary-dark',
    glow: 'rgba(0,61,165,0.2)',
    border: 'group-hover:border-secondary/40',
    badge: 'bg-secondary/10 text-secondary',
  },
  {
    key: 'hearing', icon: Ear, num: '03',
    gradient: 'from-primary to-primary-dark',
    glow: 'rgba(200,16,46,0.2)',
    border: 'group-hover:border-primary/40',
    badge: 'bg-primary/10 text-primary',
  },
];

export default function ServicesSection() {
  const t = useTranslations('services_preview');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <section className="section-py bg-[#F8F9FB]" aria-labelledby="services-heading">
      <div className="container-max section-px">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/8 text-primary rounded-full px-5 py-2 text-sm font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            {t('title')}
          </div>
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-black text-dark mb-5 leading-tight">
            {t('subtitle')}
          </h2>
          <div className="line-accent mx-auto" aria-hidden="true" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.key}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className={`group relative bg-white rounded-3xl p-8 border-2 border-gray-100 ${svc.border} card-premium h-full flex flex-col overflow-hidden`}
                  style={{ '--glow': svc.glow } as React.CSSProperties}
                >
                  {/* Number watermark */}
                  <div className="absolute top-6 end-6 text-6xl font-black text-gray-50 leading-none select-none pointer-events-none" aria-hidden="true">
                    {svc.num}
                  </div>

                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-7 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon size={28} className="text-white" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-dark mb-4 leading-snug">
                    {t(`${svc.key}_title` as any)}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-500 leading-relaxed text-sm flex-grow mb-8">
                    {t(`${svc.key}_desc` as any)}
                  </p>

                  {/* Link */}
                  <Link
                    href={`/${locale}/services#${svc.key}`}
                    className={`inline-flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5 ${svc.badge} transition-all duration-300 group-hover:gap-3 self-start`}
                    aria-label={`Learn more about ${t(`${svc.key}_title` as any)}`}
                  >
                    {t('learn_more')}
                    <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  {/* Bottom gradient reveal */}
                  <div
                    className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${svc.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-start`}
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-dark text-white font-bold rounded-2xl hover:-translate-y-1 hover:shadow-premium transition-all duration-300 text-base group"
          >
            {t('all_services')}
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
