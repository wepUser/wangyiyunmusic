/**
 * Created by admin on 2018-6-25.
 */
import React, {Component}from 'react';

import './style.less';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.timer = undefined;
        this.colors = ['#2B2B2D', '#AD0A0B', '#000000', '#000996', '#FEAABA', '#F9E3D5', '#B8B7BF', '#000000'];
        this.count = 0;
        this.type = true;
    }

    componentDidMount() {
        /*初始dom*/
        this.swipe = document.getElementsByClassName('swipe')[0];
        let container = document.getElementsByClassName('container')[0];
        this.wrapper = document.getElementsByClassName('wrapper')[0];
        let point = document.getElementsByClassName('points')[0];
        this.wrappers = this.wrapper.children;
        this.points = point.children;
        this.imgWidth = this.wrappers[0].clientWidth;
        let imgHeight = this.wrappers[0].clientHeight;

        /*设置样式*/
        this.swipe.style.backgroundColor = this.colors[0];

        this.points[0].className = 'bgcSpan';

        this.wrapper.style.width = `${this.imgWidth * (this.wrappers.length)}px`;
        this.wrapper.style.position = 'absolute';
        this.wrapper.style.left = 0;

        container.style.width = `${this.imgWidth}px`;
        container.style.height = `${imgHeight}px`;
        container.style.overflow = 'hidden';
        container.style.margin = '0 auto';
        container.style.position = 'relative';

        /*轮播切换*/
        let speed = 4000;
        this._swipe(this.wrapper, this.swipe, this.imgWidth, speed);


    }

    /*过渡函数*/
    _swipe(dom, dom2, width, speed) {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            if (this.count < this.wrappers.length - 1) {
                this.count++;
                dom.style.left = `-${width * this.count}px`;
                dom.style.transition = 'all 0s linear 2.3s';
                dom2.style.backgroundColor = this.colors[this.count];
                dom2.style.transition = 'all 0s linear 2.3s';
                this._clearClass(this.wrappers);
                this.wrappers[this.count - 1].className = 'imgAnimate';
            } else {
                this.count = 0;
                dom.style.left = 0;
                dom.style.transition = '';
                this.points[0].className = 'bgcSpan';
            }
        }, speed)
    }

    /*清除类名*/
    _clearClass(dom) {
        for (let i = 0; i < dom.length; i++) {
            dom[i].className = '';
        }
    }

    /*过渡结束事件监听*/
    _handleTransition() {
        this.type = true;
        /*过渡结束红点切换*/
        this._clearClass(this.points);
        if (this.count < this.points.length) {
            this.points[this.count].className = 'bgcSpan';
        }
    }

    _handleOver() {
        clearInterval(this.timer);
    }

    _handleOut() {
        let speed = 4000;
        this._swipe(this.wrapper, this.swipe, this.imgWidth, speed);
    }

    _swipeFunc(i) {
        let me = this;
        let currentLeft = parseInt(this.wrapper.style.left);

        switch (i) {
            case 'left':
                if (currentLeft-this.imgWidth > -this.wrapper.offsetWidth + this.imgWidth) {
                    me.type = false;
                    this.count++;
                    this.wrapper.style.transition = 'all 0s linear 0s';
                    this.swipe.style.transition = 'all 0s linear 0s';
                    this.swipe.style.backgroundColor = this.colors[this.count];
                    this.wrapper.style.left = currentLeft - this.imgWidth + 'px';
                    if(this.count===this.wrappers.length-1){
                        this.count=0;
                    }
                    me.type = true;
                    // this._clearClass(this.wrappers);
                    // this.wrappers[this.count - 1].className = 'imgAnimate';
                }else{
                    this.count=0;
                    this.wrapper.style.left=0;
                }
                break;
            case 'right':
                if (currentLeft === 0) {
                    this.count = this.wrappers.length-1;
                    currentLeft=this.wrapper.style.left=-(this.wrappers.length-1)*this.imgWidth;
                }
                if (currentLeft < 0) {
                    this.count--;
                    me.type = false;
                    this.wrapper.style.transition = 'all 0s linear 0s';
                    this.swipe.style.transition = 'all 0s linear 0s';
                    this.swipe.style.backgroundColor = this.colors[this.count];
                    this.wrapper.style.left = (currentLeft + this.imgWidth) + 'px';
                    me.type = true;
                    // this._clearClass(this.wrappers);
                    // this.wrappers[this.count+1].className = 'imgAnimate';
                }
                break;
        }
    }

    /*左滑动事件*/
    _handleLeft() {
        clearInterval(this.timer);
        if (this.type) {
            this._swipeFunc('left');
        }
        this._clearClass(this.points);
        if (this.count < this.points.length) {
            this.points[this.count].className = 'bgcSpan';
        }

    }


    /*右滑动事件*/
    _handleRight() {
        clearInterval(this.timer);
        if (this.type) {
            this._swipeFunc('right');
        }
        this._clearClass(this.points);
        if (this.count < this.points.length) {
            this.points[this.count].className = 'bgcSpan';
        }
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const items = this.props.list;
        const itemsCopy = items.slice(0);
        items[items.length] = items[0];
        return (
            <div className="swipe" onMouseOver={this._handleOver.bind(this)} onMouseOut={this._handleOut.bind(this)}>
                <div className="container">
                    <div className="wrapper" onTransitionEnd={this._handleTransition.bind(this)}>
                        {items.map((item, index) => {
                            return <img src={item} key={index} alt=""/>
                        })}
                    </div>
                    <div className="points">
                        {itemsCopy.map((item, index) => {
                            return <span key={index}></span>
                        })}
                    </div>
                </div>
                <div className="leftArrow" onClick={this._handleLeft.bind(this)}>左</div>
                <div className="rightArrow" onClick={this._handleRight.bind(this)}>右</div>
            </div>
        )
    }
}

export default Carousel
