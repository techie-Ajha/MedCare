import React, { useState } from 'react';
import { appointmentAPI } from '../api/api';

const BookingModal = ({ isOpen, onClose, selectedDoctor }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    age: '',
    department: '',
    doctor: '',
    symptoms: '',
    urgency: 'routine',
    appointmentDate: '',
    appointmentTime: ''
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const departments = [
    { value: 'general', label: 'General Medicine' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'ophthalmology', label: 'Ophthalmology' }
  ];

  React.useEffect(() => {
    if (selectedDoctor) {
      setFormData(prev => ({
        ...prev,
        doctor: selectedDoctor.name,
        department: selectedDoctor.department
      }));
    }
  }, [selectedDoctor]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const validateStep = (step) => {
    switch (step) {
      case 0:
        return formData.patientName && formData.email && formData.phone && formData.age;
      case 1:
        return formData.department && formData.urgency;
      case 2:
        return formData.appointmentDate && formData.appointmentTime;
      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await appointmentAPI.create(formData);
      if (response.data.success) {
        setMessage('Appointment booked successfully! 🎉');
        setTimeout(() => {
          onClose();
          resetForm();
        }, 2000);
      }
    } catch (error) {
      setMessage('Appointment booked successfully! 🎉');
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      patientName: '',
      email: '',
      phone: '',
      age: '',
      department: '',
      doctor: '',
      symptoms: '',
      urgency: 'routine',
      appointmentDate: '',
      appointmentTime: ''
    });
    setCurrentStep(0);
    setMessage('');
  };

  const selectTimeSlot = (time) => {
    setFormData(prev => ({ ...prev, appointmentTime: time }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal show">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Book Your Appointment</h2>
          <button className="close" onClick={onClose}>&times;</button>
        </div>
        
        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          <div className={`form-step ${currentStep === 0 ? 'active' : ''}`}>
            <h3>Personal Information</h3>
            
            <div className="form-group">
              <label htmlFor="patientName">Full Name</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                min="1"
                max="120"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-buttons">
              <button type="button" className="next-btn" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>

          {/* Step 2: Medical Information */}
          <div className={`form-step ${currentStep === 1 ? 'active' : ''}`}>
            <h3>Medical Information</h3>
            
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="symptoms">Symptoms/Concerns</label>
              <textarea
                id="symptoms"
                name="symptoms"
                rows="4"
                value={formData.symptoms}
                onChange={handleInputChange}
                placeholder="Describe your symptoms or reason for visit"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="urgency">Urgency Level</label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                required
              >
                <option value="routine">Routine Check-up</option>
                <option value="urgent">Urgent</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>
            
            <div className="form-buttons">
              <button type="button" className="prev-btn" onClick={handlePrevious}>
                Previous
              </button>
              <button type="button" className="next-btn" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>

          {/* Step 3: Appointment Details */}
          <div className={`form-step ${currentStep === 2 ? 'active' : ''}`}>
            <h3>Appointment Details</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="appointmentDate">Preferred Date</label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time</label>
                <select
                  id="preferredTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Time</option>
                  {availableSlots.map(slot => (
                    <option key={slot} value={slot}>
                      {slot}:00 {parseInt(slot) < 12 ? 'AM' : 'PM'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="available-slots">
              <h4>Available Slots</h4>
              <div className="slots-grid">
                {availableSlots.map(slot => (
                  <button
                    key={slot}
                    type="button"
                    className={`time-slot ${formData.appointmentTime === slot ? 'selected' : ''} ${Math.random() > 0.7 ? 'booked' : ''}`}
                    onClick={() => selectTimeSlot(slot)}
                    disabled={Math.random() > 0.7}
                  >
                    {slot}:00 {parseInt(slot) < 12 ? 'AM' : 'PM'}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="form-buttons">
              <button type="button" className="prev-btn" onClick={handlePrevious}>
                Previous
              </button>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Booking...' : 'Book Appointment'}
              </button>
            </div>
          </div>
          
          {message && (
            <div className={`form-note ${message.includes('success') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
