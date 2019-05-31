function daysInMonth(month, year) {
  try {
    if (!daysAmountInMonth(month, year)) {
      throw new TypeError("exeption");
    } 
      return daysAmountInMonth(month, year));
    } catch (error) {
      return error.message;
    }
}

function daysAmountInMonth(month, year) {
  if ((Number.isInteger(year)&& Number.isInteger(month)) && (year > 0 && month > 0)) {
    if (month <= 12) {
      const monthFirstDay = new Date(year, month - 1, 1);
      const nextMonthFirstDay = new Date(year, month, 1);
      const daysAmount = (nextMonthFirstDay.getTime() - monthFirstDay.getTime())/(3600000*24);
      return daysAmount;
    }
  }
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception