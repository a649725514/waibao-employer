import React, { Component } from 'react';
import 'antd/dist/antd.css';
import  { Menu, Icon, Button, Input, Divider, Rate, Pagination, } from 'antd';
import drawer from './icon/drawer.svg'
import envelop from './icon/envelope-o.svg'
import group from './icon/group.svg'
import piechart from './icon/pie-chart.svg'
import user from './icon/user.svg'
import leaf from './icon/leaf.svg'
import cog from './icon/cog.svg'
import close from './icon/close.svg'
import './App.css';
//import { Router, Route, IndexRoute } from 'react-router'
//import { Redirect } from 'react-router-dom';
import test from './pages/test'
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
//const test = './pages/test';
class App extends Component {
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
  // handleOnClick = () => {  
  //   // some action...  
  //   // then redirect  
  //   this.setState({redirect: true});  
  // }
  render() {
    // if (this.state.redirect) {  
    //   return <Redirect push to="/pages/test"/>; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
    // }
    return (
      <div style={{
        width:this.state.width,
        height:this.state.height,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <div className="Shadow" style={{
          width:this.state.width*0.15,
          height:this.state.height,
          backgroundColor:'#5CACEE',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
          <div style={{
            width:this.state.width*0.15,
            height:this.state.height*0.2,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}>
            {/* <Icon type='drawer'/> */}
            <img src={drawer}></img>
            工作台
          </div>
          <div style={{
            width:this.state.width*0.15,
            height:this.state.height*0.2,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}>
            {/* <Icon type='drawer'/> */}
            <img src={envelop}></img>
            消息
          </div>
          <div style={{
            width:this.state.width*0.15,
            height:this.state.height*0.2,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}>
            {/* <Icon type='drawer'/> */}
            <img src={group}></img>
            通讯录
          </div>
          <div style={{
            width:this.state.width*0.15,
            height:this.state.height*0.2,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}>
            {/* <Icon type='drawer'/> */}
            <img src={piechart}></img>
            工作统计
          </div>
          <div style={{
            width:this.state.width*0.15,
            height:this.state.height*0.2,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}>
            {/* <Icon type='drawer'/> */}
            <img src={user}></img>
            个人信息
          </div>
        </div>
        <div style={{
          display:'flex',
          width:this.state.width*0.85,
          height:this.state.height,
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center'
        }}>
          <div style={{
            display:'flex',
            width:this.state.width*0.85,
            height:this.state.height*0.06,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#f5f5f5'
          }}>
            <div style={{
              display:'flex',
              width:this.state.width*0.75,
              height:this.state.height*0.06,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
              marginLeft:this.state.width*0.09
            }}>
              开发者工作台
            </div>
            <div style={{
              display:'flex',
              width:this.state.width*0.1,
              height:this.state.height*0.06,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
            }}>
              <img src={leaf} alt="leaf"></img>
              <img style={{marginLeft:15,marginRight:15}} src={cog} alt="cog"></img>
              <img style={{marginRight:15}} src={close} alt="close"></img>
            </div>
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.85,
            height:this.state.height*0.08,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Button style={{borderRadius:0}} type="primary">任务</Button>
            <Button onClick={this.handleOnClick} style={{borderRadius:0,backgroundColor:'#f5f5f5'}}>项目</Button>
            
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.04,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Search
              placeholder="项目名/任务名"
              onSearch={value => console.log(value)}
              style={{ width: this.state.width*0.8-100}}
            />
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'flex-end',
          }}>
            <Divider />
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.12,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            //backgroundColor:'red'
          }}>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{fontSize:15,marginLeft:10}}>任务a</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-end',
                marginRight:30
              }}>
                <Rate count={3} disabled defaultValue={2} />
              </div>
            </div>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{marginLeft:10}}>发布者：发包者甲</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                marginRight:30
              }}>
                <h>所属项目：项目B</h>
              </div>
            </div>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{marginLeft:10}}>工作量：8</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-end',
                marginRight:30
              }}>
                <h>2018.3.1-2018.4.1</h>
              </div>
            </div>
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.08,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'flex-start',
          }}>
            <Divider />
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.12,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            //backgroundColor:'red'
          }}>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{fontSize:15,marginLeft:10}}>任务a</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-end',
                marginRight:30
              }}>
                <Rate count={3} disabled defaultValue={2} />
              </div>
            </div>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{marginLeft:10}}>发布者：发包者甲</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                marginRight:30
              }}>
                <h>所属项目：项目B</h>
              </div>
            </div>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{marginLeft:10}}>工作量：8</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-end',
                marginRight:30
              }}>
                <h>2018.3.1-2018.4.1</h>
              </div>
            </div>
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.08,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'flex-start',
          }}>
            <Divider />
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.12,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            //backgroundColor:'red'
          }}>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{fontSize:15,marginLeft:10}}>任务a</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-end',
                marginRight:30
              }}>
                <Rate count={3} disabled defaultValue={2} />
              </div>
            </div>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{marginLeft:10}}>发布者：发包者甲</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                marginRight:30
              }}>
                <h>所属项目：项目B</h>
              </div>
            </div>
            <div style={{
              display:'flex',
              width:this.state.width*0.8,
              height:this.state.height*0.04,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                //backgroundColor:'yellow',
              }}>
                <h style={{marginLeft:10}}>工作量：8</h>
              </div>
              <div style={{
                display:'flex',
                width:this.state.width*0.4,
                height:this.state.height*0.04,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-end',
                marginRight:30
              }}>
                <h>2018.3.1-2018.4.1</h>
              </div>
            </div>
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.08,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'flex-start'
          }}>
            <Divider />
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.08,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            //backgroundColor:'yellow'
          }}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;