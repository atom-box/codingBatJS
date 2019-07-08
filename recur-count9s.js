// Given an array of ints, return the number of 9's in the array.


function arrayCount9(nums){
	var sum = 0,
	num = 0;

	while (nums.length > 0){
		num = nums.shift();
		sum += (num == 9)? num : 0;
		console.log(`Length of array is ${nums.length}`);	
	}
	return sum;
}


console.log(arrayCount9([1, 2, 9])) // 1
console.log(arrayCount9([9, 1, null, 9, 0])) // 2
console.log(arrayCount9([9, 1, 9, 3, 9])) // 3

// Solved as recursive function