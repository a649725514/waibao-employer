import React , {Component} from 'react';
export default class Contactcard extends Component{
    static defaultProps={
        name:'张三',
        company:'A外包公司',
        skills:['JavaScript','CSS','html5'],
        src:require('../pic/01.png')
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
                width:this.state.width*0.23,
                height:this.state.height*0.2,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'flex-start',
                borderStyle:'solid',
                borderWidth:1,
                borderColor:'#e9e9e9',
                marginLeft:50,
                marginRight:50,
                marginBottom:5,
                marginTop:5
              }}>
              <div style={{
                  display:'flex',
                  width:this.state.width*0.08,
                  height:this.state.height*0.2,
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center',
              }}>
                <img style={{
                    width:this.state.width*0.08,
                    height:this.state.height*0.2,
                }} src={this.props.src} />
              </div>
              <div style={{
                  display:'flex',
                  width:this.state.width*0.15,
                  height:this.state.height*0.2,
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'flex-start',
              }}>
                <h style={{margin:5}}>{this.props.name}</h>
                <h style={{margin:5,fontSize:12,color:'grey'}}>{this.props.company}</h>
                <h style={{margin:5}}>{"技能"}</h>
                <h style={{margin:5,fontSize:12,color:'grey'}}>{this.props.skills.map((skill)=>{
                    return(skill+' ')
                })}</h>
              </div>
            </div>
        );
    }
}