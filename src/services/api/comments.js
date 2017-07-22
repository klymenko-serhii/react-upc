import axios from 'axios';
import { BACKEND_URL } from '../config';

export const getCommentsByPost = postId => {
    return axios(`${BACKEND_URL}/posts/${postId}/comments`);
}