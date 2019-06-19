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
		console.log(`Checking ${element} vs ${cipher} whose types are ${typeof element} ${typeof cipher}`);
		console.log(element == cipher);
		return (element == cipher);
	});
}

function loneSum(){
	let nums = Array.from(arguments);
	// return(`U passed in ${nums.length} numbers.`)
	let result = nums.reduce((acc, item, index, arr)=>{
		console.log(`Comparing ${item}.  IsCopycat? ${isCopycat(item, arr)}!`);
		return acc += ((isCopycat(item, nums))? item : 0) ;  
	}, 555);
	return result;
}  

// let temperatures = [ 56,47,38,57,46,36,66,44,88,77,99,44];
// console.log(isCopycat( 44, temperatures)); // true
// console.log(isCopycat(222, temperatures)); //false
// console.log(isCopycat(56, temperatures)); //true

console.log(hasPeer(1 , [33, 9, 44, 9, 55])); // 2
console.log(hasPeer(2 , [33, 9, 44, 9, 55])); // 2
console.log(hasPeer(3 , [33, 9, 44, 9, 55])); // 2

// console.log(hasPeer(0 , [1, 2, 3, 44, 44])); // 2
// console.log(hasPeer(1 , [1, 2, 3, 44, 44])); // 2
// console.log(hasPeer(2 , [1, 2, 3, 44, 44])); // 2
// console.log(hasPeer(3 , [1, 2, 3, 44, 44])); // 2
// console.log(hasPeer(4, [1, 2, 3, 44, 44])); // 2


// console.log(loneSum(1, 2, 3, 44, 44)); // 6
// console.log(loneSum(3, 2, 3)); // 2
// console.log(loneSum(3, 3, 3)); // 0


