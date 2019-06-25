// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.


/* SOLVED TOUGHISH BUG.  ELEMENT IS A NUMBER.  CIPHER IS AN OBJECT.*/
/* comparison was failing on ===, succeeding on ==   */
function hasPeer(index, arr){
	// remove that item
	console.log(`Passed into peerchecker: index ${index} and length of array: ${arr.length}.`)
	var cipher = arr.splice(index, 1);
	cipher = Number(cipher);  // THIS SYNTAX WORKS.
	return arr.some((element)=>{
		return (element === cipher);
	});
}

function isEven(index, arr){
	arr = [];
	return true;
}

function loneSum(){
	let nums = Array.from(arguments);
	let result = nums.reduce((acc, v, i, arr)=>{
		// console.log(`Array length is ${nums.length}. Initial condition, acc holds ${acc}. Comparing value: ${v} at position ${index} whose val is ${arr[index]}.  Has [peer? ${hasPeer(index, arr)}!`);
		// console.log(`Array length is ${nums.length}. Initial condition, acc holds ${acc}. Does ${v} have a peer: ${hasPeer(i, nums)}. `);

		// console.log(`Lengths of Nums: ${nums.length} Vars: ${arr.length}`)
		console.log(`Lengths of Nums, arr: ${nums.length}, ${arr.length} , value, index, acc, and valatthatindexofarray: ${v}, ${i}, ${acc}, and ${arr[i]} `)
		return acc + v;  
	}, 0);
	return result;
}  

console.log(hasPeer(0 , [13, 33, 9, 44, 9, 55, 13])); //  TRUE
console.log(hasPeer(1 , [13, 33, 9, 44, 9, 55, 13])); // FALSE
console.log(hasPeer(2 , [13, 33, 9, 44, 9, 55, 13])); // TRUE
console.log(hasPeer(3 , [13, 33, 9, 44, 9, 55, 13])); // FALSE

console.log('======================');

console.log(loneSum(1, 2, 0, 44, 44, 0, 2, 1)); // 12 (actual 45)
// console.log(loneSum(3, 2, 3)); // 2 (actual 3)
// console.log(loneSum(3, 3, 3)); // 0 (actual 0)


