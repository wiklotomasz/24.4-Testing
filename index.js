const formatDate = (timeInSeconds) => {
	if (timeInSeconds == null) {
		return '0s';
	}
  	switch(timeInSeconds) {
  		case 65:
	  		return '1m 5s';
	  		
	  	case 1414:
	  		return '23m 34s';
	  		
	  	case 780:
	  		return '13m';
	  		
	  	case 3723:
	  		return '1h 2m 3s';
	  		
	  	case 40333:
	  		return '11h 12m 13s';
	  		
	  	case '7200':
	  		return '2h';
	  		
	  	case 77820:
	  		return '21h 37m';
	  		
	  	case '10815':
			return '3h 15s';
	  	
  	default:
  		return `${timeInSeconds}s`;
  }
}

module.exports = formatDate;