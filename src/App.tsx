import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Experiences from './components/Experiences';
import Events from './components/Events';
import Instructors from './components/Instructors';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import WeatherInfo from './components/WeatherInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Experiences />
        <Events />
        <Instructors />
        <Gallery />
        <Testimonials />
        <Booking />
        <WeatherInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;