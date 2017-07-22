import { FETCH_COMMENTS, FETCH_COMMENTS_POST, CLEAR_COMMENTS } from '../actions/types';

const initialState = {
    items: [],
    post: null,
};

const comments = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS: {
            return {
                ...state,
                items: action.payload
            };
        }
        case FETCH_COMMENTS_POST: {
            return {
                ...state,
                post: action.payload
            };
        }
        case CLEAR_COMMENTS: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default comments;
