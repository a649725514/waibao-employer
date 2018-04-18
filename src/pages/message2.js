import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Pagination, Button } from 'antd';
import Topbar from '../component/topbar'
//import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import Msg2 from '../component/msg2';
//const test = './pages/test';
class Message2 extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      Msg2s: [],
      current: 1
    })
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }

  componentWillMount() {
    this.state.Msg2s = Array.from(new Array(1), (val, index) => index);

  }

  render() {
    var noMessage;
    if (this.state.current*4 > this.state.Msg2s.length) {
        noMessage = <div style={{
          position: 'float',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          <h style={{ color: 'grey' }}>暂无更多</h>
        </div>
    } else {
      noMessage = <div></div>
    }
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
          <Link to='/message'><Button style={{ borderRadius: 0, backgroundColor: '#f5f5f5' }}>个人</Button></Link>
          <Button type="primary" style={{ borderRadius: 0 }} >系统</Button>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <div>
            {this.state.Msg2s.slice(this.state.current * 4 - 3, this.state.current * 4 + 1).map((Message) => {
              return (
                <Msg2 title={'清明节放假通知'+Message} />
              )
            })}
              {noMessage}
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 10,
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'yellow'
        }}>
          <Pagination current={this.state.current} pageSize={4} onChange={this.onChange} total={this.state.Msg2s.length} />
        </div>
      </div>

    );
  }
}

export default Message2;