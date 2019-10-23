'use strict'

const daysInMonth = (month, year) => {
  try {
    if (month > 12 || month <= 0 || !Number.isInteger(month) || !Number.isInteger(year)) {
      throw new Error();
    }
    return new Date(year, month, 0).getDate();
  } catch (error) {
    return 'exception';
  }
};