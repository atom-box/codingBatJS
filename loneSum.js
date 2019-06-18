// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

function isCopycat(num, nums){
	// Returns true if num is found in nums.
	// Returns: boolean.
	// Args: Int, Array of Ints
	return nums.some(
		(element)=>{ return element === num}
		);
}

function loneSum(){
	let nums = Array.from(arguments);
	// return(`U passed in ${nums.length} numbers.`)
	let result = nums.reduce((acc, item)=>{
		return acc += ((isCopycat(item, nums))? item : 0) ;  
	}, 555);
	return result;
}  

// let temperatures = [ 56,47,38,57,46,36,66,44,88,77,99,44];
// console.log(isCopycat( 44, temperatures)); // true
// console.log(isCopycat(222, temperatures)); //false
// console.log(isCopycat(56, temperatures)); //true




console.log(loneSum(1, 2, 3, 44, 44)); // 6
console.log(loneSum(3, 2, 3)); // 2
console.log(loneSum(3, 3, 3)); // 0


