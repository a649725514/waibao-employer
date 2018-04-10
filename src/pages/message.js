import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Pagination, } from 'antd';
import Msg from '../component/msg';
import Topbar from '../component/topbar'
//import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
const {ipcRenderer} = window.electron;

//const test = './pages/test';
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      Msgs: [],
      current: 1,
      token:ipcRenderer.sendSync('get_mine_token','please')
    })
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }

  componentWillMount() {
    var url = 'http://120.78.74.75:8080/demo/msg/getMsgOfCurrentUser'; // 接口url
    fetch(url, {
      "method": 'GET',
      "headers": {
        "Authorization": "Bearer "+this.state.token,
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
    ).then( (PromiseValue) => {
      for (var i = 0; i < PromiseValue.length; i++) {
        this.setState({'Msgs': [...this.state.Msgs, PromiseValue[i]]})
      }
    });
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
        <Topbar title="我的消息" />
        <div style={{
          display: 'flex',
          width: this.state.width * 0.85,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button style={{ borderRadius: 0 }} type="primary">个人</Button>
          <Link to='/message2'><Button style={{ borderRadius: 0, backgroundColor: '#f5f5f5' }}>系统</Button></Link>
        </div>
        <div>
          {this.state.Msgs.slice(this.state.current * 4 - 4, this.state.current * 4).map((Message) => {
            console.log(Message)
            return (
              <Msg user={Message.userName} situation={Message.context} comefrom={Message.taskId} />
            )
          })}
        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          //marginTop:10,
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'yellow'
        }}>
          <Pagination current={this.state.current} pageSize={4} onChange={this.onChange} total={this.state.Msgs.length} />
        </div>
      </div>

    );
  }
}

export default Message;