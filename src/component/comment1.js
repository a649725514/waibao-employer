import React, { Component } from 'react';
import Say from './say';
import Msg from './msg';
import Member from './member';
import Task from './task';
import Resource from './resource';
import Resource1 from './resource1';
import Selfdivider from './divider';
import { Upload, Button } from 'antd';
import { curveCatmullRom } from 'd3-shape';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';
const { ipcRenderer } = window.electron;

export default class Comment1 extends Component {
    static defaultProps = {
    };
    constructor(props) {
        super(props);
        this.state = {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            display1: 'flex',
            display2: 'none',
            display3: 'none',
            display4: 'none',
            display5: 'none',
            color1: 'rgb(26,145,255)',
            color2: 'black',
            color3: 'black',
            color4: 'black',
            color5: 'black',
            borderBottomColor1: 'white',
            borderBottomColor2: '#e9e9e9',
            borderBottomColor3: '#e9e9e9',
            borderBottomColor4: '#e9e9e9',
            display:'flex',
            borderBottomColor5: '#e9e9e9',
        };
        ipcRenderer.on('camera-message-reply', function (event, arg) {
        })
    }

    press1() {
        this.setState({
            display1: 'flex',
            display2: 'none',
            display3: 'none',
            display4: 'none',
            display5: 'none',
            color1: 'rgb(26,145,255)',
            color2: 'black',
            color3: 'black',
            color4: 'black',
            color5: 'black',
            borderBottomColor1: 'white',
            borderBottomColor2: '#e9e9e9',
            borderBottomColor3: '#e9e9e9',
            borderBottomColor4: '#e9e9e9',
            borderBottomColor5: '#e9e9e9',
        })
    }
    press2() {
        this.setState({
            display1: 'none',
            display2: 'flex',
            display3: 'none',
            display4: 'none',
            display5: 'none',
            color1: 'black',
            color2: 'rgb(26,145,255)',
            color3: 'black',
            color4: 'black',
            color5: 'black',
            borderBottomColor1: '#e9e9e9',
            borderBottomColor2: 'white',
            borderBottomColor3: '#e9e9e9',
            borderBottomColor4: '#e9e9e9',
            borderBottomColor5: '#e9e9e9',
        })
    }
    press3() {
        if (this.props.stars > 1) {
            ipcRenderer.send('camera-message', 'ping')
        }
        this.setState({
            display1: 'none',
            display2: 'none',
            display3: 'flex',
            display4: 'none',
            display5: 'none',
            color1: 'black',
            color2: 'black',
            color3: 'rgb(26,145,255)',
            color4: 'black',
            color5: 'black',
            borderBottomColor1: '#e9e9e9',
            borderBottomColor2: '#e9e9e9',
            borderBottomColor3: 'white',
            borderBottomColor4: '#e9e9e9',
            borderBottomColor5: '#e9e9e9',
        })
    }
    press4() {
        this.setState({
            display1: 'none',
            display2: 'none',
            display3: 'none',
            display4: 'flex',
            display5: 'none',
            color1: 'black',
            color2: 'black',
            color3: 'black',
            color4: 'rgb(26,145,255)',
            color5: 'black',
            borderBottomColor1: '#e9e9e9',
            borderBottomColor2: '#e9e9e9',
            borderBottomColor3: '#e9e9e9',
            borderBottomColor4: 'white',
            borderBottomColor5: '#e9e9e9',
        })
    }
    press5() {
        this.setState({
            display1: 'none',
            display2: 'none',
            display3: 'none',
            display4: 'none',
            display5: 'flex',
            color1: 'black',
            color2: 'black',
            color3: 'black',
            color4: 'black',
            color5: 'rgb(26,145,255)',
            borderBottomColor1: '#e9e9e9',
            borderBottomColor2: '#e9e9e9',
            borderBottomColor3: '#e9e9e9',
            borderBottomColor4: '#e9e9e9',
            borderBottomColor5: 'white',
        })
    }
    click() {
        alert('以开始审核！')
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.85,
                flexDirection: 'column'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: this.state.height * 0.06,
                    backgroundColor: 'rgb(245,245,245)'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: this.state.width * 0.1,
                        height: this.state.height * 0.06,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: this.state.width * 0.01,
                        borderBottom: 'solid',
                        borderBottomColor: this.state.borderBottomColor1,
                        borderBottomWidth: 1
                    }} onClick={() => this.press1()}>
                        <h style={{ color: this.state.color1 }}>{'评论'}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: this.state.width * 0.1,
                        height: this.state.height * 0.06,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: this.state.width * 0.01,
                        borderBottom: 'solid',
                        borderBottomColor: this.state.borderBottomColor2,
                        borderBottomWidth: 1
                    }} onClick={() => this.press2()}>
                        <h style={{ color: this.state.color2 }}>{'成员'}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: this.state.width * 0.1,
                        height: this.state.height * 0.06,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: this.state.width * 0.01,
                        borderBottom: 'solid',
                        borderBottomColor: this.state.borderBottomColor3,
                        borderBottomWidth: 1
                    }} onClick={() => this.press3()}>
                        <h style={{ color: this.state.color3 }}>{'附件'}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: this.state.width * 0.1,
                        height: this.state.height * 0.06,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: this.state.width * 0.01,
                        borderBottom: 'solid',
                        borderBottomColor: this.state.borderBottomColor4,
                        borderBottomWidth: 1
                    }} onClick={() => this.press4()}>
                        <h style={{ color: this.state.color4 }}>{'工作成果'}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: this.state.width * 0.1,
                        height: this.state.height * 0.06,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: this.state.width * 0.01,
                        borderBottom: 'solid',
                        borderBottomColor: this.state.borderBottomColor5,
                        borderBottomWidth: 1
                    }} onClick={() => this.press5()}>
                        <h style={{ color: this.state.color5 }}>{'工作详情'}</h>
                    </div>
                </div>
                <div style={{
                    display: this.state.display1,
                    flexDirection: 'column',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Say />
                    
                </div>
                <div style={{
                    display: this.state.display2,
                    flexDirection: 'column',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Member name='马化腾' company='浙大网新' time='7' pic={'http://120.78.74.75:8010/10000/1.jpg'}/>
                    <Member name='高德伟' company='东软集团' time='8' pic={'http://120.78.74.75:8010/20001/1.jpg'}/>

                </div>
                <div style={{
                    display: this.state.display3,
                    flexDirection: 'column',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Upload>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.06,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}>
                            <img style={{
                                marginLeft: 20,
                                marginRight: 20,
                            }} src={require('../icon/file_upload.svg')}></img>
                            <h style={{
                                color: 'rgb(0,122,255)'
                            }}>{'上传附件'}</h>
                        </div>
                    </Upload>
                    <Resource display={this.state.display} />
                </div>
                <div style={{
                    display: this.state.display4,
                    flexDirection: 'column',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: this.state.width * 0.85,
                        height: this.state.height * 0.06,
                    }}>
                        <Button style={{marginLeft:20,backgroundColor:'rgb(132,195,85)',width:this.state.width*0.1}} onClick={()=> {alert("审核已通过")}} ><h style={{color:'white'}}>通过</h></Button>
                        <Button style={{marginLeft:20,width:this.state.width*0.1}} type='danger'>不通过</Button>
                    </div>
                    <Resource1 name='视频.mp4' comefrom='马化腾'/>
                    <Resource1 name='视频说明.dcox' comefrom='马化腾'/>
                </div>
                <div style={{
                    display: this.state.display5,
                    flexDirection: 'column',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <XYPlot
                        width={300}
                        height={300}>
                        <HorizontalGridLines />
                        <VerticalGridLines />
                        <XAxis title="X Axis" position="start" />
                        <YAxis title="Y Axis" />
                        <LineSeries
                            className="first-series"
                            data={[
                                { x: 1, y: 3 },
                                { x: 2, y: 5 },
                                { x: 3, y: 15 },
                                { x: 4, y: 12 }
                            ]} />
                    </XYPlot>
                </div>
                </div>
                );
            }
}