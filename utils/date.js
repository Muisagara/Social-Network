const moment = require('moment');

const addDateSuffix = (date) => {
  let dateStr = date.toString();
  const lastChar = dateStr.charAt(dateStr.length - 1);

  if (lastChar === '1' && dateStr !== '11') {
    dateStr = `${dateStr}st`;
  } else if (lastChar === '2' && dateStr !== '12') {
    dateStr = `${dateStr}nd`;
  } else if (lastChar === '3' && dateStr !== '13') {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }

  return dateStr;
};

const formatTimestamp = (
  timestamp,
  { monthLength = 'short', dateSuffix = true } = {}
) => {
  const dateObj = moment(timestamp);
  const formattedMonth = dateObj.format(monthLength === 'short' ? 'MMM' : 'MMMM');
  const dayOfMonth = dateSuffix ? addDateSuffix(dateObj.format('D')) : dateObj.format('D');
  const year = dateObj.format('YYYY');
  let hour = dateObj.format('hh');
  const minutes = dateObj.format('mm');
  const periodOfDay = dateObj.format('A');

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
};

// Example usage:
const timestamp = Date.now();
console.log(formatTimestamp(timestamp));
