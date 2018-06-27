import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './style.less';

import Discover from '../twoPage/DisCover';
import Rank from '../twoPage/Rank';
import SongList from '../twoPage/SongList';
import Anchor from '../twoPage/Anchor';
import DiscShelves from '../twoPage/DiscShelves';
import Singer from '../twoPage/Singer';

class DiscoverMusic extends React.Component {
    constructor() {
        super();
        this.state = {
            shadow: "shadow"
        }
    }

    handle(e) {
        if (e.target.nodeName === 'SPAN') {
            let spanNodes = new Set(e.target.parentNode.parentNode.parentNode.querySelectorAll('span'));
            spanNodes.forEach((item, index) => {
                item.className = ''
            });

            e.target.className = 'shadow'
        }
    }

    render() {
        return (
            <Router>
                <div className="subNav">
                    <ul onClick={this.handle.bind(this)} className="subNavUl">
                        <li><Link to="/discover"><span className={this.state.shadow}>推荐</span></Link></li>
                        <li><Link to="/rank"><span>排行榜</span></Link></li>
                        <li><Link to="/songList"><span>歌单</span></Link></li>
                        <li><Link to="/anchor"><span>主播电台</span></Link></li>
                        <li><Link to="/singer"><span>歌手</span></Link></li>
                        <li><Link to="/discShelves"><span>新碟上架</span></Link></li>
                    </ul>
                    <Route exact path="/" component={Discover}/>
                    <Route exact path="/discover" component={Discover}/>
                    <Route path="/rank" component={Rank}/>
                    <Route path="/songList" component={SongList}/>
                    <Route path="/anchor" component={Anchor}/>
                    <Route path="/singer" component={Singer}/>
                    <Route path="/discShelves" component={DiscShelves}/>
                </div>
            </Router>
        )
    }
}

export default DiscoverMusic