import React, { Component } from 'react';
import Star from "../../Star";
import './index.css';

class CommentItem extends Component {
    render() {
        let { username, comment, star } = this.props.data;
        return (
            <div className="cm-item">
                <div>
                    <i className="iconfont icon-people_fill"></i>
                    {username}
                </div>
                <Star count={star}/>
                <div>
                    {comment}
                </div>
            </div>
        );
    }
}

export default CommentItem;