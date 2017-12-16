import React, {Component} from 'react';
import './index.css';
class LoadMore extends Component {
    constructor(){
        super();
    }
    loadMore(){
        if (!this.props.isLoading) {
            this.props.loadMore();
        }
    }
    componentDidMount() {
        this.fn = ()=>{
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{
                if (this.props.isLoading) {
                    return
                }
                let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;
                if (top < screen) {
                    this.props.loadMore();
                }
            },50)
        }
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fn)
    }
    
    render() {
        return (
            <div className="load">
                {this.props.hasMore
                    ? <div ref='more' onClick={this.loadMore.bind(this)}>加载更多</div>
                    : <div>我是有底线的</div>}
            </div>
        );
    }
}

export default LoadMore;