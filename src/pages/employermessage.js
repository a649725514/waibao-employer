import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Selfmsgcard from '../component/selfmsgcard';
import Bolddivider from '../component/bolddivider';
import Selfsay from '../component/selfsay';
import { Scrollbars } from 'react-custom-scrollbars';
import Workproject from '../component/workproject';
export default class Employermessage extends Component {
    constructor(props){
        super(props);
        this.state=({
          width:document.body.clientWidth,
          height:document.body.clientHeight
        })
    }
    render() {
        return (
            <div style={{
                display:'flex',
                width:this.state.width*0.85,
                height:this.state.height,
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center'
            }}>
                <Topbar title="他人信息" />
                <Scrollbars style={{width:this.state.width*0.85,height:this.state.height*0.94}}>
                    <Selfmsgcard src1={require('../icon/chevron-left.svg')} />
                    <Bolddivider />
                    <Selfsay />
                    <Bolddivider />
                    <Workproject />
                    <Bolddivider />
                </Scrollbars>
            </div>
        );
    }
}