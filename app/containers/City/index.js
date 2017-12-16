import React, { Component } from 'react';
import HeaderCompnent from "../../components/HeaderComponent/index";
import CurrentCity from "../../components/CurrentCity/index";
import ChooseCity from "../../components/ChooseCity/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions/userInfo";

class City extends Component {
    changeCity(city){
        let oldInfo = this.props.userInfo;
        oldInfo.city = city;
        this.props.userActions.update(oldInfo);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <HeaderCompnent title="选择城市" history={this.props.history}/>
                <CurrentCity cityName={this.props.userInfo.city}/>
                <ChooseCity history={this.props.history} changeCity={this.changeCity.bind(this)}/>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            userInfo:state.userInfo
        }
    },
    dispatch => {
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(City);