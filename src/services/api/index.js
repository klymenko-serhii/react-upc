import * as users from './users';
import * as posts from './posts';
import * as comments from './comments';

export default {
    ...users,
    ...posts,
    ...comments,
}
