function daysInMonth(month,year) {
  try {
    if (!Number.isInteger(year) || !Number.isInteger(month) || month > 12) {
      throw new SyntaxError ('exeption');
    }
    let daysInFeb = new Date(year, 1, 29).getDate();
    if (daysInFeb === 29) {
        const leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
        return leapYear[month - 1];
    } else {
      const noleapYear = [31,28,31,30,31,30,31,31,30,31,30,31];
      return noleapYear[month - 1];
    }    
  } catch(e) {
    console.log(e.message);
  } 
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
