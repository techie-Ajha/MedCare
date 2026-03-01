import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import About from './components/About';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openBooking = (doctor = null) => {
    setSelectedDoctor(doctor);
    setIsBookingOpen(true);
  };

  return (
    <>
      <Navbar />
      <Hero onBookAppointment={() => openBooking()} />
      <Services />
      <Doctors onBookAppointment={openBooking} />
      <About />
      <Contact />
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedDoctor={selectedDoctor}
      />
    </>
  );
}

export default App;

