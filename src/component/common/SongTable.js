/**
 * Created by admin on 2018-7-2.
 */
import React from 'react';
import axios from 'axios';


class SongTable extends React.Component {
    constructor() {
        super();
        this._flag = false;
        this.imgs=['http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100','http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100','http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100'];
        this.state={
            data:[]
        };
    }

    componentDidMount() {
        axios.get('/static/songsTable.json').then(res => {
            if (res.data.data.length > 1) {
                this._flag = true;
                this.setState({
                    data:res.data.data
                });
            }
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="songsTable">
                <div className="songTableTop">
                    <img src={this.imgs[this.props.i]} alt=""/>
                    <div className="info">
                        <p>云音乐飙升榜</p>
                        <p>播放</p>
                    </div>
                </div>
                {
                    this._flag ? this.state.data.map((item,index)=>{
                        return (
                            <div className="songTableContain" key={index}>
                                <div className="ranking">
                                    <span>{index+1}</span>
                                    <span>{item}</span>
                                </div>
                            </div>
                        )
                    }) : null
                }
                <div className="songTableBottom">
                    <a href="">查看全部</a>
                </div>
            </div>
        )
    }
}

export default SongTable;