import React, {Component} from 'react';
import formateTime from './formateTime'
import {Button } from 'antd';
const { ipcRenderer } = window.electron;

export default class TimeDisplay extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            time: 0,
            on: false,
            log: []
        }
        ipcRenderer.on("checking_employee_message",(event, arg) => {
            this.setState({on: false})
            clearInterval(this.timer);
            
          });
        ipcRenderer.on("checking_employee_finish_message", (event, arg) => {
            this.setState({on: true})
            this.timer = setInterval(() => {
                this.setState({time: ++this.state.time});
            }, 10)
        })
    }

    
    handleClick = () => {
        if (this.state.on) {
            clearInterval(this.timer);
            ipcRenderer.send("end_check_employee_message","end");
        } else {
            //计时器
            ipcRenderer.send("start_check_employee_message","start");
            this.timer = setInterval(() => {
                this.setState({time: ++this.state.time});
            }, 10)
        }
        //改变开始、暂停状态
        this.setState({on: !this.state.on})
    }


    render() {
        var time = formateTime(this.state.time);
        // /*这里需要把当前组件的对象传递进去*/
        
        return <div>
            <Button style={{ marginRight: this.state.width * 0.05 }} size='large' type='primary' onClick = {() => this.handleClick()}>{time}</Button>
        </div>
    }
}