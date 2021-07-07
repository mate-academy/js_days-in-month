'use strike'

function daysInMonth(month, year) {

  try {
    if (!Number.isInteger(year) || !Number.isInteger(month) 
    || month > 12 || month <= 0) {
      throw new Error('exception');
    }

    return new Date(year, month, 0).getDate();
  } catch (error) {
    return error;
  }
}

daysInMonth(15, '2019');