import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

import { formatDtTime, formatTemperature } from '../../utils.js';
import { TemperatureTooltip } from '../CustomTooltips.js';

export default class TemperatureGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this._generateGraphDataList = this._generateGraphDataList.bind(this);
  }

  _generateGraphDataList() {
    const dataList = [];
    this.props.graphData.map((obj, index) => {
      const dataEntry = {
        name: formatDtTime(obj.time),
        temp: formatTemperature(obj.temperature)
      }
      dataList.push(dataEntry);
      return dataList;
    });

    this.setState({
      data: dataList
    });
  }

  componentDidMount() {
    this._generateGraphDataList();
  }

  render() {
    return (
      <ResponsiveContainer width='100%' height={400}>
      <AreaChart
        width={500}
        height={300}
        data={this.state.data}
        margin={{
          top: 10, right: 30, left: 15, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<TemperatureTooltip/ >} wrapperStyle={{ border:'1px solid #CCCCCC', backgroundColor: '#ffffff', padding: '10px' }} />
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" activeDot={true} />
      </AreaChart>
      </ResponsiveContainer>
    );
  }
}
