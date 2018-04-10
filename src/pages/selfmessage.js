import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Selfmsgcard from '../component/selfmsgcard';
import Bolddivider from '../component/bolddivider';
import Selfsay from '../component/selfsay';
import Workexp from '../component/workexp';
import Workskill from '../component/workskill';
import { Scrollbars } from 'react-custom-scrollbars';
import Workproject from '../component/workproject';
const {ipcRenderer} = window.electron;

export default class Selfmessage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            mineInfo: {},
            token:ipcRenderer.sendSync('get_mine_token','please')

        })
    }
    componentWillMount() {
        var url = 'http://120.78.74.75:8080/demo/s/getInfoOfCurrentUser'; // 接口url
        fetch(url, {
            "method": 'GET',
            "headers": {
                "Authorization": "Bearer " + this.state.token,
                "Content-Type": "application/json",
            },
        }).then(
             (res) => {
                if (res.ok) {
                    // console.log(res.json());
                    return res.json()
                } else {
                    { this.LogError(res) }
                }
                
            }
        ).then((PromiseValue) => {
            this.setState({
                mineInfo: PromiseValue
            })
        })
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.85,
                height: this.state.height,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Topbar title="个人 信息" />
                <Scrollbars style={{ width: this.state.width * 0.85, height: this.state.height * 0.94 }}>
                    <Selfmsgcard 
                        name={this.state.mineInfo.name} 
                        email={this.state.mineInfo.email} 
                        tel={this.state.mineInfo.tel} 
                        src2={require('../icon/page.svg')} />
                    <Bolddivider />
                    <Selfsay icon={require('../icon/pencil.svg')} />
                    <Bolddivider />
                    <Workexp exp={this.state.mineInfo.exp}/>
                    <Bolddivider />
                    <Workskill skills={this.state.mineInfo.skills}/>
                    <Bolddivider />
                    <Workproject />
                    <Bolddivider />
                </Scrollbars>
            </div>
        );
    }
}