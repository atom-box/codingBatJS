// Given an array of ints, return the number of 9's in the array.


function arrayCount9(nums){
	var sum = 0,
	piece = null;

	// checks digit for nine-ness
	function isNine(n) {
		if (n === 9){return true;} else {return false;}
	}
	if (typeof nums == 'string'){
		return -2;
	}
	if (nums.length < 1){
		return 0;
	} else if (nums.length > 0){
		piece = nums.shift();
		if (isNine(piece)){
			return 1 + arrayCount9(nums);
		} else if (!isNine(piece)) {
			return 0 + arrayCount9(nums);
			/*
				TODO REFACTOR TO NOT HAPPEN TWICE; MAKE A SUBFUNC.
			*/
		} else {
			return NaN;
		}
		return 1 + arrayCount9(nums);
	} else {
		return -1;
	}
}


console.log(arrayCount9([1, 2, 9])) // 1
console.log(`----`);
console.log(arrayCount9([9, 1, null, 9, 0])) // 2
console.log(`----`);

console.log(arrayCount9([9, 1, 0, 99, 9, 9, 9])) // 4

// Solved as recursive function
/* To solve things as recursive functions:

1) Your base case probably returns NADA.
2) Your other case may return RETURN 1 + recurs(nums)
3) You may pop off a piece, store it in a var, use it
4) If you went that route a CHECK FOR RAN OUT OF ROAD may be neccessary.
*/