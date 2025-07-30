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
Create a function that takes an array containing only numbers and return the first element.

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