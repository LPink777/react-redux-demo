import React, {Component} from 'react';
import './index.css';
class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            val: ''
        };
    }
    login() {
        // 调用登陆方法
        this.props.login(this.state.val)
    }
    inputChange(e) {
        this.setState({val: e.target.value});
    }
    render() {
        return (
            <div className="login-component">
                <input
                    type="text"
                    onChange={this
                    .inputChange
                    .bind(this)}
                    value={this.state.val}/>
                <button
                    onClick={this
                    .login
                    .bind(this)}>Login</button>
            </div>
        );
    }
}

export default LoginComponent;