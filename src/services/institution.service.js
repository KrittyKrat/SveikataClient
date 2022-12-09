import axios from 'axios';
import authHeader from './auth-header';

const URL = "https://topgsveikata-a9hb9.ondigitalocean.app/api"

const api = axios.create({
    baseURL: URL,
});

const authApi = axios.create({
    baseURL: URL,
    headers: authHeader(),
});

export const getInstitutions = async () => {
    const res = await authApi.get(`/institutions`);
    return res.data;
};