function triangle(n){
	try{
		if (n <= 0) {
			return 0;
		} else if (n > 0){
			n -= 1;
			return n + 1 + triangle(n);
		} else {
			throw { val: n, message: "Error in Triangle function."}
		} 
	}
	catch (e) {
		console.log(e.message);
	}
}

/*
We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.
*/

console.log(triangle(0)); // '0'
console.log(triangle(1)); // '1'
console.log(triangle(2)); // '3'