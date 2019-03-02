import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import {formatDtTime, formatTemperature} from '../../utils.js';


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
    this.props.newGraphData.map((obj, index) => {
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
    console.log("Example.js newGraphData: ", this.props.newGraphData);

    return (
      <ResponsiveContainer width='100%' height={400}>
      <LineChart
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
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      </ResponsiveContainer>
    );
  }
}
