import axios from 'axios';
import {SERVER_API} from '../Constants';

export const ServerAxios = axios.create({
    baseURL: `${SERVER_API}`,
    timeout: 90000,
});

ServerAxios.interceptors.request.use(async (config) => {
    return config;
}, function (error) {
    return Promise.reject(error);
});

ServerAxios.interceptors.response.use(async function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default ServerAxios;
