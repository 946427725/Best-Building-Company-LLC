import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-bold mb-8">{t('contactPage.title')}</h1>
            <p className="text-brand-navy/60 text-lg mb-12">
              {t('cta.subtitle')}
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: t('footer.contact'), content: ['+998 90 123 45 67', '+998 71 200 00 00'] },
                { icon: Mail, title: 'Email', content: ['info@bestbuilding.uz', 'sales@bestbuilding.uz'] },
                { icon: MapPin, title: t('whyUs.location').split(' — ')[0], content: ["Toshkent sh., Yakkasaray tumani, Shota Rustaveli ko'chasi, 45-uy"] },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-brand-gray rounded-xl flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-primary/20">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 group-hover:text-brand-primary transition-colors">{item.title}</h4>
                    {item.content.map((line, j) => (
                      <p key={j} className="text-brand-navy/60 group-hover:text-brand-navy transition-colors">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[3rem] border border-brand-gray shadow-2xl hover:shadow-brand-primary/5 transition-shadow duration-500"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider opacity-60">{t('contactPage.name')}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-brand-gray rounded-2xl border-none focus:ring-2 focus:ring-brand-primary transition-all hover:bg-brand-gray/80"
                  placeholder={t('contactPage.name')}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider opacity-60">{t('contactPage.phone')}</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 bg-brand-gray rounded-2xl border-none focus:ring-2 focus:ring-brand-primary transition-all hover:bg-brand-gray/80"
                  placeholder="+998"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider opacity-60">{t('contactPage.message')}</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-brand-gray rounded-2xl border-none focus:ring-2 focus:ring-brand-primary transition-all hover:bg-brand-gray/80"
                  placeholder={t('contactPage.message')}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-premium w-full bg-brand-gradient text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'loading' ? '...' : status === 'success' ? t('contactPage.success') : (
                  <>
                    {t('contactPage.send')}
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
