import axios from 'axios';
import authHeader from './auth-header';

const URL = "https://topgsveikata-a9hb9.ondigitalocean.app/api"

const api = axios.create({
    baseURL: URL,
});

export const getVisits = async () => {
    const res = await api.get(`/visits`, {headers: authHeader()});
    return res.data;
};

export const getUserVisits = async (userId) => {
    const res = await api.get(`/users/${userId}/visits`, {headers: authHeader()});
    return res.data;
};

export const getVisit = async (userId, visitId) => {
    const res = await api.get(`/users/${userId}/visits/${visitId}`, {headers: authHeader()});
    return res.data;
};

export const updateVisit = async (userId, visitId, description, specialistID) => {
    const res = await api.put(`/users/${userId}/visits/${visitId}`, { description, specialistID },  {headers: authHeader()});
    return res.data;
};

export const addVisit = async (userId, description, specialistID) => {
    const res = await api.post(`/users/${userId}/visits`, { description, specialistID } , {headers: authHeader()});
    return res.data;
};

export const removeVisit = async (userId, visitId) => {
    const res = await api.delete(`/users/${userId}/visits/${visitId}`, {headers: authHeader()});
    return res.data;
};