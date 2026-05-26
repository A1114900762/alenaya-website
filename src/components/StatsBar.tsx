'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Building2, Accessibility, Handshake, FolderCheck } from 'lucide-react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = 16;
    const inc = target / (1800 / step);
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

export default function StatsBar() {
  const t = useTranslations('stats');

  const stats = [
    { icon: Building2, count: 30, suffix: '+', label: t('hotels_label'), color: 'from-primary to-primary-dark' },
    { icon: Accessibility, count: 3, suffix: '', label: t('types_label'), color: 'from-secondary to-secondary-dark' },
    { icon: Handshake, count: 10, suffix: '+', label: t('partners_label'), color: 'from-primary to-primary-dark' },
    { icon: FolderCheck, count: 52, suffix: '+', label: t('projects_label'), color: 'from-secondary to-secondary-dark' },
  ];

  return (
    <section className="relative bg-dark py-20 overflow-hidden" aria-label="Statistics">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="relative container-max section-px">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="glass rounded-2xl p-6 lg:p-8 text-center border border-white/8 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} mb-5 shadow-lg`}>
                    <Icon size={26} className="text-white" aria-hidden="true" />
                  </div>
                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 leading-none">
                    <Counter target={s.count} suffix={s.suffix} />
                  </div>
                  {/* Label */}
                  <div className="text-sm font-medium text-white/50">{s.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
