/*Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".*/

function firstHalf(s){
	var len = s.length / 2;
	return s.slice(0, len);
}

console.log(firstHalf("WooHoo")); // "Woo"
console.log(firstHalf("HelloThere")); // "Hello"
console.log(firstHalf("abcdef")); // "abc"