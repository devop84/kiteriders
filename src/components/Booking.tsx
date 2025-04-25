import React, { useState } from 'react';
import { coursesData } from '../utils/data';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseType: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Booking form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      courseType: '',
      date: '',
      time: '',
      message: '',
    });
  };

  // Flatten courses for the dropdown
  const allCourses = Object.values(coursesData).flat();

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            Book Your <span className="text-accent-500">Session</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to catch some waves? Book your kitesurfing lesson now and start 
            your adventure with our expert instructors.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Booking Information */}
            <div className="bg-primary-700 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Booking Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">How It Works</h4>
                  <ol className="space-y-3 list-decimal list-inside text-white/90">
                    <li>Fill out the booking form with your details</li>
                    <li>We'll contact you to confirm availability</li>
                    <li>Pay a 25% deposit to secure your spot</li>
                    <li>Receive confirmation and preparation instructions</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">What to Bring</h4>
                  <ul className="space-y-2 list-disc list-inside text-white/90">
                    <li>Swimwear</li>
                    <li>Towel</li>
                    <li>Sunscreen</li>
                    <li>Water bottle</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Cancellation Policy</h4>
                  <p className="text-white/90">
                    Free cancellation up to 48 hours before your session. Cancellations 
                    within 48 hours are subject to a 50% fee.
                  </p>
                </div>
                
                <div className="bg-primary-600 p-4 rounded-lg mt-8">
                  <h4 className="text-lg font-semibold mb-2">Need Help?</h4>
                  <p className="text-white/90 mb-3">
                    Contact our booking team for assistance:
                  </p>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+1 (234) 567-8901</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Reserve Your Spot</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>Full Name</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>Email Address</span>
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>Phone Number</span>
                    </div>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+1 (234) 567-8901"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="courseType">
                    <span>Course Type</span>
                  </label>
                  <select
                    id="courseType"
                    name="courseType"
                    value={formData.courseType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a course</option>
                    {allCourses.map((course, index) => (
                      <option key={index} value={course.title}>
                        {course.title} - {course.price}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="date">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Preferred Date</span>
                      </div>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="time">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Preferred Time</span>
                      </div>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select time</option>
                      <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                      <option value="Afternoon (1PM-4PM)">Afternoon (1PM-4PM)</option>
                      <option value="Evening (5PM-7PM)">Evening (5PM-7PM)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Additional Information</span>
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Any special requests or information we should know..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-bold text-lg shadow-lg transition-all transform hover:scale-105 mt-4"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;