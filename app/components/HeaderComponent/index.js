import React, {Component} from 'react';
import './index.css';

class HeaderCompnent extends Component {
    constructor(){
        super();
    }
    back(){
        if (this.props.back) {
            this.props.history.push(this.props.back);
        }else{
            this.props.history.go(-1);
        }
    }
    render() {
        return (
            <div className="back header-component">
                <i className="icon-return iconfont" onClick={this.back.bind(this)}></i>
                <span>
                    {this.props.title}
                </span>
            </div>
        );
    }
}

export default HeaderCompnent;