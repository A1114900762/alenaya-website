'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const t = useTranslations('contact');

  const contactItems = [
    { icon: MapPin,       label: t('location_title'), value: t('location_value'), href: undefined,                            color: 'text-primary',       bg: 'bg-primary/8',    iconBg: 'from-primary to-primary-dark' },
    { icon: Mail,         label: t('email_title'),    value: 'info@alenaya.com',   href: 'mailto:info@alenaya.com',            color: 'text-secondary',     bg: 'bg-secondary/8',  iconBg: 'from-secondary to-secondary-dark' },
    { icon: Phone,        label: t('phone_title'),    value: '+966 50 588 5380',   href: 'tel:+966505885380',                  color: 'text-primary',       bg: 'bg-primary/8',    iconBg: 'from-primary to-primary-dark' },
    { icon: MessageCircle,label: t('whatsapp_title'), value: '+966 50 588 5380',   href: 'https://wa.me/966505885380',         color: 'text-[#25D366]',     bg: 'bg-green-50',     iconBg: 'from-[#25D366] to-[#1DA851]' },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-dark hero-mesh overflow-hidden py-28">
        <div className="absolute inset-0 dot-pattern opacity-50" aria-hidden="true" />
        <div className="absolute top-0 start-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container-max section-px relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-5xl sm:text-6xl font-black text-white mb-5">
            {t('title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-white/50 text-lg max-w-xl mx-auto">
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-py bg-[#F8F9FB]">
        <div className="container-max section-px">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                      <div className={`text-sm font-bold ${item.color}`} dir="ltr">{item.value}</div>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-100 h-44 flex items-center justify-center shadow-sm">
                <div className="text-center text-gray-400">
                  <MapPin size={28} className="mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium">Jeddah, Saudi Arabia</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 shadow-premium border border-gray-100"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
