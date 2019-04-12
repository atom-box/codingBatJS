
let haveThree =(nums)=>{
	let occurances  = null; //   how many 3s todo!
	let touch = false; // adjacents?  todo!
	let alot = false;  // three or more?
	const WANTED = 3;
	// can refactor to map filter reduce TODO TODO TODO !
	for (let n in nums){
		if (nums[n] === WANTED){
			++occurances;
		}
		if (n < nums.length - 1 ){
			if (
				nums[n] === WANTED &&
				nums[n+1] === WANTED
			){
				touch = true;
			} 
		}
	}


	// let recur =(arr)=>{
	// 	if (arr.length > 0){
	// 		num = arr.shift();
	// 		console.log(num); 
	// 		recur(arr);
	// 	};
	// };


	// take tally and make a boolean
	if (occurances >= 3){ alot = true}
	console.log('Result:');
	console.log(`Occurances ${occurances} Touch:${touch}  aLot${alot}   Array${nums}`);
	if (alot && !touch){
		return true; // todo always returning now
	} else if (
		touch && !alot ||
		touch && alot  ||
		!touch && !alot
		) {
		return false
	} else { 
		return "errori maxi"
	}
}

// strategy 1: If Recursive, A flag of noThrees  would have to be outside the global
// strategy 2: go for filter map reduce
//   -CHECK FOR THREE OR MORE
//   -ADD A NOADJACENTTHREES FLAG - or make it a loop bailer, for efficiency

/*
You could have blockscope flags, and underneath them drill through the array
*/

console.log(haveThree([3, 1, 3, 993])) // false
console.log(haveThree([55,  , 55, 5, 900, 3, 3, 43,  12, 166, 300])) // false
console.log(haveThree([3, 4, 3, 3, 4])) // false
console.log(haveThree([55, 72, 100, 3.0, 3, 3])) // false
console.log(haveThree([3, 4, 5, 3, 6, 6, 6, 6, 6, 88, 78987, 1.3, 3])) // true
console.log(haveThree([3, 1, 3, 1, 3])) // true
console.log(haveThree([3, 4, 5, 3, 6, 6, 6, 6, 6, 88, 78987, 1.3, 3])) // true
console.log(haveThree([3, 1, 3, 1, 3])) // true

//Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.
// https://codingbat.com/prob/p109783
// April 11, 2019
