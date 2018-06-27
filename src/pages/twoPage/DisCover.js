import React, {Component}from 'react';
import Carousel from '../../component/common/Carousel';
import Title from '../../component/common/Title';
import SongList from '../../component/common/SongList';

import './style.less';

class DisCover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="discover">
                <section className="swipeModule">
                    <Carousel list={[
                        'http://p1.music.126.net/vyI6AqN4cNCLnQTathUSng==/109951163370560438.jpg',
                        'http://p1.music.126.net/HFBtWoP1qmSy3afM-AxZOw==/109951163375022722.jpg',
                        'http://p1.music.126.net/ImynCowUP_TYSNh8lNzExw==/109951163374714318.jpg',
                        'http://p1.music.126.net/dp8tUyjnUeB8nAL04kIdkw==/109951163375488569.jpg',
                        'http://p1.music.126.net/UwJ_yxQQqsDIdhiWn1AxKg==/109951163375015028.jpg',
                        'http://p1.music.126.net/bzlrnAXAtEMOBIzZv4enbg==/109951163375012657.jpg',
                        'http://p1.music.126.net/PhhSlvgtqdWjHZ4szHVPcA==/109951163375198759.jpg',
                        'http://p1.music.126.net/X_J-bMlJRUrJy-AnwwaE5A==/109951163375012648.jpg']}/>
                    <div className="download">
                        <a href="">下载客户端</a>
                        <p className="type">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </div>
                </section>
                <section className="songListModule">
                    <div className="songListLeft">
                        <div className="songList">
                            <Title  list={[{name:'热门推荐',link:'/hotDiscover'},{name:'华语',link:'/chinaLanguage'},{name:'流行',link:'/pop'},{name:'摇滚',link:'/rock'},{name:'民谣',link:'/ballad'},{name:'电子',link:'/electronic '}]}/>
                            <SongList list={[
                                {text:'「夏日清新」快乐在阳光下四处飞扬',img:'http://p1.music.126.net/_m_Hvj-pRoisiJeylm7Z6w==/109951163369087487.jpg?param=140y140',num:171},
                                {text:'只希望身边是你就好',img:'http://p1.music.126.net/mTdZImPcYQYIeki9hr91lQ==/18791753232530409.jpg?param=140y140',num:156},
                                {text:'这些歌比《说散就散》《体面》更扎心！',img:'http://p1.music.126.net/26LPymJM-Jff9K9UVXhxSQ==/18996262393662264.jpg?param=140y140',num:156},
                                {text:'断线',img:'http://p1.music.126.net/jhUniJ0GTt3sIWrG8WjSSA==/109951163374060837.jpg?param=140y140',num:156},
                                {text:'爱是陪伴，是你在身边的每一天',img:'http://p1.music.126.net/1VWWaK0fVm1KPnDHcY3vag==/19145795975069785.jpg?param=140y140',num:156},
                                {text:'乾坤笃定聊定都(上)',img:'http://p1.music.126.net/xd3IxgkIBhamslu7JCPnVg==/109951163283513298.jpg?param=140y140',num:156},
                                {text:'[ACG萌曲]百首傻白甜的欢脱小调',img:'http://p1.music.126.net/CEYAClf4CdjniAGhl53YPQ==/19003958975070334.jpg?param=140y140',num:178},
                                {text:'不如我们从头来过。',img:'http://p1.music.126.net/DIpYu1lbX6oAalLGP4hZoQ==/109951163375890602.jpg?param=140y140',num:200}
                            ]}/>
                        </div>
                    </div>
                    <div className="songListRight">
                        我是右边的
                    </div>
                </section>
            </div>
        );
    }
}

export default DisCover
