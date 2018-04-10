import React, { Component } from 'react';
import Task from './task';
import Selfdivider from './divider';
import { Rate } from 'antd';
import Animated from 'animated/lib/targets/react-dom';
import { Link } from "react-router-dom";
export default class Projectlist extends Component {
    static defaultProps = {
        tasksInfo: [],
        projectname: '项目B',
        stars: 2,
    };
    constructor(props) {
        super(props);
        this.state = {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            isshow: false,
            display: 'none',
            anim: new Animated.Value(0)
        };
    }
    show() {
        if (this.state.isshow == false) {
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
                        <Link to='/projects'><h style={{color:'black'}}>{this.props.projectname}</h></Link>
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
                    {this.props.tasksInfo.map((taskInfo) => {
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
                </div>
            </div>
        );
    }
}