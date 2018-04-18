import React, { Component } from 'react';
import Task from './task';
import Selfdivider from './divider';
import { Rate } from 'antd';
import Animated from 'animated/lib/targets/react-dom';
import { Link } from "react-router-dom";
const { ipcRenderer } = window.electron;

export default class Projectlist extends Component {
    static defaultProps = {
        id: 0,
        projectName: '项目B',
        stars: 2,
        projectId: '',
        projectContent: '如果你无法简洁的表达你的想法，那只说明你还不够了解它。 --阿尔伯特·爱因斯坦',
        projectStatus: 0,
        projectPublicer: {},
        projectEnd: ''
    };
    constructor(props) {
        super(props);
        this.state = {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            isshow: false,
            display: 'none',
            anim: new Animated.Value(0),
            tasksInfo: [],
            token: ipcRenderer.sendSync('get_mine_token', 'please')

        };
    }
    show() {
        if (this.state.isshow == false) {
            if (this.state.tasksInfo.length == 0) {
                var url = 'http://120.78.74.75:8080/demo/project/getTaskOfProject'; // 接口url
                fetch(url, {
                    "method": 'POST',
                    "headers": {
                        "Authorization": "Bearer " + this.state.token,
                        "Content-Type": "application/json",
                    },
                    "body": JSON.stringify({
                        "id": this.props.projectId
                    })
                }).then(
                    function (res) {
                        if (res.ok) {
                            console.log(res)
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
            }
            this.setState({ isshow: true, display: 'flex' })
            const { anim } = this.state;
            anim.stopAnimation(value => {
                Animated.spring(anim, {
                    toValue: 1
                }).start();
            });
        } else {
            this.setState({ isshow: false, display: 'none' })
            const { anim } = this.state;
            anim.stopAnimation(value => {
                Animated.spring(anim, {
                    toValue: 0
                }).start();
            });
        }
    }
    render() {
        const { anim } = this.state;
        const rotateDegree = anim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg']
        });
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.8,
                flexDirection: 'column',
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.8,
                    height: this.state.height * 0.06,
                    flexDirection: 'row',
                    borderBottom: 'solid',
                    borderTop: 'solid',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderBottomColor: 'rgb(232,232,232)',
                    borderTopColor: 'rgb(232,232,232)',
                }} onClick={() => this.show()}>
                    <Animated.div style={{
                        display: 'flex',
                        width: this.state.height * 0.06,
                        height: this.state.height * 0.06,
                        justifyContent: 'center',
                        alignItems: 'center',
                        transform: [{
                            rotate: rotateDegree
                        }]
                    }}>
                        <img src={require('../icon/chevron-right.svg')}></img>
                    </Animated.div>
                    <div style={{
                        display: 'flex',
                        width: (this.state.width * 0.8 - this.state.height * 0.06) / 2,
                        height: this.state.height * 0.06,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <Link to={`/projects`
                            + `/${this.props.id}`
                            + `/${this.props.projectContent}`
                            + `/${this.props.projectEnd != '' ? this.props.projectEnd : '未知'}`
                            + `/${this.props.projectName}`
                            + `/${this.props.stars}`
                            + `/5`
                            + `/${this.props.projectPublicer != null ? this.props.projectPublicer.name : '未知'}`
                            + `/${this.props.projectPublicer != null ? this.props.projectPublicer.offer : '未知'}`
                            + `/${this.props.projectPublicer != null ? this.props.projectPublicer.tel : '未知'}`
                            + `/${this.props.projectPublicer != null ? this.props.projectPublicer.email : '未知'}`
                            + `/`
                        }
                        ><h style={{ color: 'black' }}>{this.props.projectName}</h></Link>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: (this.state.width * 0.8 - this.state.height * 0.06) / 2,
                        height: this.state.height * 0.06,
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <Rate count={3} disabled defaultValue={this.props.stars} />
                    </div>
                </div>
                <div style={{
                    display: this.state.display,
                    width: this.state.width * 0.8,
                    flexDirection: 'column',
                    marginTop: 20
                }}>
                    {this.state.tasksInfo.map((taskInfo) => {
                        return (
                            <div>
                                <Task
                                    id={taskInfo.id}
                                    task={taskInfo.taskName}
                                    uploader={taskInfo.taskPublisher}
                                    project={taskInfo.project}
                                    time={taskInfo.workload}
                                    stars={taskInfo.securityLv}
                                    startDate={taskInfo.taskBegin}
                                    endDate={taskInfo.taskEnd}
                                    taskContent={taskInfo.taskContent} />
                                <Selfdivider />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}