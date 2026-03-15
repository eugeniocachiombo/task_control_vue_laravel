import axiosInstace from 'axios';

const axios:any = axiosInstace.create({
    baseURL: 'https://genioproapi.infinityfreeapp.com/',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axios;
