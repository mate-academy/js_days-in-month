function daysInMonth(month, year) {
    try {
        if (!Number.isInteger(month) || !Number.isInteger(year) || month > 12) {
            throw 'exception';
        }
        return new Date(year, month, 0).getDate();
    } catch (e) {
        console.log(e);
    }
}

console.log(daysInMonth(2, 2020));
