function getDaysInMonth(year, month) {
  try {
    if (!Number.isInteger(year) && Number.isInteger(month) && month <= 12) {
      throw new Error('incorrrect');
    };

    let daysInMonth = 33 - new Date(year, month - 1, 33).getDate();
    return (daysInMonth);
  } catch (err) {
      return err.message;
  }
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception