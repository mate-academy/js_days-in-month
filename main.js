function daysInMonth(month, year) {

    if (!Number.isInteger(year) || !Number.isInteger(month) || month > 12) {
      throw new Error('exeption');
    }
    let daysInFeb = new Date(year, 1, 29).getDate();
    if (daysInFeb === 29 && month === 2) {
      return 29;
    } else {
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return daysInMonth[month - 1];
    }
}

