
let haveThree =(nums)=>{
	let occurances  = null; //   how many 3s todo!
	let touch = false; // adjacents?  todo!
	let alot = false;  // three or more?
	const WANTED = 3;
	let next = 0;
	// can refactor to map filter reduce TODO TODO TODO !
	for (let n in nums){
		if (nums[n] === WANTED){
			++occurances;
		}
		next = next + 1;
		console.log(`Next is set to [${next}]`);
		console.log(`Now comparing [${nums[n]}] and [${nums[next]}]`);


		if (n < nums.length - 1 ){
			if (
				nums[n] === WANTED &&
				nums[next] === WANTED
			){
				touch = true;
				// console.log(`TOUCHING, THESE TOUCH ${nums[n]} and ${nums}`);
			} else if (
				nums[n] !== WANTED || 
				nums[next] !== WANTED
			) { console.log(`No problem, these aren't touching [${nums[n]}] and [${nums[next]}] [${nums[n]}][${nums}]`)} else { console.log(`Never gets here I hope.`)}
		}
	}


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



console.log(haveThree([3, 1, 3, 993])) // false
// console.log(haveThree([55,  , 55, 5, 900, 3, 3, 43,  12, 166, 300])) // false
console.log(haveThree([3, 4, 3, 3, 4])) // false
// console.log(haveThree([55, 72, 100, 3.0, 3, 3])) // false
// console.log(haveThree([3, 4, 5, 3, 6, 6, 6, 6, 6, 88, 78987, 1.3, 3])) // true
console.log(haveThree([3, 1, 3, 1, 3])) // true
console.log(haveThree([3, 4, 5, 3, 6, 6, 6, 6, 6, 88, 78987, 1.3, 3])) // true
// console.log(haveThree([3, 1, 3, 1, 3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,1000])) // true

//Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.
// https://codingbat.com/prob/p109783
// April 11, 2019

// not working, the referring to [next]
// 1) try a for loop
// 2) try printing multiple print statements