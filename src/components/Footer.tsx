import React from 'react';
import { Wind, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    'home', 'about', 'courses', 'experiences', 'events', 
    'instructors', 'gallery', 'testimonials', 'booking', 'contact'
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-6">
              <Wind className="w-8 h-8 text-accent-400 mr-2" />
              <h2 className="text-2xl font-bold">{t('common.schoolName')}</h2>
            </div>
            <p className="text-white/80 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.contactInfo')}</h3>
            <address className="not-italic text-white/80 space-y-3">
              <p>{t('common.address')}</p>
              <p>
                <span className="font-medium text-white">{t('contact.info.emailUs')}:</span><br />
                {t('common.email')}
              </p>
              <p>
                <span className="font-medium text-white">{t('contact.info.callUs')}:</span><br />
                {t('common.phone')}
              </p>
              <p>
                <span className="font-medium text-white">{t('contact.info.hours')}:</span><br />
                {t('contact.info.hoursValue')}
              </p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.newsletter.title')}</h3>
            <p className="text-white/80 mb-4">
              {t('footer.newsletter.description')}
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-r-md transition-colors"
                >
                  {t('footer.newsletter.button')}
                </button>
              </div>
            </form>
            <p className="text-white/60 text-sm">
              {t('footer.newsletter.privacy')}
            </p>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {t('common.schoolName')}. {t('footer.rights')}
          </p>
          <div className="flex space-x-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">{t('footer.policies.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.policies.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.policies.cookies')}</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-accent-500 hover:bg-accent-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;