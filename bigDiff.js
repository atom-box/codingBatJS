// Write a function that, given an array length 1 or more of ints, returns the difference between the largest and smallest values in the array. 

function findBiggest(nums){
	return nums.reduce(
		function(a, b){return (a > b)? a:b}  );
}

function findSmallest(nums){
	return nums.reduce((a, b)=>{return (a<b)? a:b}  );
}



console.log(findBiggest([10, 3, 5, 6])); // 10
console.log(findBiggest([7, 2, 11, 9])); // 11
console.log(findBiggest([12, 10, 7, 2])); // 12
console.log(findSmallest([3, 10, 4, 5, 6])); // 3
console.log(findSmallest([7, 2, 11, 9])); // 2
console.log(findSmallest([12, 10, 7, 2])); // 2


// bigDiff([10, 3, 5, 6]) // 7
// bigDiff([7, 2, 10, 9]) // 8
// bigDiff([2, 10, 7, 2]) // 8

/*
Do this with reduce two times.  Max, min.  

*/