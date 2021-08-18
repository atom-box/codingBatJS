// Write a function that, given an array length 1 or more of ints, returns the difference between the largest and smallest values in the array. 

function findBiggest(nums){
	return nums.reduce(
		function(a, b){return (a > b)? a:b}  );
}

function findSmallest(nums){
	return nums.reduce((a, b)=>{return (a<b)? a:b}  );
}

function bigDiff(nums){
	return findBiggest(nums) - findSmallest(nums);
}

console.log(bigDiff([10, 3, 5, 6])); // 7
console.log(bigDiff([7, 2, 10, 9])); // 8
console.log(bigDiff([0, -3, 0, 2])); // 5
console.log(bigDiff([7, 2, "froggiest", 9])); // expected: 5 actual: 0
console.log(bigDiff([2, NaN, 7, 2])); // 5
console.log(bigDiff([2, 10, null, 2])); // wanted: 8 actual ten
console.log(bigDiff([1, undefined, null, -1])); // expected: 2, actual 1

/*
Do this with reduce two times.  Max, min.  

*/