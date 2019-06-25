// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.


/* SOLVED TOUGHISH BUG.  ELEMENT IS A NUMBER.  CIPHER IS AN OBJECT.*/
/* comparison was failing on ===, succeeding on ==   */
// function hasPeer(index, arr){
// 	// remove that item
// 	console.log(`Passed into peerchecker: index ${index} and length of array: ${arr.length}.`)
// 	var cipher = arr.splice(index, 1);
// 	cipher = Number(cipher);  // THIS SYNTAX WORKS.
// 	return arr.some((element)=>{
// 		return (element === cipher);
// 	});
// }

function hasPeer(index, arr){
	const cipher = arr[index];
	let occurances = 0, hit = 0; 
	occurances = arr.reduce( (acc, v, i) => {
			hit = (arr[i] == cipher)? 1 : 0;
			// console.log(`Checking ${cipher} versus ${arr[i]}. Result: ${hit}`);			
			return acc + hit;
			}, 0);
	// console.log(`Occurances is ${occurances}`);
	return (occurances > 1)? true : false;
	// note: occurances will always have at least one occurance of self
}


function loneSum(){
	let nums = Array.from(arguments);
	let foo = 0;
	let result = nums.reduce((acc, v, i, arr)=>{
		console.log(`Array length is ${nums.length}. Initial condition, acc holds ${acc}. Comparing value: ${v} at position ${i} whose val is ${arr[i]}.  Has [peer? ${hasPeer(i, arr)}!`);
		// console.log(`Lengths of Nums, arr: ${nums.length}, ${arr.length} , value, index, acc, and arr[i]: ${v}, ${i}, ${acc}, and ${arr[i]} `);
		// console.log(`Before subfunc`);
		// console.log(`Value, index, acc, and arr[i]: ${v}, ${i}, ${acc}, and ${arr[i]}.`);
		// foo = hasPeer(i, arr ); // NOW PASS AS COPY! This fixed the shrinking array BUG!
		// console.log(`After subfunc`);
		// console.log(`Value, index, acc, and arr[i]: ${v}, ${i}, ${acc}, and ${arr[i]}.`);

// CONSIDER PASSING A COPY INSTEAD
		if (!hasPeer(i, arr)) {console.log(`${arr[i]} is peerless.`); acc += arr[i]} 
		return acc; 
	}, 0);
	return result;
}  

console.log(hasPeer(0 , [13, 33, 9, 44, 9, 55, 13])); //  TRUE
console.log(hasPeer(1 , [13, 33, 9, 44, 9, 55, 13])); // FALSE
console.log(hasPeer(2 , [13, 33, 9, 44, 9, 55, 13])); // TRUE
console.log(hasPeer(3 , [13, 33, 9, 44, 9, 55, 13])); // FALSE

console.log('======================');

console.log(loneSum(222, 2, 0, 100, 44, 44, 0, 2, 1)); // 12 (actual 45)
// console.log(loneSum(3, 2, 3)); // 2 (actual 3)
// console.log(loneSum(3, 3, 3)); // 0 (actual 0)

// Meg shell.             Meg shell.
