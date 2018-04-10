import React, { Component } from 'react';

export default class Msg2 extends Component {
    static defaultProps = {
        title: '清明节放假通知',
        date: '3月5日',
        msg: '本公司清明节全体员工放假一天，特此通知。'
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
            <div className="Shadow1" style={{
                display: 'flex',
                width: this.state.width * 0.6,
                height: this.state.height * 0.18,
                marginTop: 10,
                marginBottom: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#e9e9e9',
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.6,
                    height: this.state.height * 0.06,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.3,
                        height: this.state.height * 0.06,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        margin: 10,
                    }}>
                        <h>{this.props.title}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.3,
                        height: this.state.height * 0.06,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        //margin:10,
                    }}>
                        <h style={{ color: '#63B8FF', marginRight: 20 }}>{this.props.date}</h>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.6,
                    height: 1,
                    backgroundColor: '#e9e9e9'
                }}>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.6,
                    height: this.state.height * 0.12 - 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    margin: 10,
                    marginLeft: 30
                }}>
                    <h style={{ color: 'grey', marginRight: 20 }}>{this.props.msg}</h>
                </div>
            </div>
        );
    }
}