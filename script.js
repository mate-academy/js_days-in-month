function validate (num) {
  return typeof(num) === 'number' && Number.isInteger(num);
}

function daysInMonth (month, year) {
  const promise = new Promise ((resolve, reject) => {
    if (validate(month) && validate(year) && month >= 1 && month <= 12) {
      resolve({month, year});
    } else {
      reject('exception');
    }
  });

  promise.then(
    obj => {
      console.log(32 - new Date(obj.year, obj.month - 1, 32).getDate());
     },
    error => console.log(error)
  );
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
