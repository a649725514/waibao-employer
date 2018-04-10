import React, { Component } from 'react';
import Topbar from '../component/topbar';
import E404 from '../component/e404';
export default class Error extends Component {
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
                <Topbar title="错误" />
                <E404 />
            </div>
        );
    }
}