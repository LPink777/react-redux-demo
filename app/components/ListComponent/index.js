import React, { Component } from 'react';
import ListItem from "./ListItem/";
import './index.css';
class ListComponent extends Component {
    render() {
        return (
            <div className='lc'>
                {this.props.data.map((item,index)=>(
                    <ListItem key={index} data={item}/>
                ))}
            </div>
        );
    }
}

export default ListComponent;