// Given an array of ints, return the number of 9's in the array.

function itsNine(acc, item){
	// args: single integer
	// returns: 1 if arg is 9
	return acc + ((item == 9)? 1 : 0);
	// crucial part above is, parens around the shortcut logic or whatever that is called
}

function arrayCount9(nums){
	return nums.reduce(itsNine, 0);
}

console.log(arrayCount9([1, 2, 9])); // 1
console.log(arrayCount9([9, 1, null, 9])); // 2
console.log(arrayCount9([1, 9, 9, 3, 9])); // 3
console.log(arrayCount9([9, 1, 9, 9, 0, "shoe", 9])); // 2
