import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Bolddivider from '../component/bolddivider';
import { Scrollbars } from 'react-custom-scrollbars';
import Selfsay from '../component/selfsay';
import Taskcard from '../component/taskcard';
import Comment1 from '../component/comment1';
const { ipcRenderer } = window.electron;

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            info: props.match.params
        })
        ipcRenderer.on('camera-message-reply', function (event, arg) {
        })
    }

    componentWillMount() {
        if(this.state.info.stars>2) {
        ipcRenderer.send('camera-message', 'ping')
        }
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
                <Topbar title="任务" />
                <Scrollbars style={{ width: this.state.width * 0.85, height: this.state.height * 0.94 }}>
                    <Taskcard
                        taskname={this.state.info.taskname}
                        date={this.state.info.date}
                        project={this.state.info.project}
                        stars={this.state.info.stars}
                        counts={this.state.info.counts}
                        time={this.state.info.time}
                        name={this.state.info.name}
                        duty={this.state.info.duty}
                        tele={this.state.info.tele}
                        email={this.state.info.email} />
                    <Bolddivider />
                    <Selfsay title='任务说明' content={this.state.info.taskContent} />
                    <Bolddivider />
                    <Comment1 taskId={this.state.info.id} stars={this.state.info.stars}/>
                </Scrollbars>
            </div>
        );
    }
}