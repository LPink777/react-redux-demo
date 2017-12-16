import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.css';
import {Link} from 'react-router-dom';

class Slider extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    render() {
        let opts = {
            continuous: false,
            callback: (index) => {
                this.setState({index: index})
            }
        }
        return (
            <div className="">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i className="iconfont icon-service_fill"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>旅行</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-service_fill"></i>
                                <span>娱乐</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li
                        className={this.state.index == 0
                        ? 'active'
                        : ''}></li>
                    <li
                        className={this.state.index == 1
                        ? 'active'
                        : ''}></li>
                    <li
                        className={this.state.index == 2
                        ? 'active'
                        : ''}></li>
                </ul>
            </div>
        );
    }
}

export default Slider;