import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Pagination, Input } from 'antd';
import Topbar from '../component/topbar'
//import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import Contactcard from '../component/contactcard';
//const test = './pages/test';
const { ipcRenderer } = window.electron;

const Search = Input.Search;
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      persion: [],
      current: 1,
      token: ipcRenderer.sendSync('get_mine_token', 'please')

    })

  }

  onChange = (page) => {
    if (this.state.persion[page * 6 - 5 + 1] == null) {
      var url = 'http://120.78.74.75:8080/demo/s/getUserMsg?page=' + (page - 1); // 接口url
      fetch(url, {
        "method": 'POST',
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
          this.state.persion[page * 6 - 5 + i] = PromiseValue[i];
        }
        this.setState({current: page})
      });
    } else {
      this.setState({current: page})

    }
  }

  componentWillMount() {

    var url1 = 'http://120.78.74.75:8080/demo/s/getCountsOfUser'; // 接口url
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
      this.setState({ persion: new Array(PromiseValue) });
      var url = 'http://120.78.74.75:8080/demo/s/getUserMsg?page=0'; // 接口url
      fetch(url, {
        "method": 'POST',
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
          this.state.persion[1 + i] = PromiseValue[i];
        }
        this.setState({current: 1})
      });
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
        <Topbar title="通讯录" />
        <div style={{
          display: 'flex',
          width: this.state.width * 0.85,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button style={{ borderRadius: 0 }} type="primary">外包人员</Button>
          <Link to='/contact2'><Button style={{ borderRadius: 0, backgroundColor: '#f5f5f5' }}>发包人员</Button></Link>
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
            placeholder="姓名/外包公司/技能"
            onSearch={value => console.log(value)}
            style={{ width: this.state.width * 0.6 }}
          />
        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.65,
          //height:this.state.height*0.7,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginTop: 20,
        }}>
          {this.state.persion.slice(this.state.current * 6 - 5, this.state.current * 6 + 1).map((persionInfo) => {
            return (
              <div>
                <Link to={`/othermessage/`+persionInfo.workNumber}>
                  <Contactcard src={require('../pic/01.png')} name={persionInfo.name} company={persionInfo.company} skills={persionInfo.skills}/>
                </Link>
              </div>
            )
          })}

        </div>
        <div style={{
          position: 'absolute',
          bottom: 10,
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          //marginTop:10,
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'yellow'
        }}>
          <Pagination current={this.state.current} pageSize={6} onChange={this.onChange} total={this.state.persion.length} />
        </div>
      </div>

    );
  }
}

export default Contact;