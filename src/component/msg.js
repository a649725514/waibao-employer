import React, { Component } from 'react';

export default class Msg extends Component {
    static defaultProps = {
        user: "匿名",
        situation: "优秀/良好/一般",
        comefrom: "任务A/B/C",
        pic: null,
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
                width: this.state.width * 0.7,
                height: this.state.height * 0.18,
                marginTop: 10,
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#e9e9e9',
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.height * 0.13,
                    height: this.state.height * 0.18,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //backgroundColor:'yellow'
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.height * 0.13 - 10,
                        height: this.state.height * 0.13 - 10,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderRadius: this.state.height * 0.13 / 2 - 5,
                        borderColor: '#e9e9e9',
                    }}>
                        <img style={{
                            width: this.state.height * 0.13 - 10,
                            height: this.state.height * 0.13 - 10,
                            //borderWidth: 1,
                            borderRadius: this.state.height * 0.13 / 2 - 5,
                            //borderColor: '#e9e9e9',
                        }} src={this.props.pic}></img>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.height * 0.1,
                        height: this.state.height * 0.05,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {this.props.comefrom}
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 - this.state.height * 0.13,
                    height: this.state.height * 0.18,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //backgroundColor:'red'
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.7 - this.state.height * 0.13,
                        height: this.state.height * 0.05,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.7 / 2 - this.state.height * 0.13 / 2,
                            height: this.state.height * 0.05,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}>
                            <h style={{ marginLeft: 20 }}>{this.props.user}</h>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.7 / 2 - this.state.height * 0.13 / 2,
                            height: this.state.height * 0.05,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}>
                            <h style={{ color: '#63B8FF', marginRight: 20 }}>回复</h>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.7 - this.state.height * 0.13,
                        height: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5'
                    }}>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.7 - this.state.height * 0.13,
                        height: this.state.height * 0.05,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        //backgroundColor:'yellow'
                    }}>
                        <h style={{ marginLeft: 20 }}>{this.props.situation}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.7 - this.state.height * 0.13,
                        height: this.state.height * 0.05,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <h style={{ marginRight: 20 }}>5分钟前</h>
                    </div>
                </div>
            </div>
        );
    }
}