import {format} from 'date-fns'

export const formatTimeStamp = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = format(date, 'dd/MM/yyyy');
  const formattedTime = format(date, 'HH:mm a');

  return {date: formattedDate, time: formattedTime};
};


