import React, { Component } from 'react';
import Topbar from '../component/topbar';
import { Input, DatePicker, Select, Tooltip, Icon, Tag, Transfer, Button } from 'antd';
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
export default class Changeproject extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            projectName: '',
            tags: ['JavaScript'],
            inputVisible: false,
            inputValue: '',
            tags1: [],
            inputVisible1: false,
            inputValue1: '',
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
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    }
    handleClose1 = (removedTag) => {
        const tags1 = this.state.tags1.filter(tag => tag !== removedTag);
        console.log(tags1);
        this.setState({ tags1 });
    }

    showInput1 = () => {
        this.setState({ inputVisible1: true }, () => this.input1.focus());
    }

    handleInputChange1 = (e) => {
        this.setState({ inputValue1: e.target.value });
    }

    handleInputConfirm1 = () => {
        const state = this.state;
        const inputValue1 = state.inputValue1;
        let tags1 = state.tags1;
        if (inputValue1 && tags1.indexOf(inputValue1) === -1) {
            tags1 = [...tags1, inputValue1];
        }
        console.log(tags1);
        this.setState({
            tags1,
            inputVisible1: false,
            inputValue1: '',
        });
    }
    saveInputRef = input => this.input = input
    saveInputRef1 = input1 => this.input1 = input1
    onChangeProjectName = (e) => {
        this.setState({ projectName: e.target.value });
    }
    onChange(value, dateString) {
        console.log(dateString)
    }
    handleChange(value) {
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
                <Topbar title="添加项目" />
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
                                <h>{'项目周期'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <RangePicker
                                    defaultValue={[moment('2018/04/01', dateFormat), moment('2018/04/01', dateFormat)]}
                                    format={dateFormat}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.3,
                                height: this.state.height * 0.06,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}>
                                <Button type="primary">修改项目</Button>
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
                                <Button type="danger">删除项目</Button>
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
                                <h>{'技能方向'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.06,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}>
                                {tags.map((tag, index) => {
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag key={tag} closable={index !== -1} afterClose={() => this.handleClose(tag)}>
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </Tag>
                                    );
                                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                                })}
                                {inputVisible && (
                                    <Input
                                        ref={this.saveInputRef}
                                        type="text"
                                        size="small"
                                        style={{ width: 78 }}
                                        value={inputValue}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleInputConfirm}
                                        onPressEnter={this.handleInputConfirm}
                                    />
                                )}
                                {!inputVisible && (
                                    <Tag
                                        onClick={this.showInput}
                                        style={{ background: '#fff', borderStyle: 'dashed' }}
                                    >
                                        <Icon type="plus" /> New Tag
                                </Tag>
                                )}
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
                                <h>{'项目说明'}</h>
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
                            //height: this.state.height * 0.3,
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
                                <h>{'阶段定义'}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.7,
                                //height: this.state.height * 0.3,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                {tags1.map((tag, index) => {
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag key={tag} closable={index !== -1} afterClose={() => this.handleClose1(tag)}>
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </Tag>
                                    );
                                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                                })}
                                {inputVisible1 && (
                                    <Input
                                        ref={this.saveInputRef1}
                                        type="text"
                                        size="small"
                                        style={{ width: 78 }}
                                        value={inputValue1}
                                        onChange={this.handleInputChange1}
                                        onBlur={this.handleInputConfirm1}
                                        onPressEnter={this.handleInputConfirm1}
                                    />
                                )}
                                {!inputVisible1 && (
                                    <Tag
                                        onClick={this.showInput1}
                                        style={{ background: '#fff', borderStyle: 'dashed' }}
                                    >
                                        <Icon type="plus" /> 阶段名称
                                </Tag>
                                )}
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}