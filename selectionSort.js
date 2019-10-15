/*
** Recursive sorter.  
** Strategy: (1) was a 



for i

for j starting with j = i + 1
	if bean[j] < bean[0]
		c = bean[j]
		bean[j] = bean[i]
		bean[i] = c




*/



/* This program:
** (1) Generates a random array of ints
** (2) Sorts that array with Selection Sort
**
**
*/


function makeArray(n) {
	let allNums = [];
	while(n--){
		allNums.push(Math.round(Math.random() * 1000));
	}
	return allNums;
}

function insertSort(raws){
	for( let i = 0, stop = raws.length; i < stop; i++){
		for( let j = i + 1; j < stop; j++){
			console.log(`[${raws[0]}] and [${raws[j]}]`);
		}
	}
	return `Finished sorting ${raws.length} numbers at ${( new Date()).toLocaleTimeString()} `
} 




/*----M-A-I-N------------*/
console.log( `Started at ${( new Date()).toLocaleTimeString()}`);
let scores =  makeArray(22);
console.log( insertSort(scores) );


