import React, {Component} from 'react';
import './index.css';
class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <p>用户名: <span>{this.props.userInfo.username}</span></p>
                <p>城市: <span>{this.props.userInfo.city}</span></p>
            </div>
        );
    }
}

export default UserInfo;