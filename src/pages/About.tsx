import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2, Award, TrendingUp } from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold mb-8">{t('aboutPage.title')}</h1>
            <p className="text-xl text-brand-navy/70 leading-relaxed mb-8">
              {t('aboutPage.desc')}
            </p>
            <div className="space-y-4">
              {[
                t('stats.experience'),
                t('stats.apartments'),
                t('whyUs.modern').split(' — ')[0],
                t('projects.subtitle').split(', ')[0],
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
             <div className="aspect-square bg-brand-gray rounded-[4rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-2xl max-w-xs">
                <h4 className="text-3xl font-bold text-brand-primary mb-1">10+</h4>
                <p className="text-sm font-bold opacity-60 uppercase tracking-widest">{t('stats.experience').split(' ').slice(1).join(' ')}</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: Award, title: t('aboutPage.mission'), desc: t('aboutPage.missionDesc') },
            { icon: TrendingUp, title: t('aboutPage.values'), desc: t('aboutPage.valuesDesc') },
            { icon: Users, title: t('aboutPage.team'), desc: t('aboutPage.teamDesc') },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-brand-gray/50 border border-brand-gray hover-lift group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                <card.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{card.title}</h3>
              <p className="text-brand-navy/60 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Users = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
