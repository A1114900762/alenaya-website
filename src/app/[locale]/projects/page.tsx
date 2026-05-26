'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Building2, GraduationCap, Briefcase, Hotel } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

const HOTELS_LIST = [
  'Marriott', 'Hilton', 'Sheraton', 'Novotel (Thakher Makkah)', 'IHG', 'Holiday Inn',
  'Sofitel', 'Le Méridien', 'Swissôtel Al Maqam Makkah', 'Swissôtel Makkah',
  'Radisson Blu', 'Mövenpick', 'Park Inn by Radisson', 'Ibis', 'Crowne Plaza',
  'W Hotels', 'Best Western Plus', 'Raffles', 'Fairmont Clock Hotel Makkah',
  'Accor', 'Shangri-La KL', 'Hyatt (Jebel Omar)', 'VOCO (IHG)', 'Rixos',
  'Millennium Hotels', 'InterContinental', 'Centro Shaheen Jeddah',
  'Anjum Hotel', 'Bay La Sun Marina', 'La Fontaine Hotels & Resorts',
  'Iridium Hotel (Al Subieen)', 'Iridium Hotel', 'Platinum Suites Hotel',
  'Concorde Hotel Doha', 'Three Points Hotels', 'Caribbean Hotel Jeddah',
  'The Venue Jeddah', 'Sunset Jeddah',
];

type TabKey = 'government' | 'universities' | 'private';

const TAB_ICONS: Record<TabKey, typeof Building2> = {
  government: Building2,
  universities: GraduationCap,
  private: Briefcase,
};

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const params = useParams();
  const locale = params.locale as string;
  const [activeTab, setActiveTab] = useState<TabKey>('government');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'government', label: t('tab_government') },
    { key: 'universities', label: t('tab_universities') },
    { key: 'private', label: t('tab_private') },
  ];

  const govProjects = [
    { titleKey: 'gov.jeddah_title', descKey: 'gov.jeddah_desc', status: 'done' },
    { titleKey: 'gov.hrm_title', descKey: 'gov.hrm_desc', status: 'done' },
    { titleKey: 'gov.ksu_title', descKey: 'gov.ksu_desc', status: 'done' },
    { titleKey: 'gov.culture_title', descKey: 'gov.culture_desc', status: 'done' },
  ];

  const uniProjects = [
    { titleKey: 'uni.ubt_title', descKey: 'uni.ubt_desc', status: 'done' },
    { titleKey: 'uni.nour_title', descKey: 'uni.nour_desc', status: 'done' },
    { titleKey: 'uni.kau_title', descKey: 'uni.kau_desc', status: 'negotiation' },
  ];

  const privateProjects = [
    { titleKey: 'private.children_title', descKey: 'private.children_desc', status: 'done' },
    { titleKey: 'private.qaderoon_title', descKey: 'private.qaderoon_desc', status: 'done' },
    { titleKey: 'private.fakeeh_title', descKey: 'private.fakeeh_desc', status: 'done' },
    { titleKey: 'private.sharbatly_title', descKey: 'private.sharbatly_desc', status: 'done' },
    { titleKey: 'private.maad_title', descKey: 'private.maad_desc', status: 'done' },
  ];

  const projectsByTab: Record<TabKey, typeof govProjects> = {
    government: govProjects,
    universities: uniProjects,
    private: privateProjects,
  };

  const statusMap: Record<string, { label: string; color: 'green' | 'amber' | 'blue' }> = {
    done: { label: t('status_done'), color: 'green' },
    negotiation: { label: t('status_negotiation'), color: 'amber' },
    ongoing: { label: t('status_ongoing'), color: 'blue' },
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-dark hero-mesh overflow-hidden py-28">
        <div className="absolute inset-0 dot-pattern opacity-50" aria-hidden="true" />
        <div className="absolute bottom-0 end-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute top-0 start-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container-max section-px relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-white/60 text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
            {locale === 'ar' ? 'مشاريعنا' : 'Our Projects'}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black text-white mb-5"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Tab section */}
      <section className="section-py bg-[#F8F9FB]">
        <div className="container-max section-px">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center" role="tablist" aria-label="Project categories">
            {tabs.map((tab) => {
              const Icon = TAB_ICONS[tab.key];
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.key}`}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-red'
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-primary/30 hover:text-primary hover:shadow-sm'
                  }`}
                >
                  <Icon size={16} aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Panels */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
              id={`panel-${activeTab}`}
              aria-label={tabs.find((tab) => tab.key === activeTab)?.label}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {projectsByTab[activeTab].map((proj, i) => {
                  const s = statusMap[proj.status];
                  return (
                    <ProjectCard
                      key={proj.titleKey}
                      title={t(proj.titleKey as any)}
                      description={t(proj.descKey as any)}
                      status={s.label}
                      statusColor={s.color}
                      index={i}
                    />
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Hotel logos wall */}
      <section className="section-py bg-white" aria-labelledby="hotels-heading">
        <div className="container-max section-px">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/8 text-secondary rounded-full px-5 py-2 text-sm font-bold mb-5">
              <Hotel size={16} aria-hidden="true" />
              {locale === 'ar' ? 'الفنادق الشريكة' : 'Partner Hotels'}
            </div>
            <h2 id="hotels-heading" className="text-4xl font-black text-dark mb-4">
              {t('hotels_title')}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t('hotels_subtitle')}</p>
            <div className="line-accent mx-auto mt-5" aria-hidden="true" />
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            role="list"
            aria-label="Partner hotels"
          >
            {HOTELS_LIST.map((hotel, i) => (
              <motion.div
                key={hotel}
                role="listitem"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.35 }}
                className="bg-[#F8F9FB] rounded-2xl border border-gray-100 px-4 py-3.5 flex items-center justify-center text-center hover:border-secondary/40 hover:bg-secondary/5 hover:shadow-sm transition-all duration-300 group"
              >
                <span className="text-xs font-bold text-gray-600 leading-tight group-hover:text-secondary transition-colors duration-200">
                  {hotel}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py relative bg-dark overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" aria-hidden="true" />
        <div className="relative container-max section-px text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-lg mx-auto text-lg"
          >
            {locale === 'ar'
              ? 'انضم إلى قائمة المؤسسات الرائدة التي تثق بالعناية لتحقيق الوصول الشامل'
              : 'Join the leading institutions that trust AL ENAYA for universal access'}
          </motion.p>
        </div>
      </section>
    </div>
  );
}
