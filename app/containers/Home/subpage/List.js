import React, {Component} from 'react';
import {getList} from "../../../fetch/home/";
import ListComponent from "../../../components/ListComponent";
import LoadMore from "../../../components/LoadMore";

class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: true,
            page: 0,
            isLoading: true
        }
    }
    // 处理成功后的逻辑
    processData(result) {
        result
            .then(res => res.json())
            .then(({hasMore, data}) => {
                this.setState({
                    hasMore: true,
                    data: this
                        .state
                        .data
                        .concat(data),
                    isLoading:false
                })
            })
    }

    loadMore() {
        console.log('loading more ......')
        const city = this.props.cityName;
        this.setState({
            page: this.state.page + 1,
            isLoading:true      // 每次加载更多是状态为 true
        }, () => this.processData(getList(city, this.state.page)))
    }

    componentDidMount() {
        const city = this.props.cityName;
        this.processData(getList(city, 0));
    }

    render() {
        return (
            <div>
                {this.state.data.length
                    ? <ListComponent data={this.state.data}/>
                    : <div>isLoading</div>}
                <LoadMore
                    hasMore={this.state.hasMore}
                    loadMore={this
                    .loadMore
                    .bind(this)} isLoading={this.state.isLoading}/>
            </div>
        );
    }
}

export default List;