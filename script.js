function validate (num) {
  return typeof(num) === 'number' && Number.isInteger(num);
}

function daysInMonth (month, year) {
  const promise = new Promise ((resolve, reject) => {
    validate(month) && validate(year) && month >= 1 && month <= 12 ? 
    resolve({month, year}) :
    reject('exception');
  });

  promise
  .then(
    obj => {
      console.log(32 - new Date(obj.year, obj.month - 1, 32).getDate());
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
