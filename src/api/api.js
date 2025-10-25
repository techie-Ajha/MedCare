import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
});

// API endpoints
export const appointmentAPI = {
  create: (data) => api.post('/appointments', data),
  getAll: () => api.get('/appointments'),
  getById: (id) => api.get(`/appointments/${id}`)
};

export const doctorAPI = {
  getAll: () => api.get('/doctors'),
  getByDepartment: (dept) => api.get(`/doctors/department/${dept}`)
};
