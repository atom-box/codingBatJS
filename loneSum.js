// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

function isCopycat(num, nums){
	// Returns: boolean.
	// Args: Int, Array of Ints
	return nums.some(
		(element)=>{ return element === num}
		);
}

let temperatures = [ 56,47,38,57,46,36,66,44,88,77,99,44];
console.log(isCopycat( 44, temperatures)); // true
console.log(isCopycat(222, temperatures)); //false
console.log(isCopycat(56, temperatures)); //true

// loneSum(1, 2, 3) // 6
// loneSum(3, 2, 3) // 2
// loneSum(3, 3, 3) // 0




