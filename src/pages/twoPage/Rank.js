import React, {Component}from 'react';
import './css/rankStyle.less';

import Button from '../../component/common/Button';

class Rank extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updateDate:0
        }
    }

    componentWillMount(){
        /*日期更新*/
        let m=new Date().getMonth()+1>10?new Date().getMonth()+1:"0"+(new Date().getMonth()+1);
        let d=new Date().getDay()>10?new Date().getDay()+1:"0"+(new Date().getDay()+1);
        this.setState({
            updateDate:`${m}月${d}日`
        })

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="rank">
                <aside className="musicRankList">
                    <div className="featureList">
                        <h3>云音乐特色榜</h3>
                        <ul className="">
                            {
                                [{img: 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40', title: '云音乐飙升榜', text: '每天更新'},
                                 {img: 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40', title: '云音乐新歌榜', text: '每天更新'},
                                 {img:'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40',title:'网易原创歌曲榜',text:'每周四更新'},
                                 {img:'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40',title:'云音乐热歌榜',text:'每周四更新'}
                                ].map((item,index)=>{
                                    return <li key={index} className="item">
                                        <img src={item.img} alt=""/>
                                        <div className="right">
                                            <p>{item.title}</p>
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="featureList">
                        <h3>全球媒体榜</h3>
                        <ul className="">
                            {
                                [{img: 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40', title: '云音乐飙升榜', text: '每天更新'},
                                    {img: 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40', title: '云音乐新歌榜', text: '每天更新'},
                                    {img:'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40',title:'网易原创歌曲榜',text:'每周四更新'},
                                    {img:'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40',title:'云音乐热歌榜',text:'每周四更新'},
                                    {img: 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40', title: '云音乐飙升榜', text: '每天更新'},
                                    {img: 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40', title: '云音乐新歌榜', text: '每天更新'},
                                    {img:'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40',title:'网易原创歌曲榜',text:'每周四更新'},
                                    {img:'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40',title:'云音乐热歌榜',text:'每周四更新'},
                                    {img: 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40', title: '云音乐飙升榜', text: '每天更新'},
                                    {img: 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40', title: '云音乐新歌榜', text: '每天更新'},
                                    {img:'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40',title:'网易原创歌曲榜',text:'每周四更新'},
                                    {img:'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40',title:'云音乐热歌榜',text:'每周四更新'}
                                ].map((item,index)=>{
                                    return <li key={index} className="item">
                                        <img src={item.img} alt=""/>
                                        <div className="right">
                                            <p>{item.title}</p>
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </aside>
                <section className="soaringList">
                    <div className="top">
                        <div className="img">
                            <img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150" alt=""/>
                        </div>
                        <div className="numInfo">
                            <h1>云音乐飙升榜</h1>
                            <p className="updateDate">最近更新：{this.state.updateDate}<span>（每天更新）</span></p>
                            <div className="musicButton">
                                <div className="play">
                                    <a href="">播放</a>
                                    <a href="">+</a>
                                </div>
                                <Button  h={.30} w={1} num={10000}/>
                                <Button  h={.30} w={1} num={234567}/>
                                <Button  h={.30} w={1} num={1234510}/>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <header className="songListHeader">
                            <div className="left">
                                <h1>歌曲列表</h1>
                                <span>100首</span>
                            </div>
                            <div className="right">
                                <span>播放：</span><span>{`${200000}`}</span><span>次</span>
                            </div>
                        </header>
                        <section className="songListBody">

                        </section>
                    </div>
                    <div className="bottom">

                    </div>
                </section>
            </div>
        );
    }
}

export default Rank
