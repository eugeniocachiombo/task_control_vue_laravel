import axiosInstace from 'axios';

const axios:any = axiosInstace.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axios;
