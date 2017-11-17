// a function to find the exponent of a number by another number

function power(a,b){
 if (b == 0){
 	return 1;

 }
else 
	return a* power(a,b-1);


 	}