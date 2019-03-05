import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer
} from 'recharts';

import { formatDtTime } from '../../utils.js';
import { WindTooltip } from '../CustomTooltips.js';

export default class WindGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

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
        windSpeed: obj.windSpeed,
        windGust: obj.windGust
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
      <LineChart
        width={500}
        height={400}
        data={this.state.data}
        margin={{
          top: 10, right: 30, left: 15, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<WindTooltip />} wrapperStyle={{ border:'1px solid #CCCCCC', backgroundColor: '#ffffff', padding: '10px' }} />
        <Legend />
        <Line name="Wind Speed" type="monotone" dataKey="windSpeed" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line name="Wind Gust" type="monotone" dataKey="windGust" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    );
  }
}
