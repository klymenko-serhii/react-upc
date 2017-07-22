import api from '../services/api';
import { FETCH_COMMENTS, FETCH_COMMENTS_POST, CLEAR_COMMENTS } from './types';

export const fetchComments = postId => async dispatch => {
    try {
        const { data: comments } = await api.getCommentsByPost(postId);
        dispatch({ type: FETCH_COMMENTS, payload: comments });
    } catch (err) {
        console.error('actions - comments.js - fetchComments', err);
    }
}

export const fetchCommentsPost = postId => async dispatch => {
    try {
        const { data: post } = await api.getPost(postId);
        dispatch({ type: FETCH_COMMENTS_POST, payload: post });
    } catch (err) {
        console.error('actions - comments.js - fetchComments', err);
    }
}

export const clearComments = () => ({ type: CLEAR_COMMENTS });
