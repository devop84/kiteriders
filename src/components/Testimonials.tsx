import React, { useState } from 'react';
import { testimonialsData } from '../utils/data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our <span className="text-accent-400">Students</span> Say
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Hear from our community of kitesurfers who've learned with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-accent-400">
                <img
                  src={testimonialsData[currentIndex].avatar}
                  alt={testimonialsData[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {testimonialsData[currentIndex].name}
                </h3>
                <p className="text-white/80">{testimonialsData[currentIndex].location}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonialsData[currentIndex].rating
                          ? 'text-accent-400 fill-accent-400'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-lg md:text-xl italic text-white/90 mb-6">
              "{testimonialsData[currentIndex].quote}"
            </blockquote>

            <p className="text-white/80">
              {testimonialsData[currentIndex].course} • {testimonialsData[currentIndex].date}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-accent-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;