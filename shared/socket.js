import io from 'socket.io-client';

const ENDPOINT = 'http://192.168.42.204:5000/';

const socket = io(ENDPOINT);

export default socket;