// just writing a getter-setter

function sum(nums) {
	let keepGoing = nums.length,
	tally = 0;
	while (keepGoing--){
		console.log('Index is ' + keepGoing + 'Number to add is ' + nums[keepGoing]);
		tally += nums[keepGoing];
	}
}

console.log(sum([3, 10])); // 13
console.log(sum([44, 3, 3])); // 50
console.log(sum([1, 0, 1])); 
