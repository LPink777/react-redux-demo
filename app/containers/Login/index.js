import React, {Component} from 'react';
import {connect} from "react-redux";
import * as Actions from "../../actions/userInfo";
import {bindActionCreators} from "redux";
import HeaderComponent from "../../components/HeaderComponent/index";
import LoginComponent from "../../components/LoginComponent/index";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: false
        }
    }
    componentDidMount() {
        this.checkLogin();
    }
    checkLogin() {
        if (this.props.userInfo.username) {
            this
                .props
                .history
                .push('/user');
        }
        this.setState({login: true});
    }
    // 登录得方法，将用户名存入redux里
    login(username) {
        let info = this.props.userInfo;
        info.username = username;
        this
            .props
            .userActions
            .update(info);
        // 登录成功跳转到用户页
        // 如果是从购买页进入的话再跳回购买页
        if (this.props.match.params.route) {
            this
                .props
                .history
                .push(decodeURIComponent(this.props.match.params.route))
        } else {
            // 如果没有指定跳回哪个页面 默认回到user
            this
                .props
                .history
                .push('/user')
        }
    }

    render() {
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/> {this.state.login
                    ? <LoginComponent login={this.login.bind(this)}/>
                    : <div></div>}
            </div>
        );
    }
}

export default connect(state => {
    return {userInfo: state.userInfo}
}, dispatch => {
    return {
        userActions: bindActionCreators(Actions, dispatch)
    }
})(Login);