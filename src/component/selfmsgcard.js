import React , {Component} from 'react';
import phone from '../icon/phone.svg';
import envelope from '../icon/envelope.svg';
import { Link } from "react-router-dom";
export default class Selfmeaasge extends Component{
    static defaultProps={
        name:'张三',
        company:'A外包公司',
        src:require('../pic/01.png'),
        src1:null,
        src2:null,
        email:'',
        tel:''
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
                height:this.state.height*0.45,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#5CACEE'
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
                        alignItems:'flex-end',
                    }}>
                        <Link to='/contact'>
                        <img style={{
                            marginLeft:20
                        }} src={this.props.src1}></img>
                        </Link>
                    </div>
                    <div style={{
                        display:'flex',
                        width:this.state.width*0.85/2,
                        height:this.state.height*0.05,
                        flexDirection:'row',
                        justifyContent:'flex-end',
                        alignItems:'flex-end',
                    }}>
                        <img style={{
                            marginRight:20
                        }} src={this.props.src2}></img>
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    width:this.state.width*0.85,
                    height:this.state.height*0.2,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <div style={{
                        display:'flex',
                        width:this.state.height*0.15,
                        height:this.state.height*0.15,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        borderStyle:'solid',
                        borderWidth:1,
                        borderColor:'#e9e9e9',
                        borderRadius:this.state.height*0.15/2
                    }}>
                        <img style={{
                            width:this.state.height*0.15,
                            height:this.state.height*0.15,
                            borderRadius:this.state.height*0.15/2
                        }} src={require('../pic/02.png')}>
                        </img>
                    </div>
                </div> 
                <div style={{
                    display:'flex',
                    width:this.state.width*0.85,
                    height:this.state.height*0.2,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <h style={{
                        color:'white',
                        fontSize:20,
                        marginBottom:10
                    }}>{this.props.name}</h>
                    <h style={{
                        color:'white',
                        marginBottom:10
                    }}>{this.props.company}</h>
                    <div style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <img src={phone}></img>
                        <h style={{color:'white',marginLeft:20,marginRight:40}}>{this.props.tel}</h>
                        <img src={envelope} style={{marginLeft:40,marginRight:20}}></img>
                        <h style={{color:'white'}}>{this.props.email}</h>
                    </div>
                </div> 
            </div>
        );
    }
}