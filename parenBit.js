/*
Recursive. 
Given a string that contains a single pair of parenthesis, compute recursively a new string made of only of the parenthesis and their contents, so "xyz(abc)123" yields "(abc)".
*/

"use strict"

function parenBit(zab){
	// @parameter STRING Exo is a string, similar to 'z(a)b'
	// @returns STRING The '(a)' of z(a)b.
	
	function afterParens(ab){
		// @parameter STRING Endo is any chars occuring after '(' was detected. It includes the leading paren!
		// Whatever is passed in, will come back with the part after the ')' missing
		// @Parameter STRING '(a)b'
		// @Return STRING 'a)'
		ab = ab.slice(1);
		return ab;
	}

	// try{
	// } else {
	// }
	// catch (e){
	// 	let now = new Date();
	// 	console.log(e + ` at ${now}`);
	// } 
	return afterParens(zab);
}

console.log(parenBit("xyz(abc)123")); // "(abc)"
console.log(parenBit("x(hello)")); // "(hello)"
console.log(parenBit("(xy)1")); // "(xy)"