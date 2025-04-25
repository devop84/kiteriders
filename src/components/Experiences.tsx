import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wind, Map, Sun, Users } from 'lucide-react';

const Experiences = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experiences.downwind.title'),
      description: t('experiences.downwind.description'),
      image: 'https://images.pexels.com/photos/1655970/pexels-photo-1655970.jpeg',
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: t('experiences.exploration.title'),
      description: t('experiences.exploration.description'),
      image: 'https://images.pexels.com/photos/1192454/pexels-photo-1192454.jpeg',
      icon: <Map className="w-6 h-6" />
    },
    {
      title: t('experiences.sunset.title'),
      description: t('experiences.sunset.description'),
      image: 'https://images.pexels.com/photos/1170807/pexels-photo-1170807.jpeg',
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: t('experiences.group.title'),
      description: t('experiences.group.description'),
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            {t('experiences.title')} <span className="text-accent-500">{t('experiences.highlight')}</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('experiences.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                  {experience.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {experience.title}
                </h3>
                <p className="text-gray-600">
                  {experience.description}
                </p>
                <a
                  href="#booking"
                  className="inline-block mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {t('experiences.bookNow')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;