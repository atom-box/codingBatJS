/*Write a function THAT RETURNS A FUNCTION. Notice the scope  */

let s = "global scope"

function check1() {
	let s = "local scope";
	function sayScope() {return s;}
	// DON'T FORGET THE FOLLOWING!
	return sayScope;
}

console.log(check1()());