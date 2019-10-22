daysInMonth = function(month, year) {
  try {
    if (!Number.isInteger(year) || year <= 0) {
      throw new TypeError('year is not valid');
    }
    if (!Number.isInteger(month) || month <= 0 || month > 12) {
      throw new TypeError('month is not valid');
    }
    return new Date(year, month, 0).getDate();
  }
  catch (err){
    if (err.name === 'TypeError') {
      console.log(err.message);
    } else {
      throw err;
    }
  }
};

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
