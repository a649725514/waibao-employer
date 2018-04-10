import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Bolddivider from '../component/bolddivider';
import { Scrollbars } from 'react-custom-scrollbars';
import Selfsay from '../component/selfsay';
import Taskcard2 from '../component/taskcard2';
export default class Othertasks extends Component {
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
                <Topbar title="任务" />
                <Scrollbars style={{width:this.state.width*0.85,height:this.state.height*0.94}}>
                    <Taskcard2 />
                    <Bolddivider />
                    <Selfsay title='任务说明' />
                    <Bolddivider />
                </Scrollbars>
            </div>
        );
    }
}