/*
Given a string, compute WITH REDUCE FUNCTION (no loops) the number of lowercase 'x' chars in the string.
@mistergenest
June14, 2019 (see also countX.js where you did it recursively)
*/
function countX(s){
	// Accepts: a string.
	// Returns: number of lc X's.
	let SOUGHT = 'x';
	let letters = Array.from(s);
	let count = letters.reduce(
		function(sum, item){
				return sum + ((item === SOUGHT)? 1 : 0);
			}
		, 0)
	return (count);
}


console.log(countX("xxhiXxax"));     // 3
console.log(countX("xx"));      // 2
console.log(countX("hi"));     // 0
console.log(countX("cranium for the blind"));     // 0
console.log(countX(""));     // 0
console.log(countX("x"));     // 1