export const formatDate = (machineDate: string) => {
  const inputDate = new Date(machineDate);
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, '0');

  month = month.toString().padStart(2, '0');

  return `${date}/${month}/${year}`;
};

export const msToHMS = (ms: number) => {
  let seconds = ms / 1000;
  seconds = seconds % 3600;

  const minutes = parseInt((seconds / 60).toString())
    .toString()
    .padStart(2, '0');

  seconds = seconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
