import React , {Component} from 'react';
import  { Rate } from 'antd';
export default class Resource extends Component{
    static defaultProps={
        pic:require('../icon/file-movie-o.svg'),
        name:'功能概要.docx',
        comefrom:'刘德华',
        stars:3,
        date:'2018.4.15',
        display:'flex'
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
                display:this.props.display,
                width:this.state.width*0.85,
                height:this.state.height*0.06,
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center',
                borderBottom:'solid',
                borderBottomColor:'#e9e9e9',
                borderBottomWidth:1
              }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.height * 0.06,
                        height: this.state.height * 0.06,
                        flexDirection: 'column',
                        justifyContent:'center',
                        alignItems:'center',
                        marginLeft:this.state.height * 0.03
                    }}>
                        <img src={this.props.pic}></img>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.2,
                        height: this.state.height * 0.06,
                        flexDirection: 'column',
                        justifyContent:'center',
                        alignItems:'center',
                        marginLeft:this.state.height * 0.03
                    }}>
                        <h style={{color:'black'}}>{this.props.name}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.2,
                        height: this.state.height * 0.06,
                        flexDirection: 'column',
                        justifyContent:'center',
                        alignItems:'center',
                        marginLeft:this.state.height * 0.03
                    }}>
                        <h style={{color:'black'}}>{this.props.comefrom}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.2,
                        height: this.state.height * 0.06,
                        flexDirection: 'column',
                        justifyContent:'center',
                        alignItems:'center',
                        marginLeft:this.state.height * 0.03
                    }}>
                        <Rate count={3} disabled defaultValue={this.props.stars} />
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.2,
                        height: this.state.height * 0.06,
                        flexDirection: 'column',
                        justifyContent:'center',
                        alignItems:'center',
                        marginLeft:this.state.height * 0.03
                    }}>
                        <h style={{color:'black'}}>{this.props.date}</h>
                    </div>
              </div>
        );
    }
}