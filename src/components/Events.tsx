import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Events = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: t('events.competition.title'),
      date: '2024-06-15',
      location: t('events.competition.location'),
      description: t('events.competition.description'),
      image: 'https://images.pexels.com/photos/1192053/pexels-photo-1192053.jpeg',
      capacity: '50'
    },
    {
      title: t('events.workshop.title'),
      date: '2024-07-01',
      location: t('events.workshop.location'),
      description: t('events.workshop.description'),
      image: 'https://images.pexels.com/photos/1718523/pexels-photo-1718523.jpeg',
      capacity: '20'
    },
    {
      title: t('events.beachParty.title'),
      date: '2024-07-15',
      location: t('events.beachParty.location'),
      description: t('events.beachParty.description'),
      image: 'https://images.pexels.com/photos/1653414/pexels-photo-1653414.jpeg',
      capacity: '100'
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            {t('events.title')} <span className="text-accent-500">{t('events.highlight')}</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{t('events.capacity')}: {event.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{t('events.registration')}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <button className="w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  {t('events.register')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;