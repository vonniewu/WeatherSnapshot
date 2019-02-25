const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const DATA_FORMAT = ["json","xml","html"];
const UNITS_FORMAT= ["standard","metric","imperial"];

function convertDtToDate(dt_timestamp) {
  var date_obj = new Date(dt_timestamp*1000);
  var month = MONTHS[date_obj.getMonth()];
  var date = date_obj.getDate();
  var year = date_obj.getFullYear();
  return `${month} ${date}`;
}

function convertDtToDay(dt_timestamp) {
  var date_obj = new Date(dt_timestamp*1000);
  return DAYS[date_obj.getDay()];
}

export {
  convertDtToDate,
  convertDtToDay,
}
