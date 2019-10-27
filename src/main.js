const daysInMonth = function(Month, Year) {
  try {
    if ((Month === parseInt(Month)) && (Year === parseInt(Year)) && (Month >= 1 && Month <= 12)) {
      if ((Month == 2) && ((Year % 4 == 0) && (Year % 100 != 0)) || (Year % 400 == 0)) {
        return 29;
      }
      switch (Month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:          
        case 12:
          return 31;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
        case 2:
          return 28;
      }
    }
    throw "exception";
  } catch(error) {
    console.log(error);
  }
};