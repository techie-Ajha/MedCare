import React, { useState, useEffect } from 'react';
import { doctorAPI } from '../api/api';

const Doctors = ({ onBookAppointment }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await doctorAPI.getAll();
      setDoctors(response.data.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      // Fallback to mock data
      setDoctors([
        {
          _id: '1',
          name: 'Dr. Sarah Johnson',
          specialty: 'Cardiologist',
          department: 'cardiology',
          experience: 15,
          rating: 4.9,
          reviews: 127,
          image: '/doc1.jpg',
          isAvailable: true
        },
        {
          _id: '2',
          name: 'Dr. Michael Chen',
          specialty: 'Neurologist',
          department: 'neurology',
          experience: 12,
          rating: 4.8,
          reviews: 89,
          image: '/doc2.jpg',
          isAvailable: true
        },
        {
          _id: '3',
          name: 'Dr. Emily Davis',
          specialty: 'Pediatrician',
          department: 'pediatrics',
          experience: 10,
          rating: 4.9,
          reviews: 156,
          image: '/doc3.jpg',
          isAvailable: false
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-header">
            <h2>Loading doctors...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-header">
          <h2>Our Expert Doctors</h2>
          <p>Meet our qualified medical professionals</p>
        </div>
        
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div key={doctor._id} className="doctor-card">
              <div className="doctor-image">
                <img 
                  src={doctor.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=2563eb&color=fff&size=300`} 
                  alt={doctor.name}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=2563eb&color=fff&size=300`;
                  }}
                />
                <div className={`availability ${doctor.isAvailable ? 'online' : 'busy'}`}></div>
              </div>
              
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  <span>{doctor.rating} ({doctor.reviews} reviews)</span>
                </div>
                
                <p className="experience">{doctor.experience}+ years experience</p>
                
                <button 
                  className="book-btn"
                  onClick={() => onBookAppointment(doctor)}
                  disabled={!doctor.isAvailable}
                >
                  {doctor.isAvailable ? 'Book Appointment' : 'Not Available'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
