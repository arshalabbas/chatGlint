import axios from 'axios';

import { ENDPOINT } from '../global/keys.json';

const api = axios.create({
    baseURL: ENDPOINT,
});

export default api;