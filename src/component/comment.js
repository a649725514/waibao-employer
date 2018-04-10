import React, { Component } from 'react';
import Say from './say';
import Msg from './msg';
import Member from './member';
import Task from './task';
import Resource from './resource';
import Selfdivider from './divider';
export default class Comment extends Component {
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
            color1: 'rgb(26,145,255)',
            color2: 'black',
            color3: 'black',
            color4: 'black',
            borderBottomColor1:'white',
            borderBottomColor2:'#e9e9e9',
            borderBottomColor3:'#e9e9e9',
            borderBottomColor4:'#e9e9e9',
        };
    }
    press1() {
        this.setState({
            display1: 'flex',
            display2: 'none',
            display3: 'none',
            display4: 'none',
            color1: 'rgb(26,145,255)',
            color2: 'black',
            color3: 'black',
            color4: 'black',
            borderBottomColor1:'white',
            borderBottomColor2:'#e9e9e9',
            borderBottomColor3:'#e9e9e9',
            borderBottomColor4:'#e9e9e9',
        })
    }
    press2() {
        this.setState({
            display1: 'none',
            display2: 'flex',
            display3: 'none',
            display4: 'none',
            color1: 'black',
            color2: 'rgb(26,145,255)',
            color3: 'black',
            color4: 'black',
            borderBottomColor1:'#e9e9e9',
            borderBottomColor2:'white',
            borderBottomColor3:'#e9e9e9',
            borderBottomColor4:'#e9e9e9',
        })
    }
    press3() {
        this.setState({
            display1: 'none',
            display2: 'none',
            display3: 'flex',
            display4: 'none',
            color1: 'black',
            color2: 'black',
            color3: 'rgb(26,145,255)',
            color4: 'black',
            borderBottomColor1:'#e9e9e9',
            borderBottomColor2:'#e9e9e9',
            borderBottomColor3:'white',
            borderBottomColor4:'#e9e9e9',
        })
    }
    press4() {
        this.setState({
            display1: 'none',
            display2: 'none',
            display3: 'none',
            display4: 'flex',
            color1: 'black',
            color2: 'black',
            color3: 'black',
            color4: 'rgb(26,145,255)',
            borderBottomColor1:'#e9e9e9',
            borderBottomColor2:'#e9e9e9',
            borderBottomColor3:'#e9e9e9',
            borderBottomColor4:'white',
        })
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
                        <h style={{ color: this.state.color3 }}>{'任务'}</h>
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
                        <h style={{ color: this.state.color4 }}>{'资源'}</h>
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
                    <Msg />
                </div>
                <div style={{
                    display: this.state.display2,
                    flexDirection: 'column',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Member />
                </div>
                <div style={{
                    display: this.state.display3,
                    flexDirection: 'column',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Task />
                    <Selfdivider />
                </div>
                <div style={{
                    display: this.state.display4,
                    flexDirection: 'column',
                    width: this.state.width * 0.85,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Resource />
                </div>
            </div>
        );
    }
}