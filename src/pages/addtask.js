import React, { Component } from 'react';
import Topbar from '../component/topbar';
import { Input, DatePicker, Select, Tooltip, Icon, Tag, Transfer, Button, InputNumber, Upload } from 'antd';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";

const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const { TextArea } = Input;
const mockData = [   {
    key: "10000",
    title: "马化腾",
    description: "18100178922"
},
{
    key: "20001",
    title: "高德伟",
    description: "18100178922"
},
{
    key: "20002",
    title: "霍建华",
    description: "18100178922"
},
{
    key: "20003",
    title: "张开涛",
    description: "18100178922"
},
{
    key: "20004",
    title: "李林峰",
    description: "18100178922"
},
{
    key: "20005",
    title: "霍斯特曼",
    description: "18100178922"
},
{
    key: "20006",
    title: "雷布斯",
    description: "18100178922"
},
{
    key: "20007",
    title: "李彦宏",
    description: '18100178922'
},
{
    key: "11121",
    title: "丁磊",
    description: "18100178922"
},
{
    key: "22222",
    title: '陈奕迅',
    description: "18100178922"
},
{
    key: "22212",
    title: "李天",
    description: "18100178922"
},
{
    key: "2222222",
    title: "洪金宝",
    description: '18100178922'
},
{
    key: "33333",
    title: "约翰",
    description: "18100178922"
}
];
const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    },
    defaultFileList: [{
        uid: 1,
        name: 'xxx.png',
        status: 'done',
        reponse: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
    }, {
        uid: 2,
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
    }, {
        uid: 3,
        name: 'zzz.png',
        status: 'error',
        reponse: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
    }],
};
// for (let i = 0; i < 20; i++) {
//     mockData.push({
//         key: i.toString(),
//         title: `content${i + 1}`,
//         description: `description of content${i + 1}`,
//     });
// }
const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);
export default class Addtask extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            projectName: '',
        })
    }
    handleChange1 = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    }

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    }

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    }
    onChangeProjectName = (e) => {
        this.setState({ projectName: e.target.value });
    }
    onChange(value, dateString) {
        console.log(dateString)
    }
    onChange1(value) {
        console.log('changed', value);
    }
    onChange2(value, dateString) {
        console.log(dateString)
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    handleChange2(value) {
        console.log(`selected ${value}`);
    }
    render() {
        const { projectName } = this.state;
        const { tags, inputVisible, inputValue } = this.state;
        const { tags1, inputVisible1, inputValue1 } = this.state;
        const state = this.state;
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.85,
                height: this.state.height,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Topbar title="添加任务" />
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <Scrollbars style={{
                        display: 'flex',
                        width: this.state.width * 0.85,
                        height: this.state.height * 0.94,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.06,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: this.state.height * 0.04,
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.1,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: this.state.width * 0.04
                            }}>
                                <h>{'标题'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <Input
                                    ref={node => this.userNameInput = node}
                                    placeholder="任务名称"
                                    value={projectName}
                                    onChange={this.onChangeProjectName}
                                />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.06,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: this.state.height * 0.04,
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.1,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: this.state.width * 0.04
                            }}>
                                <h>{'所属项目'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <Select defaultValue="所属项目" style={{ width: 120 }} onChange={this.handleChange2}>
                                    <Option value="虹软智包平台">虹软智包平台</Option>
                                    <Option value="项目二">项目二</Option>
                                </Select>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.3,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}>
                                <Link to="/main">
                                    <Button type="primary" >发布任务</Button>
                                </Link>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.06,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: this.state.height * 0.04,
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.1,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: this.state.width * 0.04
                            }}>
                                <h>{'工作量'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <InputNumber min={0} max={8} defaultValue={0} onChange={this.onChange1} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.06,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: this.state.height * 0.04,
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.1,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: this.state.width * 0.04
                            }}>
                                <h>{'截止日期'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <DatePicker onChange={this.onChange2} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.06,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: this.state.height * 0.04,
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.1,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: this.state.width * 0.04
                            }}>
                                <h>{'安全级别'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <Select defaultValue="安全级别" style={{ width: 120 }} onChange={this.handleChange}>
                                    <Option value="高">高</Option>
                                    <Option value="中">中</Option>
                                    <Option value="低">低</Option>
                                </Select>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.2,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: this.state.height * 0.04,
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.1,
                                height: this.state.height * 0.2,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: this.state.width * 0.04
                            }}>
                                <h>{'任务说明'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.2,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <TextArea placeholder="" autosize={{ minRows: 5, maxRows: 5 }} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.3,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: this.state.height * 0.04,
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.1,
                                height: this.state.height * 0.3,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: this.state.width * 0.04
                            }}>
                                <h>{'添加成员'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.7,
                                height: this.state.height * 0.3,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}>
                                <Transfer
                                    dataSource={mockData}
                                    titles={['Source', 'Target']}
                                    targetKeys={state.targetKeys}
                                    selectedKeys={state.selectedKeys}
                                    onChange={this.handleChange1}
                                    onSelectChange={this.handleSelectChange}
                                    onScroll={this.handleScroll}
                                    render={item => item.title}
                                />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            height: this.state.height * 0.3,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: this.state.height * 0.04,
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.1,
                                height: this.state.height * 0.3,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: this.state.width * 0.04
                            }}>
                                <h>{'附件'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.7,
                                height: this.state.height * 0.3,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Upload
                                    </Button>
                                </Upload>
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}