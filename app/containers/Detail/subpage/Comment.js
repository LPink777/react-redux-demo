import React, {Component} from 'react';
import {getComment} from "../../../fetch/detail/index";
import CommentComponent from "../../../components/CommentComponent";
import LoadMore from "../../../components/LoadMore";

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            data: [],
            hasMore: true,
            isLoading: true
        }
    }

    componentDidMount() {
        this.processData(getComment(this.props.id, 0));
    }

    loadMore() {
        this.setState({
            isLoading: true,
            page: this.state.page + 1
        }, () => this.processData(getComment(this.props.id, this.state.page)));
    }

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
    render() {
        return (
            <div>
                {this.state.data.length
                    ? <CommentComponent data={this.state.data}/>
                    : <div>isloading ......</div>
                }
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} />
            </div>
        );
    }
}

export default Comment;