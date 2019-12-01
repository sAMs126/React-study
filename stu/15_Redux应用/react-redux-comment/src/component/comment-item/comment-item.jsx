import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './comment-item.css';

export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    };

    handleClick = () => {
        const { comment, deleteComment, index } = this.props;
        // 提示删除
        if (window.confirm(`确认删除${comment.username}的评论？`))
            // 确定删除
            deleteComment(index);
    };

    render() {
        const { comment } = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <button type="button" className="btn btn-default" onClick={this.handleClick}>
                        删除
                    </button>
                </div>
                <p className="user">
                    <span>{comment.username}</span>
                    <span>说:</span>
                </p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }
}
