function daysInMonth(month, year) {
  try {
    if (!Number.isInteger(year) || !Number.isInteger(month) || month > 12) {
      throw new Error("Incorrect data: false date passed");
    }
        
    return new Date(year, month, 0).getDate();

  } catch(error) {
    return error.message;
  }
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception