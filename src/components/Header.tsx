import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.progress'), path: '/progress' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://i.postimg.cc/9QsLPhwq/logo.jpg" 
            alt="Best Building Logo" 
            className="w-12 h-12 object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=100';
            }}
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold leading-none tracking-tight text-brand-navy">BEST BUILDING</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Company LLC</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-all duration-300 hover:text-brand-primary hover:scale-105 active:scale-95',
                location.pathname === link.path ? 'text-brand-primary' : 'text-brand-navy/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold">
            {['uz', 'ru', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={cn(
                  'uppercase px-2 py-1 rounded transition-all hover:scale-110 active:scale-90',
                  i18n.language === lang ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20' : 'hover:bg-brand-gray'
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href="tel:+998781137670"
            className="hidden lg:flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-deep hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-navy/10"
          >
            <Phone size={16} />
            +998 78 113 76 70
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 border-t">
              {['uz', 'ru', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    changeLanguage(lang);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    'uppercase px-3 py-1 rounded text-sm font-bold',
                    i18n.language === lang ? 'bg-brand-primary text-white' : 'bg-brand-gray'
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
