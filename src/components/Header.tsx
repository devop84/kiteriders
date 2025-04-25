import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    'home', 'about', 'courses', 'experiences', 'events', 
    'instructors', 'gallery', 'testimonials', 'booking', 'contact'
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
              {t('common.schoolName')}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-300'
                }`}
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="#booking"
              className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium shadow-md transition-all transform hover:scale-105"
            >
              {t('common.bookNow')}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 animate-in fade-in slide-in-from-top">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-800 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
              <a
                href="#booking"
                className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium text-center shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.bookNow')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;