let nums = [];
let struct = {};
let reflect = x =>{
	return x;
}

console.log(nums instanceof Array);
console.log(nums instanceof Object);
console.log(struct instanceof Object);
console.log(struct instanceof Array);
console.log(reflect instanceof Function);
console.log(reflect instanceof Object);


var x = new String("foo");
var y = "bar";

/**Much love to the No Starch press and Nicholas Zakas.
This is the most vanilla of vanilla JS guides.
Real fundamentals.*/


/**
From Nicolas Zakas, Ch 1
@mistergenest February 13, 2018
*/

/**
You can create new objects by using
the new operator
or
the REFERENCE LITERAL
var x = new String("foo");
var y = "bar";
*/