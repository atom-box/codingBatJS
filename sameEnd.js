/* Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string. */

// https://codingbat.com/prob/p126880

function aInB(a, b){
	// console.log(`received ${a} <-and-> ${b}.`);
	let aL = a.length,
	bL = b.length;
	if (aL > bL){
		return false;
	} else if (true) {
		let trimmedB = b.slice(bL - aL);
		return a === trimmedB;
	} else {
		return null;
	}
}

function endOther (s1, s2){
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	return aInB(s1, s2) || aInB(s2, s1);
}

console.log(endOther("Hiabc", "abc")); // true
console.log(endOther("AbC", "HiaBc")); // true
console.log(endOther("abc", "abXabc")); // true
console.log(endOther("x", "X")); // true
console.log(endOther("abc", "abXabc ")); // false
console.log(endOther("AbC.", "HiaBc!")); // false
console.log(endOther("abc", "abXab c")); // false
