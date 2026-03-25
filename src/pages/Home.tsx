import React, { Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  MapPin, 
  Shield, 
  Users, 
  ParkingCircle, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Award,
  Zap,
  PhoneCall
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { BuildingModel } from '../components/BuildingModel';

interface HomeProps {
  progress: number;
}

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const match = value.match(/^(\d+)(.*)$/);
  const numericValue = match ? parseInt(match[1]) : (parseInt(value.replace(/\D/g, '')) || 0);
  const suffix = match ? match[2] : value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const totalFrames = duration * 60;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.floor(end * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
        
        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(timer);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Home({ progress }: HomeProps) {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  
  // Parallax and fade transforms for the hero text
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const heroY = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, isMobile ? 1 : 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, isMobile ? 1 : 0.95]);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* SECTION 1: HERO (3D Building Right, Text Left) */}
      <section className="relative min-h-screen flex items-center pt-40 lg:pt-20 overflow-hidden">
        {/* Background Gradient & Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-primary opacity-5 z-0" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-primary/20 blur-[120px] rounded-full z-0" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-brand-primary/10 blur-[100px] rounded-full z-0" />

        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[600px] order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-4 px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-[11px] lg:text-xs font-black uppercase tracking-[0.2em] mb-10 lg:mb-8 border border-brand-primary/20 shadow-lg shadow-brand-primary/5"
            >
              <Award size={isMobile ? 28 : 14} />
              {t('hero.badge')}
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.2] mb-8 tracking-tighter text-brand-navy">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-brand-navy/60 mb-12 leading-[1.8] font-medium max-w-[540px]">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/projects" className="btn-premium bg-brand-gradient text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-brand-primary/40 hover:scale-[1.05] hover:shadow-brand-primary/60 transition-all active:scale-95 group">
                {t('hero.cta')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="px-10 py-5 rounded-2xl font-bold border-2 border-brand-navy/10 hover:bg-brand-gray hover:border-brand-navy/20 hover:scale-[1.05] transition-all active:scale-95 shadow-lg shadow-black/5 flex items-center justify-center">
                {t('hero.learnMore')}
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="h-[500px] lg:h-[700px] relative order-2 flex items-center justify-center"
          >
            {/* Subtle glow behind building */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/15 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="absolute inset-0 z-0">
              <Canvas shadows camera={{ position: [0, 2, 8], fov: 35 }}>
                <Suspense fallback={null}>
                  <BuildingModel progress={progress} />
                </Suspense>
              </Canvas>
            </div>
            {/* Soft Shadow under building */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-8 bg-brand-navy/10 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRUST / STATS */}
      <section className="py-32 px-6 bg-brand-gray/30 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">{t('stats.title')}</h2>
            <p className="text-brand-navy/60 font-medium">{t('stats.subtitle')}</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Building2, label: t('stats.apartments'), value: '50+', color: 'bg-blue-500' },
              { icon: Clock, label: t('stats.experience'), value: '10+', color: 'bg-indigo-500' },
              { icon: Users, label: t('stats.trust'), value: '100%', color: 'bg-sky-500' },
              { icon: Shield, label: t('stats.security'), value: '24/7', color: 'bg-brand-primary' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={revealVariants}
                className="bg-white p-8 rounded-[32px] shadow-xl shadow-brand-navy/5 border border-brand-navy/5 group transition-all hover-lift"
              >
                <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={28} />
                </div>
                <h3 className="text-4xl font-bold text-brand-navy mb-2">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-sm text-brand-navy/50 uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section id="why-us" className="py-32 px-6 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">{t('whyUs.title')}</h2>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">
                {t('whyUs.subtitle')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: t('whyUs.modern').split(' — ')[0], desc: t('whyUs.modern').split(' — ')[1] },
                  { icon: Shield, title: t('whyUs.security').split(' — ')[0], desc: t('whyUs.security').split(' — ')[1] },
                  { icon: MapPin, title: t('whyUs.location').split(' — ')[0], desc: t('whyUs.location').split(' — ')[1] },
                  { icon: ParkingCircle, title: t('whyUs.parking').split(' — ')[0], desc: t('whyUs.parking').split(' — ')[1] },
                ].map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm text-white/40">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="rounded-[40px] overflow-hidden shadow-2xl shadow-black/50 aspect-square hover-zoom"
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Architecture" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-brand-primary p-8 rounded-3xl shadow-2xl hidden md:block"
              >
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">{t('projects.subtitle').split(', ')[0]}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROJECT SHOWCASE */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">{t('projects.title')}</h2>
              <p className="text-lg text-brand-navy/60">{t('projects.subtitle')}</p>
            </div>
            <Link to="/projects" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm group">
              {t('projects.viewAll')} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: t('projects.residence').split(' — ')[0], category: t('projects.residence').split(' — ')[1], img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000' },
              { title: t('projects.modern').split(' — ')[0], category: t('projects.modern').split(' — ')[1], img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000' },
              { title: t('projects.skyline').split(' — ')[0], category: t('projects.skyline').split(' — ')[1], img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000' },
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={revealVariants}
              >
                <Link
                  to="/projects"
                  className="group relative block rounded-[32px] overflow-hidden aspect-[3/4] cursor-pointer hover-lift"
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.span 
                      className="inline-block px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4"
                    >
                      {project.category}
                    </motion.span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-sm font-medium group-hover:text-white transition-colors">
                      {t('projects.details')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-primary transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-navy/10 group"
            >
              {t('projects.viewAll')}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: FEATURES SPLIT LAYOUT */}
      <section className="py-32 px-6 bg-brand-gray/20">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-4xl font-bold text-brand-navy mb-6">{t('smartHome.title')}</h3>
              <p className="text-lg text-brand-navy/60 mb-8 leading-relaxed">
                {t('smartHome.desc')}
              </p>
              <div className="space-y-4">
                {(t('smartHome.features', { returnObjects: true }) as string[]).map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 font-bold text-brand-navy"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="text-brand-primary" size={20} />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="rounded-[40px] overflow-hidden shadow-2xl hover-zoom"
            >
              <img src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000" alt="Smart Home" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:order-2 rounded-[40px] overflow-hidden shadow-2xl hover-zoom"
            >
              <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000" alt="Garden" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:order-1"
            >
              <h3 className="text-4xl font-bold text-brand-navy mb-6">{t('lifestyle.title')}</h3>
              <p className="text-lg text-brand-navy/60 mb-8 leading-relaxed">
                {t('lifestyle.desc')}
              </p>
              <div className="space-y-4">
                {(t('lifestyle.features', { returnObjects: true }) as string[]).map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 font-bold text-brand-navy"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="text-brand-primary" size={20} />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-brand-navy rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-brand-gradient opacity-10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-brand-primary rounded-full text-xs font-black uppercase tracking-widest mb-8"
              >
                <PhoneCall size={14} />
                {t('cta.badge')}
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  to="/contact"
                  className="btn-premium bg-brand-primary text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-primary/30 relative overflow-hidden group hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white rounded-2xl"
                  />
                  <span className="relative z-10">{t('cta.get')}</span>
                </Link>
                <Link 
                  to="/projects"
                  className="bg-white/10 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all backdrop-blur-md hover:scale-105 active:scale-95 flex items-center justify-center"
                >
                  {t('cta.view')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
