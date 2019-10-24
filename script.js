function daysInMonth(year, month) {
  try {
    if(Number.isInteger(year) && Number.isInteger(month) && month < 13 && month > 0) {
    const dateChecker = 32 - new Date(year, month - 1, 32).getDate();
    console.log(dateChecker);
    return dateChecker;
    }

    throw error;
  } catch (error) {
    return 'exception';
  }
}

daysInMonth(2020, 2);