function daysInMonth(month, year) {
  try {
    if (Number.isInteger(month) && Number.isInteger(year) && month <= 12 && month > 0) {
      const dayInMonth = new Date(year, month, 0).getDate(); 
      return dayInMonth; 
    }

    throw error; 
  } catch (error) {
    return 'exception'; 
  }
}

