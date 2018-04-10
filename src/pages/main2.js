import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Divider, Pagination, } from 'antd';
import '../App.css';
import Topbar from '../component/topbar'
import { Link } from "react-router-dom";
import Projectlist from '../component/projectlist';
const Search = Input.Search;
class Main2 extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    })
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
        <Topbar />
        <div style={{
          display: 'flex',
          width: this.state.width * 0.85,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Link to='/main'><Button style={{ borderRadius: 0, backgroundColor: '#f5f5f5' }} >任务</Button></Link>
          <Button style={{ borderRadius: 0 }} type="primary">项目</Button>

        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.04,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Search
            placeholder="项目名/任务名"
            onSearch={value => console.log(value)}
            style={{ width: this.state.width * 0.8 - 100 }}
          />
        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
          <Divider />
        </div>
        <div>
          <Projectlist />
        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>

    );
  }
}

export default Main2;