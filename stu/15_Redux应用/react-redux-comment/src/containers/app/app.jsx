import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentAdd from '../../component/comment-add/comment-add';
import CommentList from '../../component/comment-list/comment-list';
import { addComment, deleteComment, getComments } from '../../redux/actions';

class App extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired
    };

    // 模拟异步 AJAX 请求
    componentDidMount() {
        // 获取数据
        this.props.getComments();
    }

    render() {
        const { comments, addComment, deleteComment } = this.props;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={addComment} />
                    <CommentList comments={comments} deleteComment={deleteComment} />
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({
        comments: state // 代指 state 就是 comments 数组
    }),
    {
        addComment,
        deleteComment,
        getComments
    }
)(App);
