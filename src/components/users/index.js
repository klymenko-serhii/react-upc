import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsers } from '../../actions/users';
import User from './user';

const mstp = ({ users }) => ({ users });

const actions = { fetchUsers };

class Users extends Component {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            company: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired).isRequired,
    }
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div className='users' >
                <span className='title' >Users</span>
                {
                    this.props.users.length ? (
                        this.props.users.map(user => (<User key={user.id} user={user} />))
                    ) : null
                }
            </div>
        );
    }
}

export default connect(mstp, actions)(Users);
