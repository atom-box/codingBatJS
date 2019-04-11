
let haveThree =(nums)=>{
	let recur =(arr)=>{

	}
	if recur(nums) >= 3
	return false;
}

// strategy 1: If Recursive, A flag of noThrees  would have to be outside the global
// strategy 2: go for filter map reduce
//   -CHECK FOR THREE OR MORE
//   -ADD A NOADJACENTTHREES FLAG - or make it a loop bailer, for efficiency


console.log(haveThree([3, 1, 3, 1, 3])) // true
console.log(haveThree([3, 1, 3, 3])) // false
console.log(haveThree([3, 4, 3, 3, 4])) // false

//Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.
// https://codingbat.com/prob/p109783
// April 11, 2019
