import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Divider, Pagination,Modal } from 'antd';
import '../App.css';
import Task from '../component/task';
import Selfdivider from '../component/divider'
import Topbar from '../component/topbar'
import { Link } from "react-router-dom";

//import { Router, Route, IndexRoute } from 'react-router'
//import { Redirect } from 'react-router-dom';
//import test from './pages/test'

const Search = Input.Search;
const { ipcRenderer } = window.electron;
//const test = './pages/test';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      //redirect:false,
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      tasksInfo: [],
      current: 1,
      token: ipcRenderer.sendSync('get_mine_token', 'please'),
      loading: false,
      visible: false,
    })

    // setInterval(()=>{
    //   this.setState({
    //     width:document.body.clientWidth,
    //     height:document.body.clientHeight
    //   })
    // },1)
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }

  componentWillMount() {
    var url = 'http://120.78.74.75:8080/demo/s/getTasksOfUser'; // 接口url
    fetch(url, {
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
      for (var i = 0; i < PromiseValue.length; i++) {
        this.setState({ 'tasksInfo': [...this.state.tasksInfo, PromiseValue[i]] })
      }
    });
    // this.state.tasksInfo = Array.from(new Array(20), (val, index) => index);
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
          <div style={{
            display: 'flex',
            width: this.state.width * 0.8,
            height: this.state.height * 0.08,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button style={{ borderRadius: 0 }} type="primary">任务</Button>
            <Link to='/main2'><Button onClick={this.handleOnClick} style={{ borderRadius: 0, backgroundColor: '#f5f5f5' }}>项目</Button></Link>
          </div>
          <div style={{
            display: 'flex',
            width: this.state.width * 0.05,
            height: this.state.width * 0.05,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button type="primary" size={'small'} onClick={this.showModal}>+</Button>
            <Modal
              width={this.state.width*0.25}
              visible={this.state.visible}
              title="添加"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <Link to='/addtask'><Button style={{margin:10}} type="primary">添加任务</Button></Link>
              <Link to='/addproject'><Button type="primary">添加项目</Button></Link>
            </Modal>
          </div>
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
        {this.state.tasksInfo.slice(this.state.current * 3 - 3, this.state.current * 3).map((taskInfo) => {
          return (
            <div>
              <Task task={taskInfo.taskContent}
                uploader={taskInfo.taskPublisher}
                project={taskInfo.project.projectContent}
                time={taskInfo.workload}
                stars={taskInfo.securityLv}
                startDate={taskInfo.taskBegin}
                endDate={taskInfo.taskEnd} />
              <Selfdivider />
            </div>
          )
        })}

        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'yellow'
        }}>
          <Pagination current={this.state.current} pageSize={3} onChange={this.onChange} total={this.state.tasksInfo.length} />
        </div>
      </div>

    );
  }
}

export default Main;