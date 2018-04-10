import React , {Component} from 'react';
export default class Contactcard2 extends Component{
    static defaultProps={
        name:'乙',
        department:'运营部',
        duty:'主管',
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
                width:this.state.width*0.12,
                height:this.state.height*0.3,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                borderStyle:'solid',
                borderWidth:1,
                borderColor:'#e9e9e9',
                marginLeft:50,
                marginRight:50,
                marginBottom:10,
                marginTop:10,
                //backgroundColor:'red'
              }}>
              <div style={{
                  display:'flex',
                  width:this.state.width*0.12,
                  height:this.state.height*0.2,
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center',
              }}>
                <img style={{
                    width:this.state.width*0.12,
                    height:this.state.height*0.2,
                }} src={this.props.src} />
              </div>
              <div style={{
                  display:'flex',
                  width:this.state.width*0.15,
                  height:this.state.height*0.1,
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'flex-start',
              }}>
                <h style={{margin:5}}>{this.props.name}</h>
                <h style={{margin:5,fontSize:12,color:'grey'}}>{this.props.department+' '+this.props.duty}</h>
              </div>
            </div>
        );
    }
}