const u = [1, 1, 1, [3, 4, [8]], [5]];
const w = [2,[77, 200,[100, 35],[3.14, 2.7, [1965, 1960], null, undefined]]];
const x = [33, 45, 78];

function sumNested(arr) { 
	let result = 0;
	// sum up all the numbers in array
	for (let i = 0; i < arr.length; i++) {
		// if element is a nested array, sum all of its elements
		if (typeof arr[i] == 'number') { 
			result += arr[i];

		} else if (Array.isArray(arr[i])) {
			result += sumNested(arr[i]);
		} else {
			continue;
		} 
	}
	return result; 
}

console.log("---Simple array X=156 totalled: " + sumNested(x));
console.log("---Multi-array U=23 totalled: " + sumNested(u));
console.log("---Strange Multi-array W=4344.84 totalled: " + sumNested(w));
console.log("---Done.");

/*   
Dec 1, 2018  Evan Genest
This problem asks you to sum up all of the numbers within an array, but the array may also contains other arrays with numbers. This is what we call a nested array. For example:
[1, 1, 1, [3, 4, [8]], [5]]
 */

/*
To do:
handle edge case of 'four' or '3a'
*/

/*
Coding Diary reflection:
Should revisit this.  You could never get the recursive loop right on your own.
Should determine a verbal rule: when is recursie the right strategy?
*/