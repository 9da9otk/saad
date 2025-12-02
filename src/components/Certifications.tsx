import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const certificationsList = t.certifications.items;
  const visibleCertifications = showAll ? certificationsList : certificationsList.slice(0, 7);

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900/80 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">{t.certifications.title}</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t.certifications.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
                {visibleCertifications.map((cert, index) => (
                    <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl flex items-start gap-4 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none"
                    >
                    <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg shrink-0">
                        <Award className="text-emerald-600 dark:text-emerald-500" size={20} />
                    </div>
                    <div>
                        <h3 className="text-slate-800 dark:text-white font-medium text-sm md:text-base leading-snug mb-1">
                        {cert.title}
                        </h3>
                        {cert.issuer !== "—" && (
                            <span className="text-slate-500 dark:text-slate-500 text-xs flex items-center gap-1">
                                <CheckCircle2 size={10} />
                                {cert.issuer}
                            </span>
                        )}
                    </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-white px-8 py-3 rounded-full font-medium border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none transition-colors"
            >
                {showAll ? (
                    <>
                        <span>{t.certifications.showLess}</span>
                        <ChevronUp size={18} />
                    </>
                ) : (
                    <>
                        <span>{t.certifications.showMore} ({certificationsList.length - 7}+)</span>
                        <ChevronDown size={18} />
                    </>
                )}
            </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Certifications;