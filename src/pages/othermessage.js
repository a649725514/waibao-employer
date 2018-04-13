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

export default class Othermessage extends Component {
    constructor(props){
        super(props);


        this.state=({
          width:document.body.clientWidth,
          height:document.body.clientHeight,
          token:ipcRenderer.sendSync('get_mine_token','please'),
          id: props.match.params.id,
          persionInfo: {}
        })

        
    }

    componentWillMount() {
        var url1 = 'http://120.78.74.75:8080/demo/s/getUserInfoById?id='+this.state.id; // 接口url
        fetch(url1, {
          "method": 'GET',
          "headers": {
            "Authorization": "Bearer " + this.state.token,
            "Content-Type": "application/json",
          },
        }).then(
          function (res) {
            if (res.ok) {
              // console.log(res.json());
              return res.json()
    
            } else {
              { this.LogError(res) }
            }
          }
        ).then((PromiseValue) => {
          this.setState({ persionInfo: PromiseValue });
          console.log(PromiseValue)
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
                    <Selfmsgcard src1={require('../icon/chevron-left.svg')} 
                                name={this.state.persionInfo.name}
                                company={this.state.persionInfo.company}
                                email={this.state.persionInfo.email}
                                tel={this.state.persionInfo.tel}
                                link={'/contact'}/>
                    <Bolddivider />
                    <Selfsay />
                    <Bolddivider />
                    <Workexp exp={this.state.persionInfo.exp}/>
                    <Bolddivider />
                    <Workskill skills={this.state.persionInfo.skills}/>
                    <Bolddivider />
                </Scrollbars>
            </div>
        );
    }
}