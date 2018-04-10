import React, { Component } from 'react';
import 'antd/dist/antd.css';
import leaf from '../icon/leaf.svg'
import cog from '../icon/cog.svg'
import close from '../icon/close.svg'
import  { Button } from 'antd';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class E404 extends Component {
    static defaultProps={
        
    };
    constructor(props){
        super(props);
        this.state=({
          width:document.body.clientWidth,
          height:document.body.clientHeight
        })
      }
      render(){
          return (
            <div style={{
                display:'flex',
                width:this.state.width*0.85,
                height:this.state.height*0.94,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
              }}>
                <div style={{
                    display:'flex',
                    width:this.state.width*0.85*0.7,
                    height:this.state.height*0.94*0.5,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <div style={{
                        display:'flex',
                        width:this.state.width*0.85*0.21,
                        height:this.state.height*0.94*0.5,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <img style={{
                            width:this.state.width*0.85*0.21,
                            height:this.state.height*0.94*0.28,
                        }} src={require('../pic/404.png')}></img>
                    </div>
                    <div style={{
                        display:'flex',
                        width:this.state.width*0.85*0.49,
                        height:this.state.height*0.94*0.5,
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'flex-start',
                    }}>
                        <h1 style={{
                            color:'#63B8FF',
                            marginLeft:this.state.width*0.05
                        }}>{'矮油，页面飘走了...'}</h1>
                        <h3 style={{
                            color:'#d9d9d9',
                            marginLeft:this.state.width*0.05
                        }}>{'休息一下，回到首页吧~'}</h3>
                        <Link to='/main'>
                        <Button style={{
                            marginLeft:this.state.width*0.05
                        }} type='primary'>{'回到首页'}</Button>
                        </Link>
                    </div>
                </div>
              </div>
          );
      }
}