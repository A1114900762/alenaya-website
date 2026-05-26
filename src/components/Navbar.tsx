'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps { locale: string; }

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const otherLocale = locale === 'ar' ? 'en' : 'ar';
  const switchHref = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-light shadow-lg shadow-black/5 py-0'
          : 'bg-transparent py-2'
      }`}
    >
      <nav
        className="container-max section-px h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group" aria-label="AL ENAYA Home">
          <img
            src="/images/logo.png"
            alt="AL ENAYA Logo"
            style={{ width: '70px', height: '70px', objectFit: 'contain' }}
          />
          <div className={`leading-tight ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className={`text-sm font-bold tracking-wide transition-colors duration-300 ${scrolled ? 'text-dark' : 'text-white'}`}>
              {locale === 'ar' ? 'العناية' : 'AL ENAYA'}
            </div>
            <div className={`text-[10px] transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-white/60'}`}>
              {locale === 'ar' ? 'للوصول الشامل' : 'for Access Care'}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 group ${
                isActive(link.href)
                  ? scrolled ? 'text-primary' : 'text-white'
                  : scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/75 hover:text-white'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}

          {/* Language switcher */}
          <Link
            href={switchHref}
            className={`ms-3 px-4 py-1.5 rounded-lg text-sm font-bold border-2 transition-all duration-200 ${
              scrolled
                ? 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                : 'border-white/40 text-white hover:border-white hover:bg-white/10'
            }`}
            aria-label="Switch language"
          >
            {t('language_switch')}
          </Link>

          {/* CTA */}
          <Link
            href={`/${locale}/contact`}
            className="ms-2 btn-primary text-sm px-5 py-2 rounded-xl"
          >
            {t('contact')}
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href={switchHref}
            className={`px-3 py-1.5 rounded-lg border-2 text-sm font-bold transition-colors ${
              scrolled ? 'border-secondary text-secondary' : 'border-white/40 text-white'
            }`}
          >
            {t('language_switch')}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-light border-t border-black/5 shadow-premium"
          >
            <div className="section-px py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: locale === 'ar' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/8'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMenuOpen(false)}
                className="mt-2 btn-primary text-center rounded-xl py-3 text-sm"
              >
                {t('contact')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
