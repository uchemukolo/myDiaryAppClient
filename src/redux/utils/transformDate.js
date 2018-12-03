const transformDate = (dateStr) => {
  const date = dateStr ? new Date(dateStr) : new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let day = date.getDate().toString();
  if (day < 10) day = `0${day}`;
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString();
  return { day, month, year };
};

export default transformDate;
