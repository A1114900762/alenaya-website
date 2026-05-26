import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AL ENAYA for Access Care | العناية للوصول الشامل',
  description: 'Universal accessibility solutions for people with disabilities in Saudi Arabia | حلول الوصول الشامل لذوي الإعاقة في المملكة العربية السعودية',
  keywords: 'universal access, accessibility, disability, Saudi Arabia, Jeddah, الوصول الشامل, ذوي الإعاقة, السعودية',
  authors: [{ name: 'AL ENAYA for Access Care' }],
  openGraph: {
    title: 'AL ENAYA for Access Care',
    description: 'Towards a fully inclusive society',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
