/**
IRONCHEF this Challenge:
1. Incorporate ternary shift syntax
2. Build in a push button to DOM
	field
	button
	out
3. Handle all data (and funcs?) in a page 50 object
*/

/** My pseudocode!
let  hasClump = (nums)=>{
	if arraylength 2orless return false
	if 0, 1, 2 clumpy return true
	unshift by one
	pass array recursively	
}; 
*/

let  hasClump = (nums)=>{
	let [a, b, c] = nums.slice(0,3);
	if (nums.length < 3){
		return false;  // ARRAY TOO SHORT
	}
	if (c - b <= 2  && b - a <=2){
		return true;   // FOUND A CLUSTER
	}
	nums.shift();		
	return (false || hasClump(nums)); //  RECUR!
}



let testNums = [];
console.log(`result for ${testNums} is ${hasClump(testNums)}\n&&&&&&&&&\n&&&&&&&&&`); // false
testNums = [3, 4];
console.log(`result for ${testNums} is ${hasClump(testNums)}\n&&&&&&&&&\n&&&&&&&&&`); // false
testNums = [2, 14, 14, 49, 51, 51];
console.log(`result for ${testNums} is ${hasClump(testNums)}\n&&&&&&&&&\n&&&&&&&&&`); // false


/**
SCORESCLUMP exercise:
https://codingbat.com/prob/p194530
Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.
Test data:
scoresClump([3, 4, 5]) → true
scoresClump([3, 4, 6]) → false
scoresClump([1, 3, 5, 5]) → true
*/

/**
Based on Lucky8srecursive.js you did: the way to not initialize is
1 always take the whole thing, but at the end
when you call the recursion
call it on some degraded state.
For an array, this could mean the array operates ever on the first position
and keeps passing a smaller array that's been unshifted.

LESSON LEARNED:

The pattern here has three return statements.
The over and over call of recursion must look like this:
	RETURN false  ||  recurs(nums)

*/