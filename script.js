function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

function daysInMonth(month, year) {
    const isPositiveInt = ((number) => {
        return (Number.isInteger(number) && number > 0);
    });
    const getDays = ((month, year) => {
        return new Date(year, month, 0).getDate();
    });

    if (isPositiveInt(month) && isPositiveInt(year)) {
        if (month > 0 && month < 13) {
            return getDays(month, year);

        } else {
            throw new UserException('month should be in range from 1 to 12');
        }
    } else {
        throw new UserException('incorrect input data');
    }
}

try {
    console.log(daysInMonth(2, 2100));
} catch (e) {
    console.log('\x1b[41m\x1b[37m%s\x1b[0m', e.name);
    console.log(e.message);
}
