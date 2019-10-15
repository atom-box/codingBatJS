/*
** Recursive sorter.  
Useage at the CLI:
node selectionSort.js 100 0 // sort 100 numbers in silent mode
node selectionSort.js 24 1 // sort 24 numbers in debugger mode
** 
*/



/*
** Prints an array as a horizontal row.
** Accepts: an array. Accepts: how many items to display
** Returns part or all of the array. As a string.
*/
function showArrayH(showItems, stopRequest){
	let len = showItems.length;
	let stop = (showItems.length < stopRequest)? showItems.length - 1 : stopRequest - 1;
	let i = 0, showString='';
	while(i++ < stop){
		showString += '| ' + String(showItems[i]);
	}
	return showString;
}

/*
** Just generate a test array.
** Accepts: number of ints to generate.
** Returns an array of numbers up to 999
**/
function makeArray(n) {
	let allNums = [];
	while(n--){
		allNums.push(Math.round(Math.random() * 1000));
	}
	return allNums;
}

/*
** Sorting algorithm.
** Accepts an unsorted array. 
** Returns a sorted array.
**/
function insertSort(raws){
	for( let i = 0, stop = raws.length; i < stop; i++){
		for( let j = i + 1; j < stop; j++){

			// flag to run diagnostic mode, off by default
			if (Boolean(process.argv[3]) > 0){console.log(`[${raws[i]}] and [${raws[j]}]`);}

			if (raws[j] < raws[i]){
				let c = raws[j];
				raws[j] = raws[i];
				raws[i] = c;
				if (Boolean(process.argv[3]) > 0){console.log(`--------[${raws[i]}] and [${raws[j]}]`);}
			}
		} // end J
	} // end I
	return raws;
} 




/*----M-A-I-N------------*/
console.log( `Started at ${( new Date()).toLocaleTimeString()}`);
let scores =  makeArray(process.argv[2]);
console.log( showArrayH(scores, 14));
scores =  insertSort(scores);
console.log( showArrayH(scores, 14));
console.log(`Run in test mode: ${Boolean( process.argv[3])} `);
console.log( `Finished at ${( new Date()).toLocaleTimeString()}`);

