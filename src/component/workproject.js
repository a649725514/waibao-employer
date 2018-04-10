import React , {Component} from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
export default class Workproject extends Component{
    static defaultProps={
        projects: null
    };
    constructor(props){
		super(props);
		this.state={
			width:document.body.clientWidth,
            height:document.body.clientHeight
		};
    }
    render(){
        return (
            <div style={{
                display:'flex',
                width:this.state.width*0.85,
                //height:this.state.height*0.2,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
              }}>
              <div style={{
                  display:'flex',
                  width:this.state.width*0.85,
                  height:this.state.height*0.05,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
              }}>
                <div style={{
                    display:'flex',
                    width:this.state.width*0.85/2,
                    height:this.state.height*0.05,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                }}>
                    <h style={{marginLeft:20}}>参与项目</h>
                </div>
                <div style={{
                    display:'flex',
                    width:this.state.width*0.85/2,
                    height:this.state.height*0.05,
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    alignItems:'center',
                }}>
                    <img style={{marginRight:20}}></img>
                </div>
              </div>
              <div style={{
                  width:this.state.width*0.85,
                  height:1,
                  backgroundColor:'#e9e9e9'
              }}>
              </div>
              <div style={{
                  display:'flex',
                  width:this.state.width*0.85,
                  //height:this.state.height*0.15,
                  flexDirection:'row',
                  justifyContent:'flex-start',
                  alignItems:'flex-start',
                  margin:20,
                  marginLeft:60
              }}>
                <Button style={{margin:20}} type="primary">项目A</Button>
                <Button style={{margin:20}} type="dashed">项目B</Button>
                <Button style={{margin:20}} type="danger">项目C</Button>
                <Button style={{margin:20}} >项目D</Button>
              </div>
              
            </div>
        );
    }
}