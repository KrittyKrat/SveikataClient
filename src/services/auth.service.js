import axios from 'axios';
import authHeader from './auth-header';

const URL = "https://topgsveikata-a9hb9.ondigitalocean.app/api"

const api = axios.create({
    baseURL: URL,
});

export const getUser = async (userId) => {
  const res = await api.get(`/users/${userId}`, {headers: authHeader()});
  return res.data;
};

export const login = async (username, password) => {
  const res = await api.post('/tokens/login', {username, password});
  return res.data;
};

export const register = async (username, password, role) => {
  const res = await api.post('/users/register', {username, password, role});
  return res.data;
};

export const refresh = async (token) => {
  const res = await api.put('/tokens', {token});
  return res.data;
};