import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts, fetchPostsUser, clearPosts } from '../../actions/posts';
import Post from './post';

const mstp = ({ posts }) => ({ posts });

const actions = { fetchPosts, fetchPostsUser, clearPosts };

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.shape({
            items: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                userId: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                body: PropTypes.string.isRequired,
            })),
            user: PropTypes.shape({
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
            })
        }).isRequired,
    }
    componentDidMount() {
        const { userId } = this.props.match.params;
        this.props.fetchPosts(userId);
        this.props.fetchPostsUser(userId);
    }
    componentWillUnmount() {
        this.props.clearPosts();
    }
    get postsTitle() {
        const { user } = this.props.posts;
        if (user) {
            return (
                <span className='title' >
                    Posts from <strong>{user.name}</strong> <a href={`mailto:${user.email}`} >{user.email}</a>
                </span>
            );
        }
        return <span className='title' >Posts</span>;
    }
    render() {
        return (
            <div>
                {this.postsTitle}
                {
                    this.props.posts.items.length ? (
                        this.props.posts.items.map(post => <Post key={post.id} post={post} />)
                    ) : null
                }
            </div>
        );
    }
}

export default connect(mstp, actions)(Posts);
