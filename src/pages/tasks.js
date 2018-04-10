import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Bolddivider from '../component/bolddivider';
import { Scrollbars } from 'react-custom-scrollbars';
import Selfsay from '../component/selfsay';
import Taskcard from '../component/taskcard';
import Comment from '../component/comment1';
export default class Tasks extends Component {
    constructor(props){
        super(props);
        this.state=({
          width:document.body.clientWidth,
          height:document.body.clientHeight,
          info: props.match.params
        })
    }

    render() {
        return (
            <div style={{
                display:'flex',
                width:this.state.width*0.85,
                height:this.state.height,
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center'
            }}>
                <Topbar title="任务" />
                <Scrollbars style={{width:this.state.width*0.85,height:this.state.height*0.94}}>
                    <Taskcard
                        taskname={this.state.info.taskname}
                        date={this.state.info.date} 
                        project={this.state.info.project} 
                        stars={this.state.info.stars} 
                        counts={this.state.info.counts} 
                        time={this.state.info.time}
                        date0={this.state.info.date0}
                        date1={this.state.info.date1}
                        date2={this.state.info.date2}
                        date3={this.state.info.date3}
                        name={this.state.info.name}
                        duty={this.state.info.duty}
                        tele={this.state.info.tele}
                        email={this.state.info.email}/>
                    <Bolddivider />
                    <Selfsay title='任务说明' />
                    <Bolddivider />
                    <Comment />
                </Scrollbars>
            </div>
        );
    }
}