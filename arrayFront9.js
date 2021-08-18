/*
morning warmup coding exercise
@mistergenest
*/
const arrayFront9 =(nums)=>{
	let stop = nums.length < 4 ? nums.length : 3;
	let flag = false;
	for (let i=0; i <= stop  ; i++){
		if (nums[i] !== 9){
			continue;
		}
		flag = true;
	}
	return flag;
}





// TESTS:
console.log(arrayFront9([1, 2, 9, 3, 4])); // true
console.log(arrayFront9([1, 2, 3, 4, 9])); // false
console.log(arrayFront9([1, 2, 3, 4, 5])); // false
console.log(arrayFront9([9])); // true
console.log(arrayFront9([ 9, 9])); // true
console.log(arrayFront9([1])); // false
console.log(arrayFront9([])); // false


/*
Given an array of ints, return true if one of the first 4 elements in 
the array is a 9. The array length may be less than 4.

arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false
*/
