import React, { Component } from 'react';
import Topbar from '../component/topbar';
import { Input, DatePicker, Select, Tooltip, Icon, Tag, Transfer, Button, InputNumber, Upload } from 'antd';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars';
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const { TextArea } = Input;
const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
    });
}
const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);
export default class Changetask extends Component {
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
                <Topbar title="修改任务" />
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
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.3,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}>
                                <Button type="primary">修改任务</Button>
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
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.3,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}>
                                <Button type="danger">删除任务</Button>
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
                    </Scrollbars>
                </div>
            </div>
        );
    }
}