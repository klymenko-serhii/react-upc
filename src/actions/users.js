import api from '../services/api';
import { FETCH_USERS } from './types';

export const fetchUsers = () => async dispatch => {
    try {
        const { data: users } = await api.getUsers();
        dispatch({ type: FETCH_USERS, payload: users });
    } catch (err) {
        console.error('actions - users.js - fetchUsers', err);
    }
}
