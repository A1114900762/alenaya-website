import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const locales = ['ar', 'en'] as const;
type Locale = (typeof locales)[number];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  // Turbopack requires statically analysable import paths (no template literals).
  const messagesMap: Record<Locale, () => Promise<{ default: Record<string, unknown> }>> = {
    ar: () => import('../../../messages/ar.json'),
    en: () => import('../../../messages/en.json'),
  };
  const messages = (await messagesMap[locale as Locale]()).default;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="bg-cream min-h-screen antialiased">
        <NextIntlClientProvider locale={locale} messages={messages as any}>
          <Navbar locale={locale} />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
