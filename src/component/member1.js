import React, { Component } from 'react';
import { Progress } from 'antd';
export default class Member1 extends Component {
    static defaultProps = {
        name: '小王',
        company: 'I外包公司',
        //time: 4,
        pic: require('../pic/08.png'),
        color: 'black'
    };
    constructor(props) {
        super(props);
        this.state = {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.85,
                height: this.state.height * 0.1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderBottom:'solid',
                borderBottomColor:'#e9e9e9',
                borderBottomWidth:1
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.height * 0.1,
                    height: this.state.height * 0.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:this.state.height * 0.03
                }}>
                    <img style={{
                        width: this.state.height * 0.08,
                        height: this.state.height * 0.08,
                        borderRadius: this.state.height * 0.04,
                    }} src={this.props.pic}></img>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.height * 0.2,
                    height: this.state.height * 0.1,
                    flexDirection: 'column',
                    marginLeft: this.state.height * 0.03,
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.height * 0.2,
                        height: this.state.height * 0.05,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}>
                        <h style={{ color: 'black', fontWeight: 'bold' }}>{this.props.name}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.height * 0.2,
                        height: this.state.height * 0.05,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}>
                        <h style={{ color: 'black' }}>{this.props.company}</h>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85-this.state.height*0.39-this.state.width*0.1,
                    height: this.state.height * 0.1,
                    flexDirection: 'column',
                    marginLeft: this.state.height * 0.03,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    {/* <Progress percent={this.props.time/8*100} status="active" showInfo={false} /> */}
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width*0.1,
                    height: this.state.height * 0.1,
                    flexDirection: 'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <div style={{
                        width:0.02*this.state.height,
                        height:0.02*this.state.height,
                        borderRadius:0.01*this.state.height,
                        backgroundColor:this.props.color
                    }}></div>
                </div>
            </div>
        );
    }
}