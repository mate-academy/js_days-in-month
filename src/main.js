function getDaysInMonth(month, year) {
  try {
    if (Number.isInteger(year) && Number.isInteger(month) && month  <= 12) {
      let daysInMonth = 33 - new Date(year, month - 1, 33).getDate();
      return daysInMonth;
    } else {
      throw new Error("Incorrect");
    }
  } catch(error) {
      return error.message;
  }
}
getDaysInMonth(5, 2019); // 31
getDaysInMonth(5, '2019') // exception
getDaysInMonth(2, 2020.2); // 29
getDaysInMonth(2.2, 2020) // exception
getDaysInMonth(2, 2100); // 28
getDaysInMonth(13, 2100); // exception

