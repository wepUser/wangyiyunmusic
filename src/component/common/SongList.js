/**
 * Created by admin on 2018-6-27.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import './style.less';

class SongList extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="songListCommon">
                <div className="songListTop">
                    <ul className="songListCon">
                        {this.props.list.map((item, index) => {
                            return (
                                <li key={index} className="item">
                                    <div className="msk">
                                        <img src={item.img} alt=""/>
                                        <div className="bottom">
                                            <span className="icon">耳机</span>
                                            <span>{item.num}万</span>
                                            <span className="play">播放</span>
                                        </div>
                                    </div>
                                    <a href="" >{item.text}</a>
                                </li>)
                        })}
                    </ul>
                </div>
                <div className="songListBottom">

                </div>
            </div>
        )
    }
}

export default SongList