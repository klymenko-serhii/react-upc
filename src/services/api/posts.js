import axios from 'axios';
import { BACKEND_URL } from '../config';

export const getPostsByUser = userId => {
    return axios(`${BACKEND_URL}/posts?userId=${userId}`);
}

export const getPost = postId => {
    return axios(`${BACKEND_URL}/posts/${postId}`);
}
