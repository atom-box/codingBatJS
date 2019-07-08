// Given an array of ints, return the number of 9's in the array.

function itsNine(acc, item){
	// args: single integer
	// returns: 1 if arg is 9
	console.log(`Acc ${acc} -- Item ${item}`)
	return acc + ( item === 9 )? 1 : 0;
}


function arrayCount9(nums){
	return nums.reduce(itsNine);
}

console.log(arrayCount9([1, 2, 9])); // 1
console.log(arrayCount9([1, 9, 9])); // 2
console.log(arrayCount9([1, 9, 9, 3, 9])); // 3