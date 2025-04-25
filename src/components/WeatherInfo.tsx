import React from 'react';
import { Wind, Droplets, Thermometer, Clock } from 'lucide-react';

const WeatherInfo = () => {
  return (
    <section id="weather" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            Weather & <span className="text-accent-500">Conditions</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Check out the current and forecasted conditions for our kitesurfing locations
            to plan your sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Current Conditions */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-primary-700 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Current Conditions</h3>
              <p className="text-white/80">Sunset Beach, Main Bay</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  {/* This would be a weather icon in a real app */}
                  <div className="text-6xl mr-4">☀️</div>
                  <div>
                    <span className="text-4xl font-bold text-gray-800">24°C</span>
                    <p className="text-gray-600">Sunny, Clear Skies</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-500 flex items-center justify-end">
                    <Clock className="w-4 h-4 mr-1" /> Updated: 10:30 AM
                  </p>
                  <p className="text-accent-500 font-bold mt-1">Excellent Conditions</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center text-primary-700 mb-2">
                    <Wind className="w-5 h-5 mr-2" />
                    <h4 className="font-semibold">Wind</h4>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">18-22 knots</p>
                  <p className="text-gray-600">Direction: N/NE</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center text-secondary-700 mb-2">
                    <Droplets className="w-5 h-5 mr-2" />
                    <h4 className="font-semibold">Water</h4>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">22°C</p>
                  <p className="text-gray-600">Waves: 0.5-1m</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Forecast */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-primary-700 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">5-Day Forecast</h3>
              <p className="text-white/80">Plan your kitesurfing sessions</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { day: 'Today', temp: '24°C', wind: '18-22 knots', icon: '☀️', conditions: 'Excellent' },
                  { day: 'Tomorrow', temp: '23°C', wind: '15-20 knots', icon: '🌤️', conditions: 'Very Good' },
                  { day: 'Wednesday', temp: '22°C', wind: '12-15 knots', icon: '⛅', conditions: 'Good' },
                  { day: 'Thursday', temp: '25°C', wind: '20-25 knots', icon: '☀️', conditions: 'Excellent' },
                  { day: 'Friday', temp: '21°C', wind: '10-12 knots', icon: '🌥️', conditions: 'Fair' },
                ].map((day, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{day.icon}</span>
                      <div>
                        <p className="font-medium text-gray-800">{day.day}</p>
                        <p className="text-gray-600">{day.temp}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-right mr-4">
                        <p className="font-medium text-gray-800">{day.wind}</p>
                        <p className={`font-medium ${
                          day.conditions === 'Excellent' ? 'text-accent-500' :
                          day.conditions === 'Very Good' ? 'text-secondary-500' :
                          day.conditions === 'Good' ? 'text-primary-500' :
                          'text-gray-500'
                        }`}>{day.conditions}</p>
                      </div>
                      <Wind className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Map */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-primary-700 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Our Locations</h3>
            <p className="text-white/80">Find us at these prime kitesurfing spots</p>
          </div>
          
          <div className="p-6">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
              {/* In a real application, this would be an actual map */}
              <div className="h-full w-full flex items-center justify-center bg-gray-100">
                <p className="text-gray-500 text-lg">Interactive Map Would Be Here</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-lg text-primary-700 mb-2">Sunset Beach Location</h4>
                <p className="text-gray-600 mb-3">
                  123 Coastal Highway, Sunset Beach, CA 94123
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Operating Hours:</span> 9 AM - 7 PM daily
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> +1 (234) 567-8901
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-lg text-primary-700 mb-2">Bay Point Location</h4>
                <p className="text-gray-600 mb-3">
                  456 Ocean Drive, Bay Point, CA 94124
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Operating Hours:</span> 8 AM - 6 PM daily
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> +1 (234) 567-8902
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;