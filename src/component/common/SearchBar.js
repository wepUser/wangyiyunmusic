import React, {Component}from 'react';
import './style.less'

class SearchBar extends React.Component {
    constructor(props,context) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div className="searchBar">
                <input type="text" placeholder="音乐/视频/电台/用户"/>
            </div>
        );
    }


    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }
}

export default SearchBar
