import React, { Component } from 'react';
import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

export default class App extends Component {
    // 给组件对象指定 state 属性
    state = {
        // comments: [
        //     { username: 'Tom', content: 'heroic crab mam' },
        //     { username: 'Mack', content: 'mal dual swig' }
        // ]
        comments : []
    };

    // 模拟异步 AJAX 请求
    componentDidMount() {
        // 获取数据
        setTimeout(() => {
            const comments = [
            { username: 'Tom', content: 'heroic crab mam' },
            { username: 'Mack', content: 'mal dual swig' }
        ]
        // 更新状态
        this.setState({comments})
        }, 1000);
    }
    

    // 添加评论
    addComment = comment => {
        const { comments } = this.state;
        comments.unshift(comment);
        this.setState({ comments });
    };

    // 删除评论
    deleteComment = index => {
        const { comments } = this.state;
        comments.splice(index, 1);
        this.setState({ comments });
    };

    render() {
        const { comments } = this.state;
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
                    <CommentAdd addComment={this.addComment} />
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        );
    }
}
