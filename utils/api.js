import axios from 'axios';

import { ENDPOINT } from './keys.json';

const api = axios.create({
    baseURL: ENDPOINT,
});

export default api;