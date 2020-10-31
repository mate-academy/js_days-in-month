function daysInMonth(month, year) {
  try {
    if (Number.isInteger(year) && 
        Number.isInteger(month) && 
        month <= 12 && month > 0) {

      return new Date(year, month, 0).getDate();
    }
    throw error;
  } catch (err) {
    
    return 'exception';
  }
}

console.log(daysInMonth(2, 2019));
