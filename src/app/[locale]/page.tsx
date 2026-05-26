import { getTranslations } from 'next-intl/server';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ServicesSection from '@/components/ServicesSection';
import PartnerLogos from '@/components/PartnerLogos';
import UniversalAccessSection from './UniversalAccessSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  return {
    title: `${t('title')} | AL ENAYA`,
    description: t('description'),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <UniversalAccessSection />
      <ServicesSection />
      <PartnerLogos />
    </>
  );
}
