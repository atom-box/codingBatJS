/* copies3.js
 Challenge: Given a list of strings, return a list where each string is replaced by 3 copies of the string concatenated together. 
 Evan Genest
 June 15, 2019 
 */
"use strict";

let multify = (item) =>{
// Accept a string.
// Return a string that is 3x the first)
	const FACTOR = 3;
	let tripledWord = '';
	for (let i = FACTOR; i > 0; i--){
		tripledWord += item;
	};
	return tripledWord;
}


function copies3 (inItems){
	// Accept an array.
	// Return an array where each item was tripled.
	let outItems = [];
	outItems = inItems.map(multify);
	return outItems;
}

console.log(copies3(["a", "bb", "ccc"])); // ["aaa", "bbbbbb", "ccccccccc"]
console.log(copies3(["24", "a", ""])); // ["242424", "aaa", ""]
console.log(copies3(["hello", "there"])); // ["hellohellohello", "theretherethere"]


