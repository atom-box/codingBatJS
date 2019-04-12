
let haveThree =(nums)=>{
	const inARow = 0; //   how many 3s todo!
	const touch = false; // adjacents?  todo!
	const alot = false;  // three or more?
	let num = null;
	let recur =(arr)=>{
		if (arr.length > 0){
			num = arr.shift();
			console.log(num); 
			recur(arr);
		};
	};
	// take tally and make a boolean
	if (inARow >= 3){ alot = true}
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

console.log(haveThree([3, 1, 3, 1, 3])) // true
console.log(haveThree([3, 1, 3, 3])) // false
console.log(haveThree([3, 4, 3, 3, 4])) // false

//Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.
// https://codingbat.com/prob/p109783
// April 11, 2019
