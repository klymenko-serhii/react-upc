import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user: { id, name, email, company: { name: companyName } } }) => (
    <div className='block'>
        <Link to={`/users/${id}/posts`} >{name}</Link>
        <span>email: <a href={`mailto:${email}`} >{email}</a></span>
        <span>{companyName}</span>
    </div>
);

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}

export default User;
