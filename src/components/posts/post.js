import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post: { body, title, id, userId } }) => (
    <div className='block'>
        <Link to={`/users/${userId}/posts/${id}/comments`} >{title}</Link>
        <p>{body}</p>
    </div>
);

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        userId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    })
}

export default Post;