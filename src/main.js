const daysInMonth = function(Month, Year) {
  try {
    if ((Month === parseInt(Month)) && (Year === parseInt(Year)) && (Month >= 1 && Month <= 12)) {
      return (new Date(Year, Month, 0) - new Date(Year, Month - 1, 0)) / 86400000;
    }
    throw "exception";
  } catch(error) {
    console.log(error);
  }
};