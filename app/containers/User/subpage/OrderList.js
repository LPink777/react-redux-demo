import React, {Component} from 'react';
import {getOrderList,postComment} from "../../../fetch/orderlist/index"
import OrderListComponent from "../../../components/OrderListComponent/index";

class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        getOrderList(this.props.username)
            .then(res => res.json())
            .then(data => {
                this.setState({data});
            })
    }
    confirmComment(id,comment,callback){  //需要参数：内容，商户id，callback
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            if (data.mes === 'ok') {
                callback();
            }
        })
    }
    
    render() {
        return (
            <div>
                {this.state.data.length
                    ? <OrderListComponent confirmComment={this.confirmComment.bind(this)} data={this.state.data}/>
                    : <div>isloading ......</div>
}
            </div>
        );
    }
}

export default OrderList;