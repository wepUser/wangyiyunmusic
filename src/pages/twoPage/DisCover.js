import React, {Component}from 'react';
import Carousel from '../../component/common/Carousel';
import Title from '../../component/common/Title';
import SongList from '../../component/common/SongList';
import TransitionImg from '../../component/common/TransitionImg';
import SongTable from '../../component/common/SongTable';

import './css/discoverStyle.less';

class DisCover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.data=[
            {img:'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',title:'张惠妹aMEI',text:'台湾歌手张惠妹'},
            {img:'http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62',title:'Fine乐团',text:'独立音乐人'},
            {img:'http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62',title:'萬曉利',text:'民谣歌手、中国现代民谣的代表人物之一'},
            {img:'http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62',title:'音乐人赵雷',text:'民谣歌手'},
            {img:'http://p1.music.126.net/U-duMw2-FE0wNRsuwGktPw==/109951162895674268.jpg?param=62y62',title:'王三溥',text:'音乐人'}];
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
                            <Title  list={[{name:'新碟上架',link:'/newPutaway'}]}/>
                            <TransitionImg list={[{img:'http://p3.music.126.net/WcVJXehoHv1_b0GyWFCjmA==/109951163365318229.jpg?param=100y100',title:'EVERYTHING IS LOVE',text:'The Carters / Beyoncé / Jay-Z'},
                                {img:'http://p3.music.126.net/ldRfSHRgtSZRsNruD54taQ==/109951163370797182.jpg?param=100y100',title:'王牌冤家',text:'李荣浩'},{
                                img:'http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100',title:'平凡的一天',text:'毛不易'},
                                {img:'http://p4.music.126.net/w84c5_ebsl9cqchrzT1pug==/109951163349702736.jpg?param=100y100',title:'Born To Be Yours',text:'Kygo / Imagine Dragons'},
                                {img:'http://p3.music.126.net/ucsboPMm818QenSE8g-YnQ==/109951163336294560.jpg?param=100y100',title:'F.L.Y. BOYS F.L.Y. GIRLS',text:'GENERATIONS from EXILE TRIBE'},
                                {img:'http://p3.music.126.net/r1oeSDKbatOCrshT6_SPWg==/109951163366934124.jpg?param=100y100',title:'THE FIRST I',text:'fanren'},{
                                img:'http://p4.music.126.net/X0u2ACWRZ1h6qMr_wU7pIQ==/109951163366912427.jpg?param=100y100',title:'nihaom',text:'jjjj'},
                                {img:'http://p3.music.126.net/R-DcicXbPYdzVUaI2MGpdw==/109951163363701829.jpg?param=100y100',title:'kdjkjd',text:'ieiei'},
                                {img:'http://p4.music.126.net/FHtQLeSI7331ueL_tERbpg==/109951163370280050.jpg?param=100y100',title:'kkkk',text:'qqqqq'},
                                {img:'http://p4.music.126.net/SGRNxyeA6_43M8oB0TuqrQ==/109951163370531309.jpg?param=100y100',title:'qqwee',text:'pppdpd'}]}/>
                            <Title  list={[{name:'榜单',link:'/runchies'}]}/>
                            <div className="songTableList">
                                <SongTable i={0}/>
                                <SongTable i={1}/>
                                <SongTable i={2}/>
                            </div>
                        </div>
                    </div>
                    <div className="songListRight">
                        <div className="nameLogin">
                            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                            <input className="loginButton" type="button" value="用户登陆"/>
                        </div>
                        <div className="enterSinger">
                            <div className="title">
                                <h3>入驻歌手</h3>
                                <a href="">查看全部</a>
                            </div>
                            <ul className="listSinger">
                                {this.data.map((item,index)=>{
                                    return <li key={index} className="item"><a href="">
                                        <div className="header">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="info">
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </a></li>
                                })}
                            </ul>
                        </div>
                        <div className="applyWyMusic">
                            <div>申请成为网易音乐人</div>
                        </div>
                        <div className="hotAnchor">
                            <h3>热门主播</h3>
                            <ul className="hotAnchorCon">
                                {
                                    [{img:'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40',title:'陈立',text:'心理学家、美食家陈立教授'},
                                        {img:'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40',title:'DJ艳秋',text:'著名音乐节目主持人'},
                                        {img:'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40',title:'国家大剧院古典音乐频道',text:'国家大剧院古典音乐官方'},
                                        {img:'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40',title:'谢谢收听',text:'南京电台主持人王馨'},
                                        {img:'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40',title:'DJ晓苏',text:'独立DJ，CRI环球旅游广播特邀DJ'}].map((item,index)=>{
                                        return <li key={index} className="item">
                                            <img src={item.img} alt=""/>
                                            <div className="info">
                                                <p>{item.title}</p>
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default DisCover
