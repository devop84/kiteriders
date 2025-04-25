import React from 'react';
import { Shield, Award, Users, Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            {t('about.title')} <span className="text-accent-500">{t('about.highlight')}</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-primary-700 mb-4">
              {t('about.whyChoose')}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Shield className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    {t('about.features.safety.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('about.features.safety.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                  <Award className="text-secondary-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    {t('about.features.certified.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('about.features.certified.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent-100 p-3 rounded-lg mr-4">
                  <Users className="text-accent-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    {t('about.features.groups.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('about.features.groups.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sand-100 p-3 rounded-lg mr-4">
                  <Wind className="text-sand-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    {t('about.features.locations.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('about.features.locations.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/1655970/pexels-photo-1655970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kitesurfing instructor teaching a student"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;