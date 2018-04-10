import React , {Component} from 'react';
export default class Bolddivider extends Component{
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
                width:this.state.width*0.85,
                height:15,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'flex-start',
                backgroundColor:'#f5f5f5'
              }}>
              </div>
        );
    }
}