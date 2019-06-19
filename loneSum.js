// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.


/* SOLVED TOUGHISH BUG.  ELEMENT IS A NUMBER.  CIPHER IS AN OBJECT.*/
/* comparison was failing on ===, succeeding on ==   */
function hasPeer(index, arr){
	// remove that item
	// console.log(`Length of array before splice: ${arr.length}`);
	var cipher = arr.splice(index, 1);
	cipher = Number(cipher);  // THIS WORKED.
	// console.log(`Length of array after splice: ${arr.length}`);
	// console.log(`Value of cipher is ${cipher}`);
	return arr.some((element)=>{
		// console.log(`Checking ${element} vs ${cipher} whose types are ${typeof element} ${typeof cipher}`);
		// console.log(element == cipher);
		return (element == cipher);
	});
}

function loneSum(){
	let nums = Array.from(arguments);
	// return(`U passed in ${nums.length} numbers.`)
	let result = nums.reduce((acc, item, index, arr)=>{
		console.log(`Comparing ${item}.  Has peer? ${hasPeer(index, arr)}!`);
		return acc += ((hasPeer(index, arr))? 0 : item) ;  
	}, 0);
	return result;
}  


console.log(hasPeer(1 , [33, 9, 44, 9, 55])); // 2
console.log(hasPeer(2 , [33, 9, 44, 9, 55])); // 2
console.log(hasPeer(3 , [33, 9, 44, 9, 55])); // 2
console.log('======================');

console.log(loneSum(1, 2, 3, 44, 44)); // 6
console.log(loneSum(3, 2, 3)); // 2
console.log(loneSum(3, 3, 3)); // 0


