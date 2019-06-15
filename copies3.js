/* copies3.js
 Challenge: Given a list of strings, return a list where each string is replaced by 3 copies of the string concatenated together. 
 Evan Genest
 June 15, 2019 
 */
"use strict";

let multify = (sum, item) =>{
// Accept a string.
// Return a string that is 3x the first)
	const FACTOR = 3;
	for (let i = FACTOR; i > 0; i--){
		sum += item;
	};
	return sum;
}


function copies3 (items){
	// Accept an array.
	// Return an array where each item was tripled.
	return items.reduce(multify, [])
}

console.log(multify('', 'carter'));
console.log(multify('', 'z'));
console.log(multify('', 'leek'));


console.log(copies3(["a", "bb", "ccc"])); // ["aaa", "bbbbbb", "ccccccccc"]
console.log(copies3(["24", "a", ""])); // ["242424", "aaa", ""]
console.log(copies3(["hello", "there"])); // ["hellohellohello", "theretherethere"]


