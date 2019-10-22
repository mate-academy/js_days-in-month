function daysInMonth(month, year) {
  try {
    if (Number.isInteger(month) && month < 13 && Number.isInteger(year)) {
      const days= new Date(year, month, 0).getDate();
      return days;
    }

    throw new Error();
  } catch (err) {
    return 'exception';
  }
}

console.log(daysInMonth(5, 2019));// 31
console.log(daysInMonth(5, '2019'));// exception
console.log(daysInMonth(2, 2020));// 29
console.log(daysInMonth(2.2, 2020));// exception
console.log(daysInMonth(2, 2100));// 28
console.log(daysInMonth(13, 2100));// exception
