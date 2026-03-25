import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export function Progress() {
  const { t } = useTranslation();

  const milestones = t('progressPage.milestones', { returnObjects: true }) as { date: string, title: string, desc: string }[];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">{t('progressPage.title')}</h1>
          <p className="text-brand-navy/60 max-w-2xl mx-auto text-lg">
            {t('progressPage.desc')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 w-1 h-full bg-brand-gray -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10 hidden md:flex items-center justify-center bg-brand-primary"
                >
                  {i === 0 ? <div className="w-2 h-2 bg-white rounded-full animate-pulse" /> : <CheckCircle2 size={16} className="text-white" />}
                </motion.div>

                <div className="md:w-1/2 px-12">
                  <div className={`p-8 rounded-3xl bg-white border border-brand-gray shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${i === 0 ? 'ring-2 ring-brand-primary/20' : ''}`}>
                    <div className="flex items-center gap-2 text-brand-primary font-bold mb-4 group-hover:scale-105 transition-transform origin-left">
                      <Calendar size={16} />
                      <span className="text-sm uppercase tracking-widest">{m.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{m.title}</h3>
                    <p className="text-brand-navy/60 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {t('progressPage.gallery')}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
            ].map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-3xl overflow-hidden group cursor-pointer hover-zoom shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={img} 
                  alt={`Progress ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
