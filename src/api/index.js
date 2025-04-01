
import axios from 'axios';

// Base URL for API requests
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create an axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const getCurrentUser = () => api.get('/auth/user');

// Courses API calls
export const getAllCourses = () => api.get('/courses');
export const getCourseById = (id) => api.get(`/courses/${id}`);
export const getCoursesByCategory = (category) => api.get(`/courses/category/${category}`);
export const searchCourses = (query) => api.get(`/courses/search/${query}`);

// Recommendations API calls
export const getRecommendations = (preferences) => api.post('/recommend', preferences);

// User API calls
export const getUserProfile = () => api.get('/users/profile');
export const updateUserInterests = (interests) => api.put('/users/interests', { interests });
export const saveCourse = (courseId) => api.put(`/users/save-course/${courseId}`);
export const removeSavedCourse = (courseId) => api.put(`/users/remove-saved-course/${courseId}`);

export default api;
