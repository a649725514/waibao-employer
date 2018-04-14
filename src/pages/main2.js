import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Divider, Pagination, } from 'antd';
import '../App.css';
import Topbar from '../component/topbar'
import { Link } from "react-router-dom";
import Projectlist from '../component/projectlist';
const Search = Input.Search;
const { ipcRenderer } = window.electron;
class Main2 extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      projectsInfo: [],
      current: 1,
      token: ipcRenderer.sendSync('get_mine_token', 'please')
    })
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }

  componentWillMount() {
    var url = 'http://120.78.74.75:8080/demo/project/getProjectByUser'; // 接口url
    fetch(url, {
      "method": 'GET',
      "headers": {
        "Authorization": "Bearer " + this.state.token,
        "Content-Type": "application/json",
      },
    }).then(
      function (res) {
        if (res.ok) {
          return res.json()
        } else {
          { this.LogError(res) }
        }
      }
    ).then((PromiseValue) => {
      for (var i = 0; i < PromiseValue.length; i++) {
        this.setState({ 'projectsInfo': [...this.state.projectsInfo, PromiseValue[i]] })
      }
    });
    // this.state.projectsInfo = Array.from(new Array(20), (val, index) => index);
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

        {this.state.projectsInfo.slice(this.state.current * 3 - 3, this.state.current * 3).map((projectInfo) => {
          console.log(projectInfo)
          return (
            <div>
              <Projectlist
                id={projectInfo.id}
                projectName={projectInfo.name}
                stars={projectInfo.sevurityLv}
                projectId={projectInfo.id}
                projectContent={projectInfo.projectContent}
                projectStatus={projectInfo.projectStatus}
                projectPublicer={projectInfo.user}
                projectEnd={projectInfo.projectEnd}/>
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
        }}>
          <Pagination current={this.state.current} pageSize={3} onChange={this.onChange} total={this.state.projectsInfo.length} />
        </div>
      </div>

    );
  }
}

export default Main2;