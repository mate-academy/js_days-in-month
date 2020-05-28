const daysInMonth = function(Month, Year) {
  try {
    if ((Month === parseInt(Month)) && (Year === parseInt(Year)) && (Month >= 1 && Month <= 12)) {
      return (new Date(Year, Month) - new Date(Year, Month - 1)) / 86400000;
    }
    throw "exception";
  } catch(error) {
    console.log(error);
  }
};