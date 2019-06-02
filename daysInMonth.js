'use strict';

function ErrorInvalidArguments(message = 'Not valid arguments of function') {
  this.message = message;
  this.name = 'NotValidArguments';
}

function daysInMonth(month, year) {
  const regForYear = /^(\+)?(19|20)[0-9]{2}$/;
  const regForMonth = /^(0?[1-9])|(1[0-2])$/;

  const validateArguments = () => {
    if (Number.isInteger(month) && regForMonth.test(month.toString())) {
      if (Number.isInteger(year) && regForYear.test((year.toString()))) {
        return true;
      }
    }
    return false;
  }

  if (validateArguments()) {
    month--;
    const date = new Date(year, month, 1);
    let daysAmount = 0;
    while (date.getMonth() === month) {
      daysAmount++;
      date.setDate(daysAmount + 1);
    }
    return daysAmount;
  }
  throw new ErrorInvalidArguments('Not valid arguments');
}

function logMyErrors(message, name) {
  console.log(`Error "${name}": ${message}.`);
}

try {
  const days = daysInMonth(0, 2000);
  console.log(days);
} catch (e) {
  logMyErrors(e.message, e.name);
}
