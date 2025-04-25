import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { coursesData } from '../utils/data';
import { ChevronRight } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('beginner');
  const { t } = useTranslation();

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            {t('courses.title')} <span className="text-accent-500">{t('courses.highlight')}</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('courses.subtitle')}
          </p>
        </div>

        {/* Course Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(coursesData).map((level) => (
            <button
              key={level}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeTab === level
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(level)}
            >
              {t(`courses.levels.${level}`)}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData[activeTab].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {course.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent-500 font-bold text-xl">{course.price}</span>
                  <a
                    href="#booking"
                    className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {t('common.bookNow')} <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "View All" Button */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center px-6 py-3 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-md font-medium transition-colors"
          >
            {t('courses.viewAll')} <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;