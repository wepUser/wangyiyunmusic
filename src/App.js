import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'swiper/dist/css/swiper.min.css';

import './App.less';
import SearchBar from './component/common/SearchBar';
import Select from './component/common/Select';

import DiscoverMusic from './pages/onePage/DiscoverMusic';
import MyMusic from './pages/onePage/MyMusic';
import Friend from './pages/onePage/Friend';



class App extends Component {
    constructor(props) {
        super();
        this.state = {
            display: 'none'
        }
    }

    /*鼠标移入登陆事件*/
    handleOver() {
        this.setState({
            display: 'block'
        })
    }
    /*鼠标移出登陆事件*/
    handleOut() {
        this.setState({
            display: 'none'
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navBar">
                        <div className="navWrapper">
                            <div className="logo">
                                <Link to="/">网易云音乐</Link>
                            </div>
                            <ul className="navLink">
                                <li><Link to="/">发现音乐</Link></li>
                                <li><Link to="/myMusic">我的音乐</Link></li>
                                <li><Link to="/friend">朋友</Link></li>
                                <li><Link to="/store/product" target="_black">商城</Link></li>
                                <li><Link to="/nmusician/web/index">音乐人</Link></li>
                                <li><Link to="download">下载客户端</Link></li>
                            </ul>
                            <div className="search">
                                <SearchBar/>
                            </div>
                            <div className="video">
                                <span>视频投稿</span>
                            </div>
                            <div className="landing" onMouseOver={this.handleOver.bind(this)}
                                 onMouseOut={this.handleOut.bind(this)}>
                                <span>登陆</span>
                                <Select list={['QQ登陆', '手机登陆', '微信登陆', '新浪微博登陆', '网易邮箱登陆']} display={this.state.display}/>
                            </div>
                        </div>
                    </nav>
                    <Route path="/" component={DiscoverMusic}/>
                    <Route path="/myMusic" component={MyMusic}/>
                    <Route path="/friend" component={Friend}/>
                    <Route path="/store/product" component={Friend}/>
                    <Route path="/nmusician/web/index"/>
                    <Route path="download"/>
                </div>
            </Router>
        );
    }
}

export default App;
