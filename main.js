function daysInMonth(month,year) {
  try {
    if ((typeof(year) === "string") || (month > 12) ||  (month % 1 !== 0) ) {
      throw new SyntaxError('Emtpy array');
    }
    
  monthNum =  new Date(Date.parse(month +" 1,"+year)).getMonth()+1
    return new Date(year, monthNum, 0).getDate();
    }

    catch(e ){
      console.log("Год в нечисловом формате, месяц больше 12 или не целое число");
      }
}
