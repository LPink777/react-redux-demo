import React, { Component } from 'react';
import OrderListItem from "./OrderListItem/index";

class OrderListComponent extends Component {
    render() {
        return (
            <div>
                <h3 style={{paddingLeft:20,fontSize:18}}>订单列表</h3>
                {this.props.data.map((item,index)=>(
                    <OrderListItem confirmComment={this.props.confirmComment} key={index} data={item}/>
                ))}
            </div>
        );
    }
}

export default OrderListComponent;