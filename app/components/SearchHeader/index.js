import React, { Component } from 'react';
import SearchInput from "../SearchInput";
import './index.css';
class SearchHeader extends Component {
    back(){
        this.props.history.go(-1);
    }
    render() {
        return (
            <div className="back search-header">
                <i className="iconfont icon-return" onClick={this.back.bind(this)}></i>
                <SearchInput fn={this.props.fn} value={this.props.value}/>
            </div>
        );
    }
}

export default SearchHeader; 