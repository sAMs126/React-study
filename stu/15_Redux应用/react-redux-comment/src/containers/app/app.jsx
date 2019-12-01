import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentAdd from '../../component/comment-add/comment-add';
import CommentList from '../../component/comment-list/comment-list';
import { addComment, deleteComment } from '../../redux/actions';

class App extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired
    };

    // 模拟异步 AJAX 请求
    componentDidMount() {
        // 获取数据
        setTimeout(() => {
            const comments = [
                { username: 'Tom', content: 'heroic crab mam' },
                { username: 'Mack', content: 'mal dual swig' }
            ];
            // 更新状态
            this.setState({ comments });
        }, 1000);
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
        deleteComment
    }
)(App);
