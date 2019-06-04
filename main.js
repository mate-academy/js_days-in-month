function daysInMonth(m, y) {
  if (!/^\d{4}$/.test(y) || !/^\d{1,2}$/.test(m) || m > 12) {
    return 'exception';
  }
  return new Date(y, m, 0).getDate();
}

daysInMonth(5, 2019);
daysInMonth(5, '2019');
daysInMonth(2, 2020);
daysInMonth(2.2, 2020);
daysInMonth(2, 2100);
daysInMonth(13, 2100);
