function daysInMonth(month, year) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let yearIsLeap;

  try {
    if (!Number.isInteger(month) || !Number.isInteger(year) ||
      Number(month) <= 0 || Number(year) <= 0 || Number(month) > 12) {
      throw new Error();
    }

    if (month !== 2) {
      return days[month - 1];
    } else {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
    }
  } catch (error) {
    return 'exception';
  }
}

console.log(daysInMonth(5, 2019));    // 31
console.log(daysInMonth(5, '2019'));  // 'exception'
console.log(daysInMonth(2, 2020));    // 29
console.log(daysInMonth(2.2, 2020));  // 'exception'
console.log(daysInMonth(2, 2100));    // 28
console.log(daysInMonth(13, 2100));   // 'exception'
