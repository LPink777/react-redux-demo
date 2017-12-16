import React, {Component} from 'react';
import './index.css';
class OrderListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentState: props.data.commentState
        }
    }
    changeCommentState() {
        this.setState({commentState: 1});
    }
    commentCancle(){
        this.setState({commentState: 0});
    }
    commitComment(){
        this.props.confirmComment(this.props.data.id,this.comment.value,this.changeState.bind(this))
    }
    changeState(){
        this.setState({commentState: 2});
    }
    render() {
        let {
            id,
            commentState,
            img,
            count,
            price,
            title
        } = this.props.data;
        return (
            <div>
                <div className="order-list-item">
                    <img src={img} alt=""/>
                    <div className="list-content">
                        <h3>商户:{title}</h3>
                        <span>数量:{count}</span>
                        <span>价格:{price}</span>
                    </div>
                    <div className="order-btn">
                        {this.state.commentState === 0
                            ? <button
                                    onClick={this
                                    .changeCommentState
                                    .bind(this)}>评价</button>
                            : this.state.commentState === 1
                                ? ''
                                : <button className="unselect">已评价</button>}
                    </div>
                </div>
                {this.state.commentState === 1
                    ? <div className="comment-area">
                            <textarea ref={ref=>this.comment = ref} rows="4"></textarea>
                            <div>
                                <button onClick={this.commitComment.bind(this)}>确认评价</button>
                                <button onClick={this.commentCancle.bind(this)}>取消</button>
                            </div>
                        </div>
                    : ''
}
            </div>
        );
    }
}

export default OrderListItem;