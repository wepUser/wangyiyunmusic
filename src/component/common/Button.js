/**
 * Created by admin on 2018-7-3.
 */
import React from 'react';
import './style.less';

class Button extends React.Component{
    constructor(){
        super()
    }

    componentWillMount(){
        this.style={
            height:`${this.props.h}rem`,
            lineHeight:`${this.props.h}rem`,
            width:`${this.props.w}rem`,
            background:`linear-gradient(to bottom, #FEFEFE 20%,#FEFEFE 40%,#F2F2F2 100%)`,
            borderRadius:'0.03rem',
        }
    }

    render(){
        return (
            <div style={this.style} className="button">
                <a href="">符号</a>
                <a href="">{this.props.num}</a>
            </div>
        )
    }
}

export default Button