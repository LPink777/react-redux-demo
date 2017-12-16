import React, {Component} from 'react';
import './index.css';
class ChooseCity extends Component {
    changeCurrentCity(e){
        this.props.changeCity(e.target.innerHTML)
    }
    render() {
        let citys = [
            '北京',
            '上海',
            '杭州',
            '广州',
            '苏州',
            '深圳',
            '南京',
            '天津',
            '重庆',
            '厦门',
            '武汉',
            '西安'
        ]
        return (
            <div className="chcity">
                <h5>热门城市</h5>
                <div className="ct">
                    {citys.map((item, index) => (
                        <div onClick={this.changeCurrentCity.bind(this)} className="cy" key={index}>{item}</div>
                    ))}
                </div>

            </div>
        );
    }
}

export default ChooseCity;