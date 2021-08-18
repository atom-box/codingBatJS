// just writing a getter-setter

function sum() {
	let keepGoing = nums.length,
	tally = 0;
	while (keepGoing--){
		console.log('Index is ' + keepGoing + 'Number to add is ' + this.nums[keepGoing]);
		tally += this.nums[keepGoing];
	}
	return tally;
}

shape1 ={nums: [3, 10], dummy: null, showTotal: sum}; // 13
shape2 ={nums: [44, 3, 3], dummy: null, showTotal: sum}; // 50
shape3 ={nums: [1, 0, 1], dummy: null, showTotal: sum}; 

console.log(shape1.showTotal);
console.log(shape2.showTotal);
console.log(shape3.showTotal);





// Refactor the sum to be a method passed in to the object and then called as an object method 

