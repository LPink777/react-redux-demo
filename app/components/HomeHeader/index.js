import React, {Component} from 'react';
import './index.css';
import {Link} from "react-router-dom";
import SearchInput from "../SearchInput";

class HomeHeader extends Component {
    toSearch(value){
        this.props.history.push('/search/all/'+value);
    }
    render() {
        return (
            <div className="home-header back">
                <div className="city">
                    <Link to="/city">
                        {this.props.cityName}
                        <i className="iconfont icon-unfold"></i>
                    </Link>
                </div>
                <div className="search">
                    <i className="iconfont icon-sousuo"></i>
                    <SearchInput value="" fn={this.toSearch.bind(this)}/>
                </div>
                <div className="profile">
                    <Link to="/login">
                        <i className="iconfont icon-people_fill"></i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomeHeader;