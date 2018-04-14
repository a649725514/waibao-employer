import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Bolddivider from '../component/bolddivider';
import { Scrollbars } from 'react-custom-scrollbars';
import Selfsay from '../component/selfsay';
import Notice from '../component/notice';
import Projectcard from '../component/projectcard';
import Comment from '../component/comment';
export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            info: props.match.params

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
                <Topbar title="项目" />
                <Scrollbars style={{ width: this.state.width * 0.85, height: this.state.height * 0.94 }}>
                <Projectcard
                        taskname={this.state.info.projectname}
                        date={this.state.info.date}
                        stars={this.state.info.stars}
                        counts={this.state.info.counts}
                        time={this.state.info.time}
                        name={this.state.info.name}
                        duty={this.state.info.duty}
                        tele={this.state.info.tele}
                        email={this.state.info.email} />
                    <Bolddivider />
                    <Selfsay title='项目说明' content={this.state.info.projectContent} />
                    <Bolddivider />
                    <Notice />
                    <Bolddivider />
                    <Comment />
                </Scrollbars>
            </div>
        );
    }
}