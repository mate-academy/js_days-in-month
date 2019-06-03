function daysInMonth(month, year) {
  try {
    if (!Number.isInteger(month) || !Number.isInteger(year) || month > 12) {
      throw new SyntaxError('exeption');
    }
    return console.log(new Date(year, month, 0).getDate());

  }
  catch (err) {
    console.log(err.message);
  }
}

daysInMonth(5, 2019);
daysInMonth(5, '2019');
daysInMonth(2, 2020);
daysInMonth(2.2, 2020);
daysInMonth(2, 2100);
daysInMonth(13, 2100); 
