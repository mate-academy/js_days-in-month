const daysInMonth = (month, year) => {
  try {
    if (!isMonthValid(month) || !isYearValid(year)) {
      throw new Error();
    }
    return calculateDaysInMonth(month, year);

  } catch (e) {
    return 'exception';
  }

};

const isMonthValid = (month) => {
  return Number.isInteger(month) && (month >= 1 && month <= 12);
};

const isYearValid = (year) => {
  return Number.isInteger(year);
};

const calculateDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

console.log(daysInMonth(5, 2019)); // 31
console.log(daysInMonth(5, '2019')); // exception
console.log(daysInMonth(2, 2020)); // 29
console.log(daysInMonth(2.2, 2020)); // exception
console.log(daysInMonth(2, 2100)); // 28
console.log(daysInMonth(13, 2100)); // exception
