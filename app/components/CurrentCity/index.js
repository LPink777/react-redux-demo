import React, { Component } from 'react';
import './index.css';
class CurrentCity extends Component {
    render() {
        return (
            <div className="cityTitle">
                {this.props.cityName}
            </div>
        );
    }
}

export default CurrentCity;