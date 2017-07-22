import axios from 'axios';
import { BACKEND_URL } from '../config';

export const getUsers = () => {
    return axios(`${BACKEND_URL}/users`);
}

export const getUser = userId => {
    return axios(`${BACKEND_URL}/users/${userId}`);
}
