

function daysInMonth(month, year) {
    try {
        if (month > 12 || month <= 0 || !Number.isInteger(month) || !Number.isInteger(year)){
            throw new Error();
        }
        console.log(new Date(year, month, 0).getDate());
    } catch (error) {
        console.log('exception');
    }

}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception