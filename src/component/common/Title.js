/**
 * Created by admin on 2018-6-27.
 */
import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import './style.less'

class Title extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="titleBar">
                {this.props.list.map((item, index) => {
                    return <Link to={item.link} key={index}>{item.name}</Link>
                })}
                <Link to="/more">更多</Link>
            </div>
        );
    }

}

export default Title
