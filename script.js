function daysInMonth(month, year) {
  try {
    if (Number.isInteger(month) && Number.isInteger(year) && month > 0 && month < 13) {
      return new Date(year, month, 0).getDate();
      }

    throw new Error()

  } catch (err) {
    return 'exception';
  }
}
