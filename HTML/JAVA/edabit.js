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

/*5) Return Something to Me!
Write a function that returns the string "something" joined with a space " " and the given argument a.

Examples
giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane*/
function giveMeSomething(a) {
	var x="something" + " "+a;
	return x;
	
}
var y=giveMeSomething("is better than nothing");
console.log(y);
/* 6)Find the Perimeter of a Rectangle
Create a function that takes length and width and finds the perimeter of a rectangle.

Examples
findPerimeter(6, 7) ➞ 26
*/
function findPerimeter(l, w) {
	var x=2*l + 2*w;
	return x;
	
}
var result=findPerimeter(6,7);
console.log(result);
/* 7)Basketball Points
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.


Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29*/
function points(twoPointers, threePointers) {
	return 2*twoPointers + 3*threePointers;
	
}
var R=points(7,5);
console.log(R);
/* 8)Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14*/
function triArea(b, h) {
	return 1/2*b*h;
	
}
var area=triArea(7,4);
console.log(area);

/*9) Sum of Polygon Angles
Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

Examples
sumPolygon(3) ➞ 180

sumPolygon(4) ➞ 360

sumPolygon(6) ➞ 720
Notes
n will always be greater than 2.
The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon. */
function sumPolygon(n) {
	return (n - 2) *180;
	
}
var r=sumPolygon(6);
console.log(r);