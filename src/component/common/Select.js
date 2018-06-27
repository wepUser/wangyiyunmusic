import React, {Component}from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="landList" style={{display:this.props.display || 'none'}}>
                {
                    this.props.list.length>0?this.props.list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    }):null
                }
            </ul>
        );
    }
}

export default Select
