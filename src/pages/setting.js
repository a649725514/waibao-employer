import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Settingitem from '../component/settingitem';
export default class Setting extends Component {
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
                <Topbar title="设置" />
                <div style={{
                    display:'flex',
                    width:this.state.width*0.85,
                    height:this.state.height*0.94,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    padding:this.state.height*0.05
                }}>
                    <Settingitem pic={require('../icon/volume-medium.png')} title={'声音'} />
                    <Settingitem pic={require('../icon/question.png')} title={'安全等级介绍'} />
                    <Settingitem pic={require('../icon/notification.png')} title={'关于虹软'} />
                </div>
            </div>
        );
    }
}