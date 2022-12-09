import axios from 'axios';
import authHeader from './auth-header';

const URL = "https://topgsveikata-a9hb9.ondigitalocean.app/api"

const api = axios.create({
    baseURL: URL,
});

export const getDepartments = async (institutionId) => {
    const res = await api.get(`/institutions/${institutionId}/departments`, {headers: authHeader()});
    return res.data;
};

export const getDepartment = async (institutionId, departmentId) => {
    const res = await api.get(`/institutions/${institutionId}/departments/${departmentId}`, {headers: authHeader()});
    return res.data;
};

export const addDepartment = async (institutionId, name, description) => {
    const res = await api.post(`/institutions/${institutionId}/departments`, {name, description}, {headers: authHeader()});
    return res.data;
};

export const updateDepartment = async (institutionId, departmentId, name, description) => {
    const res = await api.put(`/institutions/${institutionId}/departments/${departmentId}`, {name, description}, {headers: authHeader()});
    return res.data;
};

export const deleteDepartment = async (institutionId, departmentId) => {
    const res = await api.delete(`/institutions/${institutionId}/departments/${departmentId}`, {headers: authHeader()});
    return res.data;
};