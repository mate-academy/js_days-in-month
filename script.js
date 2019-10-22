function daysInMonth(month, year) {
  try {
    if (Number.isInteger(month) && (month >= 1 && month <= 12) && Number.isInteger(year)) {
     return new Date(year, month, 0).getDate();
    }

    throw new Error("parameter year or month isn't correct");
  } catch (error) {
    return error;
  }
}