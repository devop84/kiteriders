import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1604876/pexels-photo-1604876.jpeg?auto=compress&cs=tinysrgb&w=1600")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-950/50"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {t('hero.title')}{' '}
            <span className="text-secondary-400">{t('hero.highlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#booking"
              className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-semibold text-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              {t('hero.bookLesson')}
            </a>
            <a
              href="#courses"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-md font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
            >
              {t('hero.exploreCourses')}
            </a>
          </div>
        </div>

        {/* Wave animation */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave">
              <use
                xlinkHref="#wave-path"
                x="50"
                y="0"
                fill="rgba(255, 255, 255, 0.7)"
                className="animate-wave"
              />
              <use
                xlinkHref="#wave-path"
                x="50"
                y="3"
                fill="rgba(255, 255, 255, 0.5)"
                className="animate-wave"
                style={{ animationDelay: '-1s' }}
              />
              <use
                xlinkHref="#wave-path"
                x="50"
                y="6"
                fill="rgba(255, 255, 255, 1)"
                className="animate-wave"
                style={{ animationDelay: '-2s' }}
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;