import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { FileText, UserCheck, AlertTriangle, ShieldCheck, Mail } from 'lucide-react';

export function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-gray/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">{t('termsOfService.title')}</h1>
          <p className="text-brand-navy/60 mb-12 font-medium">{t('termsOfService.lastUpdated')}</p>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-brand-primary" size={24} />
                <h2 className="text-2xl font-bold text-brand-navy">{t('termsOfService.intro')}</h2>
              </div>
              <p className="text-brand-navy/70 leading-relaxed">
                {t('termsOfService.introDesc')}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="text-brand-primary" size={24} />
                <h2 className="text-2xl font-bold text-brand-navy">{t('termsOfService.userResp')}</h2>
              </div>
              <p className="text-brand-navy/70 leading-relaxed mb-4">
                {t('termsOfService.userRespDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-brand-navy/70">
                {(t('termsOfService.respList', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-brand-primary" size={24} />
                <h2 className="text-2xl font-bold text-brand-navy">{t('termsOfService.disclaimer')}</h2>
              </div>
              <p className="text-brand-navy/70 leading-relaxed mb-4">
                {t('termsOfService.disclaimerDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-brand-navy/70">
                {(t('termsOfService.disclaimerList', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-brand-primary" size={24} />
                <h2 className="text-2xl font-bold text-brand-navy">{t('termsOfService.liability')}</h2>
              </div>
              <p className="text-brand-navy/70 leading-relaxed">
                {t('termsOfService.liabilityDesc')}
              </p>
            </section>

            <section className="p-8 bg-white rounded-3xl border border-brand-navy/5 shadow-xl shadow-brand-navy/5">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-brand-primary" size={24} />
                <h2 className="text-2xl font-bold text-brand-navy">{t('termsOfService.contactInfo')}</h2>
              </div>
              <p className="text-brand-navy/70 leading-relaxed mb-4">
                {t('termsOfService.contactInfoDesc')}
              </p>
              <div className="font-bold text-brand-navy">
                <p>Best Building Company LLC</p>
                <p>Email: info@bestbuilding.uz</p>
                <p>Phone: +998 78-113-76-70</p>
                <p>Address: Toshkent, Yakkasaray tumani, Shota Rustaveli ko'chasi 126-uy</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
