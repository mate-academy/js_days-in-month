const daysInMonth = (month, year) => {
    try {
        if (isMonthValid(month) && isYearValid(year)) {
            return calculateDaysInMonth(month, year);
        }
    } catch (e) {}
    return 'exception';
};

const isMonthValid = (month) => {
    return typeof month === 'number' && /^\+?\d+$/.test(month) && (month >= 1 && month <= 12);
};

const isYearValid = (year) => {
    return typeof year === 'number' && /^\+?\d+$/.test(year);
};

const calculateDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};

console.log(daysInMonth(5, 2019)); // 31
console.log(daysInMonth(5, '2019')); // exception
console.log(daysInMonth(2, 2020)); // 29
console.log(daysInMonth(2.2, 2020)); // exception
console.log(daysInMonth(2, 2100)); // 28
console.log(daysInMonth(13, 2100)); // exception
