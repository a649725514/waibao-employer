import React, { Component } from 'react';
import { Steps } from 'antd';
import 'antd/dist/antd.css';
const Step = Steps.Step;
export default class Workexp extends Component {
    static defaultProps = {
        exp: []
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
                //height:this.state.height*0.2,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.05,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        height: this.state.height * 0.05,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <h style={{ marginLeft: 20 }}>工作经历</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        height: this.state.height * 0.05,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <img style={{ marginRight: 20 }}></img>
                    </div>
                </div>
                <div style={{
                    width: this.state.width * 0.85,
                    height: 1,
                    backgroundColor: '#e9e9e9'
                }}>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    //height:this.state.height*0.15,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    margin: 20,
                    marginLeft: 60
                }}>
                    <Steps direction="vertical" current={0}>
                        {this.props.exp.map((comp) => {
                            console.log(comp);
                            return (
                                <Step title={comp} description="2017-12-25" />
                            )
                        })}

                    </Steps>
                </div>

            </div>
        );
    }
}