import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import {formatDtTime, formatPrecipitation} from '../../utils.js';
import { PreciptationTooltip } from '../CustomTooltips.js';

export default class PrecipitationGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

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
        precip: Math.round(obj.precipProbability*100),
        humidity: Math.round(obj.humidity*100)
      }
      dataList.push(dataEntry);
      return dataList;
    });
    console.log("PRECIP dataList: ", dataList);

    this.setState({
      data: dataList
    });
  }

  componentDidMount() {
    this._generateGraphDataList();
  }

  render() {
    console.log("PrecipitationGraph.js newGraphData: ", this.props.newGraphData);
    return (
      <ResponsiveContainer width='100%' height={400}>
      <BarChart
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
        <Legend />
        <Tooltip content={<PreciptationTooltip />} wrapperStyle={{ border:'1px solid #CCCCCC', backgroundColor: '#ffffff', padding: '10px' }} />
        <Bar name="Chances of Raining" dataKey="precip" fill="#8884d8" />
        <Bar name="Humidity" dataKey="humidity" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
