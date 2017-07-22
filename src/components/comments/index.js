import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchComments, fetchCommentsPost, clearComments } from '../../actions/comments';
import Comment from './comment';

const mstp = ({ comments }) => ({ comments });

const actions = { fetchComments, fetchCommentsPost, clearComments };

class Comments extends Component {
    static propTypes = {
        comments: PropTypes.shape({
            items: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                postId: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                body: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
            })) ,
            post: PropTypes.shape({ title: PropTypes.string })
        }).isRequired,
    }
    componentDidMount() {
        const { postId } = this.props.match.params;
        this.props.fetchComments(postId);
        this.props.fetchCommentsPost(postId);
    }
    componentWillUnmount() {
        this.props.clearComments();
    }
    get commentsTitle() {
        const { post } = this.props.comments;
        if (post) {
            return <span className='title'>Comments on <strong>{post.title}</strong></span>
        }
        return <span className='title'>Comments</span>
    }
    render() {
        return (
            <div>
                {this.commentsTitle}
                {
                    this.props.comments.items.length ? (
                        this.props.comments.items.map(comment => (
                            <Comment key={comment.id} comment={comment} />
                        ))
                    ) : null
                }
            </div>
        );
    }
}

export default connect(mstp, actions)(Comments);
