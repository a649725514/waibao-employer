import React , {Component} from 'react';
import  { Divider } from 'antd';
export default class Selfdivider extends Component{
    static defaultProps={
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
                width:this.state.width*0.8,
                height:this.state.height*0.08,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'flex-start',
              }}>
                <Divider />
              </div>
        );
    }
}