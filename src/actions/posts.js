import api from '../services/api';
import { FETCH_POSTS, FETCH_POSTS_USER, CLEAR_POSTS } from './types';

export const fetchPosts = userId => async dispatch => {
    try {
        const { data: posts } = await api.getPostsByUser(userId);
        dispatch({ type: FETCH_POSTS, payload: posts });
    } catch (err) {
        console.error('actions - posts.js - fetchPosts', err);
    }
}

export const fetchPostsUser = userId => async dispatch => {
    try {
        const { data: user } = await api.getUser(userId);
        dispatch({ type: FETCH_POSTS_USER, payload: user });
    } catch (err) {
        console.error('actions - posts.js - fetchPostsUser', err);
    }
}

export const clearPosts = () => ({ type: CLEAR_POSTS });
