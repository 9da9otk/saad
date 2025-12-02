import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-slate-200 dark:border-slate-900 pb-12">
           <div className="text-center md:text-start">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Saad Fuhaid</h3>
              <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                {t.footer.bio}
              </p>
           </div>
           
           <div className="flex flex-col justify-center items-center gap-4">
              <a href="https://www.linkedin.com/in/s3dsu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="mailto:sa888e@gmail.com" className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">
                <Mail size={20} />
                <span>sa888e@gmail.com</span>
              </a>
              <a href="tel:0571441777" className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">
                <Phone size={20} />
                <span dir="ltr">{t.hero.phone}</span>
              </a>
           </div>

           <div className="flex items-center justify-center md:justify-end">
              <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 px-6 py-2 rounded-lg hover:border-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors shadow-sm dark:shadow-none">
                {t.footer.downloadResume}
              </button>
           </div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-600 text-sm">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;