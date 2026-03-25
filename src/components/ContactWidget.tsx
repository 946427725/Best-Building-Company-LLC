import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ContactWidget = () => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);
  const tooltipTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const whyUsSection = document.getElementById('why-us');
      if (whyUsSection && !hasShownTooltip) {
        const rect = whyUsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          setShowTooltip(true);
          setHasShownTooltip(true);
          
          // Auto hide after 7 seconds
          tooltipTimerRef.current = setTimeout(() => {
            setShowTooltip(false);
          }, 7000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
    };
  }, [hasShownTooltip]);

  return (
    <div className="fixed right-6 bottom-10 z-[9999] flex flex-col items-end gap-4">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute right-20 bottom-4 bg-white text-brand-navy p-4 rounded-2xl shadow-2xl border border-brand-navy/5 min-w-[240px] pointer-events-none"
          >
            <div className="relative">
              <p className="text-sm font-bold leading-tight">
                {t('contactWidget.tooltip')}
              </p>
              {/* Triangle pointer */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-t border-brand-navy/5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Button (Top) */}
      <Link to="/contact">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-2xl transition-transform cursor-pointer"
        >
          <MessageCircle size={20} className="lg:hidden" />
          <MessageCircle size={28} className="hidden lg:block" />
        </motion.div>
      </Link>

      {/* Call Button (Bottom) */}
      <div className="relative">
        {/* Ringing Glow Effects */}
        <div className="absolute inset-0 bg-brand-primary rounded-full animate-ping opacity-20" />
        <div className="absolute -inset-2 bg-brand-primary/10 rounded-full animate-pulse blur-md" />
        
        <Link to="/contact">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => {
              setShowTooltip(true);
              if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
              tooltipTimerRef.current = setTimeout(() => setShowTooltip(false), 5000);
            }}
            className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-2xl z-10 transition-transform animate-[wiggle_1s_ease-in-out_infinite] cursor-pointer"
          >
            <Phone size={20} className="animate-pulse lg:hidden" />
            <Phone size={28} className="animate-pulse hidden lg:block" />
          </motion.div>
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
      `}} />
    </div>
  );
};
