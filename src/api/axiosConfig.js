import axios from 'axios';

export const axiosUnprotected = axios.create({
  baseURL: 'http://134.209.83.118:8000',
  headers: { 'Content-Type': 'application/json' }
});

axiosUnprotected.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const axiosProtected = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: { 'Content-Type': 'application/json' }
});

const axiosRefresh = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: { 'Content-Type': 'application/json' }
});

// Add a request interceptor
axiosProtected.interceptors.request.use((config) => {
  // add token before request is sent
  const token = localStorage.getItem('token');
  const newConfig = config;
  if (token) newConfig.headers.Authorization = `Token ${token}`;

  return newConfig;
});

export {
  axiosProtected,
  axiosRefresh
};

export default axiosUnprotected;
