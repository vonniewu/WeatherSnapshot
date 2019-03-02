import React from 'react';
import {windSpeedUnit, windGustUnit} from '../configs.js';

const TemperatureTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Time: ${label}`}</p>
        <p className="label">{`Temperature: ${payload[0].value}`}&#x2109;</p>
      </div>
    );
  }
  return null;
};

const PreciptationTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Time: ${label}`}</p>
        <p className="label">{`Chances of raining: ${payload[0].value}`}%</p>
        <p className="label">{`Humidity: ${payload[1].value}`}%</p>
      </div>
    );
  }
  return null;
};

const WindTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Time: ${label}`}</p>
        <p className="label">{`Wind speed: ${payload[0].value} ${windSpeedUnit}`}</p>
        <p className="label">{`Wind gust: ${payload[1].value} ${windGustUnit}`}</p>
      </div>
    );
  }
  return null;
};

export {
  TemperatureTooltip,
  PreciptationTooltip,
  WindTooltip
}
