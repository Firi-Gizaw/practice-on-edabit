/* */

function addition(a,b){
	if(isNaN(a)||isNaN(b)){
		return "pls enter only numbers";
	}
	var sum=a+b;
	return sum;
}
var x=addition(-7,9);
console.log(x);

/*
2)Create a function that takes an array containing only numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500*/
function g(x){
	if(isNaN(x[0])||isNaN(x[1])||isNaN(x[2])){
		return "error";
	}
	var h=x[0];
	return h;
}
var y=g([1,-9,3]);
console.log(y);

/* 3)Convert Age to Days
Create a function that takes the age in years and returns the age in days.

Examples
calcAge(65) ➞ 23725*/
function calcAge(age) {
	if(isNaN(age)){
		return "pls enter num";
	}
	else if(age<0){
		return "enter positive num";
	}
	
		else{
			var AGE=age*365;
			return AGE;
			// or wecan say return age*365;
		}
	
}
	var days=calcAge(65);
	console.log(days);
/* 4)Return the Remainder from Two Numbers
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3  */
    function remainder(x, y) {
	if(isNaN(x)||isNaN(y)){
		return "pls enter num";
	}
	
	return x%y;
	
}
var z= remainder(10,3);
console.log(z);