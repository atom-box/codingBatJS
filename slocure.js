/*Write a function THAT RETURNS A FUNCTION. Notice the scope  */
/*   See "Closures" page 125, Javascript Pocket Reference */

// CRAZY:  USING CONSTANT HERE DOESNT AFFECT LATER SUBSEQUENT ew-SCOPE
const s = "global scope"

function check1() {
	let s = "local scope here";
	function sayScope() {return s;}
	// DON'T FORGET THE FOLLOWING!
	return sayScope;
}

function check2(){
	let s = "local scope also";
	function sayScope(){
		return s;
	}
	return sayScope();
}


console.log(s);
console.log(check1()());
console.log(check2());
