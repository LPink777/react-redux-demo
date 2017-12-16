import React, { Component } from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from '../../components/Slider/index'
import Ad from "./subpage/ad";
import { connect } from "react-redux";
import List from "./subpage/List";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader history={this.props.history} cityName={this.props.userInfo.city}/>
                <Slider />
                <Ad />
                <List cityName={this.props.userInfo.city}/>
            </div>
        );
    }
}

//取出redux中的城市传递给HOmeHeader组件
export default connect(
    state => {
        return {
            userInfo:state.userInfo
        }
    }
)(Home);
