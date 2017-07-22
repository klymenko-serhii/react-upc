import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import comments from './comments';

export default combineReducers({
    users,
    posts,
    comments,
});
