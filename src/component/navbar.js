import React, { Component } from 'react';
import 'antd/dist/antd.css';
import drawer from '../icon/drawer.svg'
import envelop from '../icon/envelope-o.svg'
import group from '../icon/group.svg'
import piechart from '../icon/pie-chart.svg'
import user from '../icon/user.svg'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state=({
          //redirect:false,
          width:document.body.clientWidth,
          height:document.body.clientHeight
        })
        // setInterval(()=>{
        //   this.setState({
        //     width:document.body.clientWidth,
        //     height:document.body.clientHeight
        //   })
        // },1)
      }
      render(){
          return (
            <div className="Shadow" style={{
                width:this.state.width*0.15,
                height:this.state.height,
                backgroundColor:'#5CACEE',
                //backgroundColor:'black',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
              }}>
                <Link to='/main'>
                <div style={{
                  width:this.state.width*0.15,
                  height:this.state.height*0.2,
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  {/* <Icon type='drawer'/> */}
                  <img src={drawer} alt='drawer'></img>
                  <h style={{color:'black'}}>工作台</h>
                </div>
                </Link>
                <Link to='/message'>
                <div style={{
                  width:this.state.width*0.15,
                  height:this.state.height*0.2,
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  {/* <Icon type='drawer'/> */}
                  <img src={envelop} alt='envelop'></img>
                  <h style={{color:'black'}}>消息</h>
                </div>
                </Link>
                <Link to='/contact'>
                <div style={{
                  width:this.state.width*0.15,
                  height:this.state.height*0.2,
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  {/* <Icon type='drawer'/> */}
                  <img src={group} alt='group'></img>
                  <h style={{color:'black'}}>通讯录</h>
                </div>
                </Link>
                <Link to='/piechart'>
                <div style={{
                  width:this.state.width*0.15,
                  height:this.state.height*0.2,
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  {/* <Icon type='drawer'/> */}
                  <img src={piechart} alt='piechart'></img>
                  <h style={{color:'black'}}>工作统计</h>
                </div>
                </Link>
                <Link to='/selfmessage'>
                <div style={{
                  width:this.state.width*0.15,
                  height:this.state.height*0.2,
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  {/* <Icon type='drawer'/> */}
                  <img src={user} alt='user'></img>
                  <h style={{color:'black'}}>个人信息</h>
                </div>
                </Link>
              </div>
          );
      }
}