import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'al-barakat',
      title: t('projects.residence').split(' — ')[0],
      location: `Yakkasaray tumani, Toshkent`,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000',
      status: t('projectsPage.ongoing'),
      price: `$55,000 ${t('projectsPage.from')}`,
    },
    {
      id: 'best-residence',
      title: t('projects.modern').split(' — ')[0],
      location: `Mirzo Ulug'bek tumani, Toshkent`,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000',
      status: t('projectsPage.sale'),
      price: `$70,000 ${t('projectsPage.from')}`,
    },
    {
      id: 'sky-tower',
      title: t('projects.skyline').split(' — ')[0],
      location: `Yunusobod tumani, Toshkent`,
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000',
      status: t('projectsPage.upcoming'),
      price: t('projectsPage.soon'),
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">{t('projectsPage.title')}</h1>
            <p className="text-brand-navy/60 text-lg max-w-xl">
              {t('projectsPage.desc')}
            </p>
          </div>
          <div className="flex gap-4">
            {[t('projectsPage.all'), t('projectsPage.ongoing'), t('projectsPage.ready')].map((filter) => (
              <button key={filter} className="px-6 py-2 rounded-full border border-brand-gray font-medium hover:bg-brand-gray transition-colors">
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer hover-lift"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 hover-zoom">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest z-10">
                  {project.status}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                  <Link 
                    to={`/projects/${project.id}`}
                    className="w-full bg-white text-brand-navy py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                  >
                    {t('projects.details')}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{project.title}</h3>
              <div className="flex items-center gap-2 text-brand-navy/60 mb-4">
                <MapPin size={16} />
                <span className="text-sm">{project.location}</span>
              </div>
              <p className="text-brand-primary font-bold text-lg">{project.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
