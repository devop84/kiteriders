import React from 'react';
import { instructorsData } from '../utils/data';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Instructors = () => {
  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            Our <span className="text-accent-500">Instructors</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet our team of certified professionals who are passionate about kitesurfing
            and dedicated to helping you learn safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {instructorsData.map((instructor, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-3">
                    {instructor.socialMedia.instagram && (
                      <a
                        href={instructor.socialMedia.instagram}
                        className="bg-white p-2 rounded-full text-primary-600 hover:text-primary-700 hover:bg-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {instructor.socialMedia.facebook && (
                      <a
                        href={instructor.socialMedia.facebook}
                        className="bg-white p-2 rounded-full text-primary-600 hover:text-primary-700 hover:bg-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {instructor.socialMedia.linkedin && (
                      <a
                        href={instructor.socialMedia.linkedin}
                        className="bg-white p-2 rounded-full text-primary-600 hover:text-primary-700 hover:bg-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{instructor.name}</h3>
                <p className="text-accent-500 font-medium mb-3">{instructor.role}</p>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    {instructor.certification}
                  </div>
                  <div className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {instructor.experience}
                  </div>
                </div>
                <p className="text-gray-600">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;