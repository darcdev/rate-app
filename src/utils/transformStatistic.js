const transformStatistic = (value) => {
  const convertNumber = Number((value / 1000).toFixed(1));
  return Number.isInteger(convertNumber)
    ? convertNumber.toFixed(0)
    : convertNumber;
};

export default transformStatistic;
