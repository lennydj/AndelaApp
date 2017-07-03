'use strict';

module.exports = {
function getPrimes(n) {
  var primeArray = [];
	if (typeof(n) != 'number' || n < 2) {
		return 'Enter a number greater than 2';
	}
	else {
	  if (n=== 2){
	    primeArray.push(2);
	  }
	 else if (n=== 3){
	    primeArray.push(2, 3);
	  }
	  else if (n=== 5){
	    primeArray.push(2, 3, 5);
	  }
	}
		for (var i = 2; i<n; i++){
		  if (i % 2 !== 0 && i % 3 !==0 && i% 5 !== 0 && Math.sqrt(i) % 1 !== 0){
		    primeArray.push(i);
		  }
		}
	  return primeArray;
	}