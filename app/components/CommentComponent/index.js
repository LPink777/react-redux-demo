import React, { Component } from 'react';
import CommentItem from "./CommentItem/index";

class CommentComponent extends Component {
    render() {
        return (
            <div>
                {this.props.data.map((item,index)=>(
                    <CommentItem data={item} key={index}/>
                ))}
            </div>
        );
    }
}

export default CommentComponent;