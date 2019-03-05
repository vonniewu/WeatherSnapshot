import {pressureUnit, windSpeedUnit, visibilityUnit, ozoneUnit} from './configs.js';

// Constants
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const DATA_FORMAT = ["json","xml","html"];
const UNITS_FORMAT= ["standard","metric","imperial"];

// Prettify time date
const getDateObj = dt => new Date(dt*1000);
const getHour = dt => getDateObj(dt).getHours();
const formatDtDate = dt => `${MONTHS[getDateObj(dt).getMonth()]} ${getDateObj(dt).getDate()}`;
const formatDtDay = dt => `${DAYS[getDateObj(dt).getDay()]}`;

function formatDtTime(dt) {
  var hour = getHour(dt);
  var newHour = hour !== 12 ? hour - 12 : hour;
  return hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : `${newHour} PM`;
}

// Prettify weather data
const formatTemperature = temperature => `${Math.round(temperature)}`;
const formatMoonPhase = moonPhase => `${moonPhase}`;
const formatDewPoint = dewPoint => `${Math.round(dewPoint)}`;
const formatPrecipitation = precipProbability => `${Math.round(precipProbability*100)}%`;
const formatHumidity = humidity => `${Math.round(humidity*100)}%`;
const formatPressure = pressure => `${Math.round(pressure)} ${pressureUnit}`;
const formatWindSpeed = windSpeed => `${windSpeed} ${windSpeedUnit}`;
const formatCloud = cloudCover => `${Math.round(cloudCover*100)}%`;
const formatUVIndex = uvIndex => `${uvIndex}`;
const formatVisibliity = visibility => `${visibility} ${visibilityUnit}`;
const formatOzone = ozone => `${Math.round(ozone)} ${ozoneUnit}`;

// Get animated Skycon Icons
const getSkycon = icon_id => icon_id.toUpperCase().replace(/[-]/g, '_');

export {
  formatDtDate,
  formatDtDay,
  formatDtTime,
  formatTemperature,
  formatMoonPhase,
  formatDewPoint,
  formatPrecipitation,
  formatHumidity,
  formatPressure,
  formatWindSpeed,
  formatCloud,
  formatUVIndex,
  formatVisibliity,
  formatOzone,
  getSkycon
}
