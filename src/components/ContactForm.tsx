'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-8"
      >
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle2 className="text-green-500" size={40} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-black text-dark mb-2">
          {t('form_success')}
        </h3>
      </motion.div>
    );
  }

  const inputClass =
    'w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-xl text-dark placeholder-gray-400 text-sm font-medium ' +
    'focus:bg-white focus:border-primary focus:outline-none transition-all duration-200';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
            {t('form_name')} <span className="text-primary" aria-label="required">*</span>
          </label>
          <input id="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
            {t('form_company')}
          </label>
          <input id="company" type="text" autoComplete="organization" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
            {t('form_email')} <span className="text-primary" aria-label="required">*</span>
          </label>
          <input id="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
            {t('form_phone')} <span className="text-primary" aria-label="required">*</span>
          </label>
          <input id="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
          {t('form_service')}
        </label>
        <select id="service" className={inputClass + ' cursor-pointer appearance-none'}>
          <option value="">{t('form_service')}</option>
          <option value="visual">{t('form_service_visual')}</option>
          <option value="motor">{t('form_service_motor')}</option>
          <option value="hearing">{t('form_service_hearing')}</option>
          <option value="all">{t('form_service_all')}</option>
          <option value="hotels">{t('form_service_hotels')}</option>
          <option value="consulting">{t('form_service_consulting')}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
          {t('form_message')} <span className="text-primary" aria-label="required">*</span>
        </label>
        <textarea id="message" required rows={5} className={inputClass + ' resize-none'} />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary flex items-center justify-center gap-3 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
        aria-busy={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <motion.div
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            />
            {t('form_sending')}
          </span>
        ) : (
          <>
            {t('form_submit')}
            <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
