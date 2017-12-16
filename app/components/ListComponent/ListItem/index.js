import React, {Component} from 'react';
import './index.css';
import {Link} from "react-router-dom";

class ListItem extends Component {
    render() {
        let {
            img,
            title,
            subTitle,
            price,
            distance,
            number,
            id
        } = this.props.data;
        return (
            <Link to={'/detail/'+id}>
                <div className="list-items">
                    <div className="img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="lr">
                        <h1>{title}</h1>
                        <p>{subTitle}</p>
                        <div className="lrc">
                            <strong>￥{price}</strong>
                            <span>number:{number}</span>
                        </div>
                        <span className="distance">distance:{distance}</span>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ListItem;