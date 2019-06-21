// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.


/* SOLVED TOUGHISH BUG.  ELEMENT IS A NUMBER.  CIPHER IS AN OBJECT.*/
/* comparison was failing on ===, succeeding on ==   */
function hasPeer(index, arr){
	// remove that item
	console.log(`Passed into peerchecker: index ${index} and length of array: ${arr.length}.`)
	let localNums = arr;
	var cipher = localNums.splice(index, 1);
	cipher = Number(cipher);  // THIS SYNTAX WORKS.
	return localNums.some((element)=>{
		return (element == cipher);
	});
}

function loneSum(){
	let nums = Array.from(arguments);
	nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
	let result = nums.reduce((acc, item, index, arr)=>{
		// console.log(`Array length is ${nums.length}. Initial condition, acc holds ${acc}. Comparing value: ${item} at position ${index} whose val is ${arr[index]}.  Has [peer? ${hasPeer(index, arr)}!`);
		console.log(`Lengths of Nums: ${nums.length} Vars: ${arr.length}`)
		return acc + (hasPeer(index, arr))? 0 : 1 ;  
	}, 0);
	return result;
}  

console.log(hasPeer(0 , [33, 9, 44, 9, 55])); // 2
console.log(hasPeer(1 , [33, 9, 44, 9, 55])); // 2
console.log(hasPeer(3 , [33, 9, 44, 9, 55])); // 2
console.log('======================');

console.log(loneSum(1, 2, 3, 44, 44)); // 6 (actual 45)
// console.log(loneSum(3, 2, 3)); // 2 (actual 3)
// console.log(loneSum(3, 3, 3)); // 0 (actual 0)


