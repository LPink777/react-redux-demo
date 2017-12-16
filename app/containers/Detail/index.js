import React, {Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent";
import Info from './subpage/Info';
import Comment from './subpage/Comment';
import Buy from "../../components/Buy";
import {connect} from "react-redux";
import * as Actions from "../../actions/collection";
import {bindActionCreators} from "redux";

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            isCollection: false
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let flag = this
            .props
            .collection
            .some(item => item === id);
        if (flag) {
            this.setState({
                isCollection: flag
            })
        }
    }
    checkLogin() {
        if (this.props.userInfo.username) {
            return true;
        }
        return false;
    }
    buy() {
        let flag = this.checkLogin();
        if (flag) {
            this
                .props
                .history
                .push('/user');
        } else {
            this
                .props
                .history
                .push('/login/' + encodeURIComponent('/detail/' + this.props.match.params.id));
        }
    }
    collect() {
        let flag = this.checkLogin();
        if (!flag) {
            this
                .props
                .history
                .push('/login/' + encodeURIComponent('/detail/' + this.props.match.params.id));
        }
        let id = this.props.match.params.id;
        if (this.state.isCollection) {
            // store中移除
            this.props.collections.remove(id);
        } else {
            //添加到store
            this.props.collections.add(id);
        }
        this.setState({
            isCollection: !this.state.isCollection
        });
    }
    render() {
        return (
            <div>
                <HeaderComponent title="商户详情" history={this.props.history}/>
                <Info id={this.props.match.params.id}/>
                <Buy
                    buy={this
                    .buy
                    .bind(this)}
                    collect={this
                    .collect
                    .bind(this)}
                    isCollection={this.state.isCollection}/>
                <Comment id={this.props.match.params.id}/>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            userInfo: state.userInfo, 
            collection: state.collection
        }
    },
    dispatch => {
        return {
            collections: bindActionCreators(Actions, dispatch)
        }
    }
)(Detail);