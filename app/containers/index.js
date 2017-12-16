import React, {Component} from 'react';
import RouterMap from "../routes/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../actions/userInfo';
import * as Types from "../action-types/userInfo";
import { getStorage } from "../local";

class App extends Component {
    constructor() {
        super();
        this.state = {
            done: false
        }
    }

    componentDidMount() {
        // 先在本地查找，是否存储过localstorage名字叫cityName的
        // 1.没有cityName，赋予一个默认值 杭州
        // 2.将当前城市传递到redux
        let city = getStorage('cityName') ? getStorage('cityName'): '杭州';
        this.props.userActions.update({
            city
        })
        this.setState({done: true})
    }

    render() {
        return (
            <div>
                {this.state.done
                    ? <RouterMap/>
                    : <div>loading......
                    </div>}
            </div>
        );
    }
}

export default connect(
    state => ({
        
    }),
    dispatch => {
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App);