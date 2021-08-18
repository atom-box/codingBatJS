const bestTimes = [31, 1, 1, [3, 4, [8]], 44, [11]];


	/**
	* recur function: Accepts array or number
	* if x[index] is an array, calls itself
	* if x[index] addable, adds it in*/
	let	inNestSum = 0;
	let recur = parcel =>{
		for (let i = 0; i < parcel.length; i++){

			// Is this member an array?
			if (Array.isArray(parcel[i])){
				 recur(parcel[i]);
			}

			// Is this member a number?
			if (typeof parcel[i] === 'number'){
				inNestSum += parcel[i];
				console.log(`Just added ${parcel[i]} to sum and got ${inNestSum} `)
			}
		}
		return inNestSum;
	}

console.log(recur(bestTimes));

/*   
Jan 26, 2019  Evan Genest
Same problem from a month ago; see if you can remember the recursive base case.
This problem asks you to sum up all of the numbers within an array, but the array may also contains other arrays with numbers. This is what we call a nested array. For example:
[1, 1, 1, [3, 4, [8]], [5]]
 */
