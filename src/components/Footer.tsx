'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const params = useParams();
  const locale = params.locale as string;

  const navLinks = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/services`, label: tNav('services') },
    { href: `/${locale}/projects`, label: tNav('projects') },
    { href: `/${locale}/about`, label: tNav('about') },
    { href: `/${locale}/contact`, label: tNav('contact') },
  ];

  const serviceLinks = [
    { href: `/${locale}/services#visual`, label: t('service_visual') },
    { href: `/${locale}/services#motor`, label: t('service_motor') },
    { href: `/${locale}/services#hearing`, label: t('service_hearing') },
    { href: `/${locale}/services/hotels`, label: t('service_hotels') },
  ];

  return (
    <footer className="bg-dark relative overflow-hidden" role="contentinfo">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" aria-hidden="true" />
      {/* Background decoration */}
      <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 start-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative container-max section-px pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-5 group">
              <img
                src="/images/logo.png"
                alt="AL ENAYA Logo"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
              <div className="leading-tight">
                <div className="text-base font-black text-white">
                  {locale === 'ar' ? 'العناية' : 'AL ENAYA'}
                </div>
                <div className="text-xs text-white/40">
                  {locale === 'ar' ? 'للوصول الشامل' : 'for Access Care'}
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-7">{t('tagline')}</p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'X (Twitter)', char: 'X' },
                { label: 'LinkedIn', char: 'in' },
                { label: 'Instagram', char: 'IG' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200 text-xs font-bold"
                >
                  {s.char}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6">
              {t('quick_links_title')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6">
              {t('services_title')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6">
              {t('contact_title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-white/50">{t('location')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:info@alenaya.com" className="text-sm text-white/50 hover:text-white transition-colors">
                  info@alenaya.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+966505885380" className="text-sm text-white/50 hover:text-white transition-colors" dir="ltr">
                  +966 50 588 5380
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">{t('copyright')}</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            <span className="text-xs text-white/25">
              {locale === 'ar' ? 'جميع الأنظمة تعمل' : 'All systems operational'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
