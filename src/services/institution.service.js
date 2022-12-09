import axios from 'axios';
import authHeader from './auth-header';

const URL = "https://topgsveikata-a9hb9.ondigitalocean.app/api"

const api = axios.create({
    baseURL: URL,
});

export const getInstitutions = async () => {
    const res = await api.get(`/institutions`, {headers: authHeader()});
    return res.data;
};

export const getInstitution = async (institutionId) => {
    const res = await api.get(`/institutions/${institutionId}`, {headers: authHeader()});
    return res.data;
};

export const addInstitution = async (name, adress) => {
    const res = await api.post(`/institutions`, {name, adress}, {headers: authHeader()});
    return res.data;
};

export const updateInstitution = async (institutionId, name, adress) => {
    const res = await api.put(`/institutions/${institutionId}`, {name, adress}, {headers: authHeader()});
    return res.data;
};

export const deleteInstitution = async (institutionId) => {
    const res = await api.delete(`/institutions/${institutionId}`, {headers: authHeader()});
    return res.data;
};