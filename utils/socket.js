import io from 'socket.io-client';

import { ENDPOINT } from './keys.json';

const socket = io(ENDPOINT);

export default socket;