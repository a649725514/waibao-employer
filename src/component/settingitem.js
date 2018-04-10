import React, { Component } from 'react';
export default class Settingitem extends Component {
    static defaultProps = {
        pic: null,
        title:''
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
                width: this.state.width * 0.15,
                height: this.state.width * 0.15,
                flexDirection: 'column',
                backgroundColor: 'rgb(92,172,238)',
                margin:this.state.height*0.05
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.15,
                    height: this.state.width * 0.1,
                    flexDirection: 'column',
                    backgroundColor: 'rgb(92,172,238)',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src={this.props.pic}></img>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.15,
                    height: this.state.width * 0.05,
                    flexDirection: 'column',
                    backgroundColor: 'rgb(92,172,238)',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}>
                    <h style={{
                        color:'white',
                        fontSize:20,
                        fontWeight:'bold'
                    }}>{this.props.title}</h>
                </div>
            </div>
        );
    }
}