import React, {Component} from 'react';
import './index.css';
class Buy extends Component {
    buy() {
        this
            .props
            .buy();
    }
    collection(){
        this.props.collect();
    }
    render() {
        return (
            <div className="btn">
                <button onClick={this.collection.bind(this)}>{this.props.isCollection
                        ? '已收藏'
                        : '收藏'}</button>
                <button onClick={this
                    .buy
                    .bind(this)}>购买</button>
            </div>
        );
    }
}

export default Buy;