import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Map, Users, Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t, direction } = useLanguage();
  const experiences = t.experience.items;

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">{t.experience.title}</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical Line */}
          <div className={`absolute top-0 bottom-0 ${direction === 'rtl' ? 'right-4 md:right-1/2 md:-mr-0.5' : 'left-4 md:left-1/2 md:-ml-0.5'} w-0.5 bg-slate-300 dark:bg-slate-700`}></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 
                  ? (direction === 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row') 
                  : (direction === 'rtl' ? 'md:flex-row' : 'md:flex-row-reverse')
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute ${direction === 'rtl' ? 'right-0 md:right-1/2 md:-mr-4' : 'left-0 md:left-1/2 md:-ml-4'} w-8 h-8 bg-white dark:bg-slate-800 border-4 border-emerald-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20`}>
                {index < 3 ? <Building size={14} className="text-emerald-500" /> : index < 6 ? <ShieldCheck size={14} className="text-emerald-500" /> : <Briefcase size={14} className="text-emerald-500" />}
              </div>

              {/* Content Card */}
              <div className={`flex-1 ${direction === 'rtl' ? 'mr-12 md:mr-0' : 'ml-12 md:ml-0'} ${
                index % 2 === 0 
                  ? (direction === 'rtl' ? 'md:pl-12' : 'md:pr-12 text-left md:text-right') 
                  : (direction === 'rtl' ? 'md:pr-12 text-right md:text-left' : 'md:pl-12 text-left')
              }`}>
                <div className={`bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none group hover:bg-slate-50 dark:hover:bg-slate-800 text-start`}>
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wide dir-ltr block mb-1">{exp.period}</span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">{exp.role}</h3>
                  <h4 className="text-slate-600 dark:text-slate-400 text-sm mb-4 font-medium">{exp.company}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;