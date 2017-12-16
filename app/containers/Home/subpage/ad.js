import React, {Component} from 'react';
import {getAd} from '../../../fetch/home/index';
import './index.css';

class Ad extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getAd()
            .then(res => res.json())
            .then(data => {
                this.setState({data})
            })
    }

    render() {
        return (
            <div className="ad">
                <h3>超值特惠</h3>
                <div className='ad-list'>
                {this.state.data.length
                    ? this
                        .state
                        .data
                        .map((item, index) => (
                            <a href={item.link} key={index}>
                                <img src={item.img} title={item.title}/>
                            </a>
                        ))
                    : <div>loading......</div>}
                </div>
                
            </div>
        );
    }
}

export default Ad;