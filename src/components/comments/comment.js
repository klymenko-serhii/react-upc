import React from 'react';
import PropTypes from 'prop-types';
    
const Comment = ({ comment: { name, body, email } }) => (
    <div className='block'>
        <span>{name}</span>
        <p>{body}</p>
        <a href={`mailto:${email}`} >{email}</a>
    </div>
);

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        postId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })
}

export default Comment;
