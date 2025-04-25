import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you as soon as possible.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            Contact <span className="text-accent-500">Us</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or need more information? We're here to help! Reach out to our team.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Contact Information */}
            <div className="md:col-span-2 bg-primary-700 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <p className="text-white/90">+1 (234) 567-8901</p>
                    <p className="text-white/90">+1 (234) 567-8902</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                    <p className="text-white/90">info@waveriders.com</p>
                    <p className="text-white/90">bookings@waveriders.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
                    <p className="text-white/90">
                      123 Coastal Highway, Sunset Beach, CA 94123
                    </p>
                    <p className="text-white/90 mt-2">
                      456 Ocean Drive, Bay Point, CA 94124
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com/waveriders`}
                      className="bg-primary-600 hover:bg-primary-500 p-2 rounded-full transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`/src/assets/icons/${social}.svg`}
                        alt={`${social} icon`}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-primary-600">
                <h4 className="font-semibold text-lg mb-3">Emergency Contact</h4>
                <p className="text-white/90">
                  For urgent matters during sessions:
                </p>
                <p className="text-xl font-bold mt-1">+1 (234) 567-8900</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-3 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                    Full Name
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
                    Email Address
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
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Booking Question">Booking Question</option>
                    <option value="Private Lessons">Private Lessons</option>
                    <option value="Group Rates">Group Rates</option>
                    <option value="Equipment Rental">Equipment Rental</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-primary-600 hover:underline">privacy policy</a> and 
                    consent to being contacted regarding my inquiry.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-bold shadow-lg transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Q:</span> How do I prepare for my first lesson?
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">A:</span> We recommend bringing swimwear, a towel, 
                    sunscreen, and a water bottle. All equipment is provided.
                  </p>
                  
                  <p className="text-gray-700">
                    <span className="font-medium">Q:</span> What if the weather is bad?
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">A:</span> If weather conditions are not suitable, we'll 
                    reschedule your lesson at no additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;