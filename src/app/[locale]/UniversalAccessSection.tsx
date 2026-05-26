'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Scale, Users, Heart } from 'lucide-react';

const pillars = [
  { icon: Scale, titleKey: 'equal_title', descKey: 'equal_desc', gradient: 'from-primary to-primary-dark' },
  { icon: Users, titleKey: 'integration_title', descKey: 'integration_desc', gradient: 'from-secondary to-secondary-dark' },
  { icon: Heart, titleKey: 'quality_title', descKey: 'quality_desc', gradient: 'from-primary to-primary-dark' },
];

export default function UniversalAccessSection() {
  const t = useTranslations('universal_access');

  return (
    <section className="section-py bg-white" aria-labelledby="ua-heading">
      <div className="container-max section-px">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/8 text-secondary rounded-full px-5 py-2 text-sm font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
              {t('title')}
            </div>
            <h2 id="ua-heading" className="text-4xl sm:text-5xl font-black text-dark leading-tight mb-6">
              {t('title')}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              {t('description')}
            </p>

            <div className="space-y-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.titleKey}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={20} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{t(p.titleKey as any)}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{t(p.descKey as any)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-premium-lg">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80"
                alt=""
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent" />
            </div>

            {/* Floating badge — Vision 2030 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute -top-5 -end-5 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl px-5 py-4 text-center shadow-red"
            >
              <div className="text-2xl font-black">2030</div>
              <div className="text-[11px] font-semibold opacity-80 mt-0.5">Vision</div>
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute -bottom-5 -start-5 glass-light rounded-2xl p-5 shadow-premium border border-gray-100"
            >
              <div className="text-3xl font-black text-dark stat-number">50+</div>
              <div className="text-xs font-semibold text-gray-500 mt-1">
                {/* locale not available here, use a neutral label */}
                Projects Completed
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
