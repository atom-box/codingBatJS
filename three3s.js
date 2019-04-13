
let haveThree =(nums)=>{
	let occurances  = null; //   how many 3s todo!
	let touch = false; // adjacents?  todo!
	let alot = false;  // three or more?
	const WANTED = 3;
	let neighbor = null;
	// can refactor to map filter reduce TODO TODO TODO !

	console.log(`Array to compare ---> ${nums}`);
	for (let n in nums){

		// This tallyer must come before break statement
		if (nums[n] === WANTED){
			++occurances;
		}

		// don't eval final array spot; she has no neighbor!
		if (n == nums.length - 1){
			console.log('Declining eval of final position');
			break;
		}
		neighbor = neighbor + 1;
		console.log(`Now comparing [${nums[n]}] and [${nums[neighbor]}]`);


		// if (n < nums.length - 1 ){  // todo todo change back to if (n < nums.length - 1 )
			if (       // =========================== TOUCHING
				nums[n] === WANTED &&
				nums[neighbor] === WANTED
			){
				touch = true; // set flag
				console.log(`O--u--c--h, THESE TOUCH ${nums[n]} and ${nums[neighbor]}`);
			} else if (          // =========================== NOT
				nums[n] !== WANTED || 
				nums[neighbor] !== WANTED
			) {  
				continue;
			} else {           // =========================== SNAFU LAND
				console.log(`Never gets here I hope.`)}
			// }
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


let testArray = [3, 3, 993];
let pre = `Overall return for [${testArray}] is: `;
console.log(pre + haveThree(testArray));
console.log(`\n\n\n`);

testArray = [3, 1, 3, 1,  3, 0, 3, 3];
pre = `Overall return for [${testArray}] is: `;
console.log(pre + haveThree(testArray));
console.log(`\n\n\n`);


testArray = [3, 1, 3, 1, 3, 3, 0, ,];
pre = `Overall return for [${testArray}] is: `;
console.log(pre + haveThree(testArray));
console.log(`\n\n\n`);

testArray = [3, 1, 3, 1, 3,6,3,6,3,6,3,6,3,6,3, 6,3,6,3,6,3,6,3,1000,3,3];
pre = `Overall return for [${testArray}] is: `;
console.log(pre + haveThree(testArray));
console.log(`\n\n\n`);

testArray = [2, 2, 3, 55, 2 , 55, 5, 900, 3, 43,  12, 166, 300,3 ,2];
pre = `Overall return for [${testArray}] is: `;
console.log(pre + haveThree(testArray));
console.log(`\n\n\n`);

testArray = [3, 4, 5, 3, 6, 6, 6, 6, 6, 88, 78987, 1.3, 3];
pre = `Overall return for [${testArray}] is: `;
console.log(pre + haveThree(testArray));
console.log(`\n\n\n`);



/*
Should return:
false
false
false
false
true
true
*/


//Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are neighbor to each other.
// https://codingbat.com/prob/p109783
// April 11, 2019

// not working, the referring to [next]
// 1) try a for loop
// 2) try printing multiple print statements