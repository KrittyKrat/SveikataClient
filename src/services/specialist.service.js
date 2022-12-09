import axios from 'axios';
import authHeader from './auth-header';

const URL = "https://topgsveikata-a9hb9.ondigitalocean.app/api"

const api = axios.create({
    baseURL: URL,
});

export const getSpecialists = async (institutionId, departmentId) => {
    const res = await api.get(`/institutions/${institutionId}/departments/${departmentId}/specialists`, {headers: authHeader()});
    return res.data;
};

export const getSpecialist = async (institutionId, departmentId, specialistId) => {
    const res = await api.get(`/institutions/${institutionId}/departments/${departmentId}/specialists/${specialistId}`, {headers: authHeader()});
    return res.data;
};

export const addSpecialist = async (institutionId, departmentId, name, surname, age) => {
    const res = await api.post(`/institutions/${institutionId}/departments/${departmentId}/specialists`, {name, surname, age}, {headers: authHeader()});
    return res.data;
};

export const updateSpecialist = async (institutionId, departmentId, specialistId, name, surname, age) => {
    const res = await api.patch(`/institutions/${institutionId}/departments/${departmentId}/specialists/${specialistId}`, {name, surname, age}, {headers: authHeader()});
    return res.data;
};

export const deleteSpecialist = async (institutionId, departmentId, specialistId) => {
    const res = await api.delete(`/institutions/${institutionId}/departments/${departmentId}/specialists/${specialistId}`, {headers: authHeader()});
    return res.data;
};