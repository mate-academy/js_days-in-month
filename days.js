function getDaysInMonth(month, year) {
    if (!Number.isInteger(year) || month < 0 || !Number.isInteger(month) || month > 12) {
      throw new Error("Incorrect data");
    }
    return new Date(year, month, 0).getDate();
}

function catchWrapper(f) {
  return function(){
    try {
      const result = f.apply(this, arguments);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}

let daysInMonth = catchWrapper(getDaysInMonth);

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
daysInMonth(0, 2019); // exception
