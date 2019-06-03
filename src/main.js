function getDaysInMonth(month, year) {
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

getDaysInMonth(5, 2019); // 31
getDaysInMonth(5, '2019'); // exception
getDaysInMonth(2, 2020); // 29
getDaysInMonth(2.2, 2020); // exception
getDaysInMonth(2, 2100); // 28
getDaysInMonth(13, 2100); // exception