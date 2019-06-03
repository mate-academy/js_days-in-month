# Days in month
GH-Pages https://sherjlok15.github.io/js_days-in-month/

Create a function called `daysInMonth` that returns the number of days in the given month of the given year. If any of the arguments provided is not a positive integer, or if the month exceeds 12, the function should throw an exception. Sample usage:

```js
daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
```
