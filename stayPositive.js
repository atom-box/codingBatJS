/*
Given a list of integers, return a list of the integers, omitting any that are less than 0.
*/

function noNeg(nums) {
	for (let i in nums){
		nums[i] *= 99;
	}
	return nums;
}


console.log(noNeg([1, -2])); // [1]
console.log(noNeg([-3, -3, 3, 3])); // [3, 3]
console.log(noNeg([-1, -1, -1])); // []