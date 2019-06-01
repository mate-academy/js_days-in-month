function daysInMonth(month, year) {
  let isInt = () => [...arguments].every(i => Number.isInteger(i));
  try {

    if (isInt() && month < 12 && month > 0) {
      console.log(new Date(year, month, 0).getDate())
      return;
    }
  
    throw new TypeError("exeption");
  
  } catch (err) {
    console.log(err);
  }
}
daysInMonth(5, 2019); // 31
daysInMonth(5, "2019"); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
