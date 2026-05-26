'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const HOTELS = [
  'Marriott', 'Hilton', 'Sheraton', 'Novotel', 'IHG', 'Holiday Inn',
  'Sofitel', 'Le Méridien', 'Swissôtel', 'Radisson Blu', 'Mövenpick',
  'Park Inn', 'Ibis', 'Crowne Plaza', 'W Hotels', 'Best Western Plus',
  'Raffles', 'Fairmont', 'Accor', 'Shangri-La', 'Hyatt', 'VOCO',
  'Rixos', 'Millennium', 'InterContinental', 'Rotana', 'Anjum Hotel',
  'Iridium Hotel', 'La Fontaine', 'Centro', 'Concorde', 'Sofitel',
];

export default function PartnerLogos() {
  const t = useTranslations('partners');
  const doubled = [...HOTELS, ...HOTELS];

  return (
    <section className="section-py bg-white border-y border-gray-100 overflow-hidden" aria-labelledby="partners-heading">
      <div className="container-max section-px mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
            {t('title')}
          </p>
          <h2 id="partners-heading" className="text-3xl sm:text-4xl font-black text-dark">
            {t('title')}
          </h2>
          <div className="line-accent mx-auto mt-4" aria-hidden="true" />
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative" role="list" aria-label="Partner hotels">
        {/* Fade edges */}
        <div className="absolute start-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute end-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div className="flex animate-marquee w-max gap-4">
          {doubled.map((hotel, i) => (
            <div
              key={`${hotel}-${i}`}
              role="listitem"
              className="shrink-0 flex items-center justify-center px-7 py-4 bg-gray-50 border border-gray-100 rounded-2xl min-w-[160px] h-16 hover:bg-white hover:border-secondary/30 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">{hotel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
