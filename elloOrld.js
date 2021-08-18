// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.  

console.log(nonStart("Hello", "There")); // "ellohere"
console.log(nonStart("java", "code")); // "avaode"
console.log(nonStart("shotl", "java")); // "hotlava"

//hoists
function nonStart(s1, s2){
	return s1.slice(1) + s2.slice(1);
}


// Dev Diary: A note on whitespace.
// I discovered just now that you can break up a line but not after the word RETURN b/c a semicolon is invisibly created for you.   For example, line 9 here has to at least have something after return, on the same line, otherwise, JS implies a semicolon and just instantly returns