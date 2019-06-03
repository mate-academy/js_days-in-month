function validate(num) {
  return typeof (num) === 'number' && Number.isInteger(num);
}

function daysInMonth(month, year) {
  const promise = new Promise(resolve => {
    if(validate(month) && validate(year) && month >= 1 && month <= 12) {
      resolve({ month, year })
    } else {
      throw new Error('exception');
    }
  });

  promise
    .then(
      obj => {
        const { year, month } = obj;
        const daysInMonth = 32 - new Date(year, month - 1, 32).getDate();
        console.log(daysInMonth)
      },
    )
    .catch(error => console.log(error));
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
