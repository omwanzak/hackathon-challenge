import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000', // Express backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API
export const login = (email, password) =>
  api.post('/auth/login', { email, password });

// Stock API
export const getStock = () =>
  api.get('/stock');

// Requisitions API
export const getRequisitions = () =>
  api.get('/requisitions');

// Example interceptor for auth token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;