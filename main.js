function daysInMonth(month, year) {
  try {
    if (Number.isInteger(year) && Number.isInteger(month) && month <= 12) {
      let days;
      switch (month) {
        case 2:
          let leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
          days = leapYear ? 29 : 28;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          days = 30;
          break;
        default:
          days = 31;

      }
      return days;

    }
    throw error;
  } catch (err) {
    return 'exception';
  }
}

console.log(daysInMonth(2, 2020));