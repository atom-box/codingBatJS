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
function makeArray(reps) {
	let stringNum = "", newNums = [], allNums = [];
	while(reps--){
		stringNum += (Math.random() * 100000000000000000).toString();
	}
	newNums = stringNum.split('');
	allNums = newNums.map( val =>  Number(val) )
	return allNums;
}



/*----M-A-I-N------------*/
console.log( makeArray(22) );

