// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.  


console.log(nonStart("Hello", "There")); // "ellohere"
console.log(nonStart("java", "code")); // "avaode"
console.log(nonStart("shotl", "java")); // "hotlava"

//hoists
function nonStart(s1, s2){
	return 
		s1.slice(-3);
}