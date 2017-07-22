import { FETCH_POSTS, FETCH_POSTS_USER, CLEAR_POSTS } from '../actions/types';

const initialState = {
    items: [],
    user: null,
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS: {
            return {
                ...state,
                items: action.payload,
            };
        }
        case FETCH_POSTS_USER: {
            return {
                ...state,
                user: action.payload,
            };
        }
        case CLEAR_POSTS: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default posts;
