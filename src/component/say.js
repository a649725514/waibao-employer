import React, { Component } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
export default class Say extends Component {
    static defaultProps = {
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
                height: this.state.height * 0.2,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.65,
                    height: this.state.height * 0.2,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextArea placeholder="我也说一句" autosize={{ minRows: 5, maxRows: 5 }} />
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.05,
                    height: this.state.height * 0.2,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <img style={{marginBottom:10}} src={require('../icon/paper-plane.svg')}></img>
                </div>
            </div>
        );
    }
}