function daysInMonth(month, year) {    
    try {
        if (year === Number || Number.isInteger(year)) {
            if (month === Number || Number.isInteger(month)) {
                if (month > 0 && month < 13) {
                    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                        if (month ===2) {
                            return 29;
                        }
                    } else if (month === 2) {
                        return 28;
                    } else {
                        return month % 2 === 0 ? 30 : 31;   
                    }
                }
            }
        }
        throw new Error();
    } catch (e) {
        return 'exception!'
    }
}
 

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception