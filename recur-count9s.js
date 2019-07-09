// Given an array of ints, return the number of 9's in the array.


function arrayCount9(nums){
	var sum = 0,
	piece = null,
	isNine = false;

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
		console.log(piece);
		return 1 + arrayCount9(nums);
	} else {
		return -1;
	}
}


console.log(arrayCount9([1, 2, 9])) // 1
console.log(arrayCount9([9, 1, null, 9, 0])) // 2
console.log(arrayCount9([9, 1, 9, 3, 9])) // 3

// Solved as recursive function