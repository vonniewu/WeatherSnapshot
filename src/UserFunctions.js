const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const DATA_FORMAT = ["json","xml","html"];
const UNITS_FORMAT= ["standard","metric","imperial"];


function fetchData(url) {
  const json_response = fetch(url).then(function(response) {
    console.debug("fetchData... JSON response:", response);
    // Shorthand to check for an HTTP 2xx response status.
    // See https://fetch.spec.whatwg.org/#dom-response-ok
    if (response.ok) {
      return response;
    }
    // Raise an exception to reject the promise and trigger the outer .catch() handler.
    // By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
    throw Error(response.statusText);
  })
  .then(response => {response.json()});
  return json_response;
}

function convertDtToDate(dt_timestamp) {

  // Create a new JavaScript Date object based on the timestamp
  var date_obj = new Date(dt_timestamp*1000);
  var month = MONTHS[date_obj.getMonth()];
  var date = date_obj.getDate();
  var year = date_obj.getFullYear();

  // Will display time in MM/DD/YYYY format
  return `${month} ${date}, ${year}`;
}

function convertDtToDay(dt_timestamp) {

  // Create a new JavaScript Date object based on the timestamp
  var date_obj = new Date(dt_timestamp*1000);
  return DAYS[date_obj.getDay()];
}

export {
  fetchData,
  convertDtToDate,
  convertDtToDay,
}
