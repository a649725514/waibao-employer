import React , {Component} from 'react';
import  { Rate } from 'antd';
import { Link } from "react-router-dom";
export default class Task extends Component{
    static defaultProps={
        task:"任务a",
        uploader: {},
        project:"项目B",
        time:'8',
        stars:2,
        startDate:null,
        endDate:null,
        date0: ' ',
        date1: ' ',
        date2: ' ',
        date3: ' ',
        renwu:'/tasks'
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
          <Link to={this.props.renwu
             + `/${this.props.date0}`
             + `/${this.props.date1}`
             + `/${this.props.date2}`
             + `/${this.props.date3}`
             + `/${this.props.project}`
             + `/${this.props.endDate!=null?this.props.endDate:'未知'}`
             + `/${this.props.task}`
             + `/${this.props.stars}`
             + `/${this.props.time}`
             + `/${this.props.uploader!=null?this.props.uploader.name:'未知'}`
             + `/${this.props.uploader!=null?this.props.uploader.offer:'未知'}`
             + `/${this.props.uploader!=null?this.props.uploader.tel:'未知'}`
             + `/${this.props.uploader!=null?this.props.uploader.email:'未知'}`
             + `/`
            }
                >
            <div style={{
                display:'flex',
                width:this.state.width*0.8,
                height:this.state.height*0.12,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                //backgroundColor:'red'
              }}>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.8,
                  height:this.state.height*0.04,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'flex-start',
                }}>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    //backgroundColor:'yellow',
                  }}>
                    <h style={{fontSize:15,marginLeft:10,color:'black'}}>{this.props.task}</h>
                  </div>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-end',
                    marginRight:30
                  }}>
                    <Rate count={3} disabled defaultValue={this.props.stars} />
                  </div>
                </div>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.8,
                  height:this.state.height*0.04,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'flex-start',
                }}>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    //backgroundColor:'yellow',
                  }}>
                    <h style={{marginLeft:10,color:'black'}}>发布者：{this.props.uploader!=null?this.props.uploader.name:"未知"}</h>
                  </div>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    marginRight:30
                  }}>
                    <h style={{color:'black'}}>所属项目：{this.props.project}</h>
                  </div>
                </div>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.8,
                  height:this.state.height*0.04,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'flex-start',
                }}>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    //backgroundColor:'yellow',
                  }}>
                    <h style={{marginLeft:10,color:'black'}}>工作量：{this.props.time}</h>
                  </div>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-end',
                    marginRight:30
                  }}>
                    <h style={{color:'black'}}>{(this.props.startDate==null?'未知':this.props.startDate.slice(0,10)) + '-' + (this.props.endDate==null?'未定':this.props.endDate.slice(0,10))}</h>
                  </div>
                </div>
              </div>
            </Link>
        );
    }
}