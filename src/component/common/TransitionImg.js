/**
 * Created by admin on 2018-6-29.
 */
import React from 'react';
import PropTypes from 'prop-types';
import './style.less'

class TransitionImg extends React.Component{
    static propTypes={
        list:PropTypes.array
    };

    constructor(props){
        super(props);
        let topList=this.props.list.slice(0,5);
        topList.forEach((item,index)=>{
            this.props.list.push(item);
        });
        this._flag=true;
    }

    componentDidMount(){
        //初始dom
        this.swipe=document.querySelector('.transitionSwipe');
        this.contain=document.querySelector('.transitionContainer');
        this.contain.style.width=this.props.list.length*125+'px';
        this.contain.style.left='0px';

        this.containWidth=parseInt(this.contain.offsetWidth);
        this.conLeft=parseInt(this.contain.style.left);
    }

    transitionLeft(){
        if(this._flag){
            this._flag=false;
            console.log(this.conLeft);
            if(this.conLeft>-this.containWidth+625){
                this.contain.style.left=-625+parseInt(this.contain.style.left)+'px';
                this.contain.style.transition='all 1s';
                this.conLeft=parseInt(this.contain.style.left);
            }else{
                this.contain.style.left=0;
                this.conLeft=parseInt(this.contain.style.left);
            }
            this._flag=true;
        }else{
            return false
        }
    }

    transitionRight(){
        if(this._flag){
            this._flag=false;
            if(this.conLeft<0){
                this.contain.style.left=625+parseInt(this.contain.style.left)+'px';
                this.contain.style.transition='all 1s';
                this.conLeft=parseInt(this.contain.style.left);
            }else{
                this.contain.style.left=625-this.contain.offsetWidth+'px';
                this.conLeft=parseInt(this.contain.style.left);
            }
            this._flag=true;
        }else{
            return false
        }

        console.log(this.conLeft)
    }

    transitionEnd(){

    }

    render(){
        return (
            <div className="transitionImg">
                <div className="transitionWrapper">
                    <div className="transitionSwipe">
                        <ul className="transitionContainer" onTransitionEnd={this.transitionEnd.bind(this)}>
                            {
                                this.props.list.map((item,index)=>{
                                    return <li key={index} className="item">
                                        <img src={item.img} alt=""/>
                                        <div className="bottom">
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="left" onClick={this.transitionLeft.bind(this)}>左</div>
                    <div className="right" onClick={this.transitionRight.bind(this)}>右</div>
                </div>
            </div>
        )
    }
}

export default TransitionImg