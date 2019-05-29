function validateDate(month, year) {
	if( !Number.isInteger(month) 
		|| !Number.isInteger(year) 
		|| !(month >= 1 && month <= 12)) return false;
	
	return true;
}

function daysInMonth(month, year) {
	if(!validateDate(month, year)) throw "exception";
	
	return new Date(year, month, 0).getDate();
}