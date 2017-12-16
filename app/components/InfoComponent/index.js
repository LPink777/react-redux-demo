import React, {Component} from 'react';
import Star from "../../components/Star/index";
import './index.css';

class InfoComponent extends Component {
    render() {
        let {
            img,
            star,
            subTitle,
            title,
            price,
            desc
        } = this.props.data
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img}/>
                    <div className="info-t">
                        <h2>{title}</h2>
                        <div className="info-star">
                            <Star count={star}/>
                            <p>￥{price}</p>
                        </div>
                        <p className="t">{subTitle}</p>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="info-bot" 
                    dangerouslySetInnerHTML={{
                    __html: desc
                }}></div>
            </div>
        );
    }
}

export default InfoComponent;