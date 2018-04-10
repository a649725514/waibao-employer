import React, { Component } from 'react';
import Topbar from '../component/topbar';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    ArcSeries,
    RadialChart
} from 'react-vis';
import { curveCatmullRom } from 'd3-shape';
const PI = Math.PI;
export default class Piechart extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight
        })
    }
    render() {
        const BarSeries = VerticalBarSeries;
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.85,
                height: this.state.height,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Topbar title="工作统计" />
                <div></div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <XYPlot
                            xType="ordinal"
                            width={300}
                            height={300}
                            xDistance={100}
                        >
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis style={{
                                line: { stroke: 'grey' },
                            }} title="日期" position='start' />
                            <YAxis style={{
                                line: { stroke: 'grey' },
                            }} title="工作量" />
                            <BarSeries
                                color='rgb(92,172,238)'
                                className="vertical-bar-series-example"
                                data={[
                                    { x: 10, y: 5 },
                                    { x: 11, y: 7 },
                                    { x: 12, y: 6 },
                                    { x: 13, y: 4 },
                                    { x: 14, y: 3 },
                                    { x: 15, y: 8 },
                                    { x: 16, y: 5 },
                                ]} />
                        </XYPlot>
                        <h>{'近期每日发布任务数'}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <RadialChart
                            colorType={'literal'}
                            colorDomain={[0, 100]}
                            colorRange={[0, 10]}
                            margin={{ top: 100 }}
                            getLabel={d => d.name}
                            data={[
                                { angle: 1, color: '#89DAC1', name: '项目A', opacity: 0.2 },
                                { angle: 6, color: '#F6D18A', name: '项目B' },
                                { angle: 3, color: '#1E96BE', name: '项目C' },
                            ]}
                            labelsRadiusMultiplier={1.1}
                            labelsStyle={{ fontSize: 16, fill: '#222' }}
                            showLabels
                            style={{ stroke: '#fff', strokeWidth: 2 }}
                            width={400}
                            height={300} />
                        <h>{'近期参与项目'}</h>
                    </div>
                </div>
            </div>
        );
    }
}