import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useScroll } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Send } from 'lucide-react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Progress } from './pages/Progress';
import { Contact } from './pages/Contact';
import { ContactWidget } from './components/ContactWidget';
import './i18n';

function App() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  
  // Sync motion scroll progress to state for Three.js
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white">
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={
            <div className="relative">
              <Home progress={progress} />
              <Footer />
            </div>
          } />
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/projects" element={<><Projects /><Footer /></>} />
          <Route path="/progress" element={<><Progress /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
      </main>
      <ContactWidget />
    </div>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-gray py-16 lg:py-24 px-6 border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img 
              src="https://i.postimg.cc/9QsLPhwq/logo.jpg" 
              alt="Best Building Logo" 
              className="w-14 h-14 object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=100';
              }}
            />
            <div>
              <h1 className="text-xl font-bold leading-none tracking-tight text-brand-navy">BEST BUILDING</h1>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-black">Company LLC</p>
            </div>
          </div>
          <p className="text-brand-navy/60 max-w-sm mb-10 leading-relaxed font-medium">
            {t('footer.about')}
          </p>
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: 'https://www.instagram.com/bestbuilding.uz/', label: 'Instagram' },
              { icon: Send, href: 'https://t.me/bestbuilding_group', label: 'Telegram' },
              { icon: Facebook, href: 'https://www.facebook.com/bestbuilding.uz/', label: 'Facebook' }
            ].map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-navy hover:bg-brand-primary hover:text-white transition-all shadow-xl shadow-brand-navy/5 hover:shadow-brand-primary/30 hover:-translate-y-1.5 group"
                aria-label={social.label}
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="lg:pl-8">
          <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-xs text-brand-navy/40">{t('nav.projects')}</h4>
          <ul className="space-y-5 text-brand-navy/70 font-bold">
            <li><Link to="/" className="hover:text-brand-primary transition-colors">{t('nav.home')}</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">{t('nav.about')}</Link></li>
            <li><Link to="/projects" className="hover:text-brand-primary transition-colors">{t('nav.projects')}</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="lg:pl-8">
          <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-xs text-brand-navy/40">{t('nav.contact')}</h4>
          <ul className="space-y-5 text-brand-navy/70 font-bold">
            <li className="flex flex-col gap-1">
              <span className="text-[10px] uppercase opacity-40 tracking-widest">Phone</span>
              <a href="tel:+998901234567" className="hover:text-brand-primary transition-colors">+998 90 123 45 67</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[10px] uppercase opacity-40 tracking-widest">Email</span>
              <a href="mailto:info@bestbuilding.uz" className="hover:text-brand-primary transition-colors">info@bestbuilding.uz</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[10px] uppercase opacity-40 tracking-widest">Address</span>
              <span>Toshkent, Yakkasaray tumani</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-brand-navy/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">
        <p>© 2026 Best Building Company LLC. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
