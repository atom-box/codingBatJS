function yak (a, b){
	if (typeof a !== 'number' || typeof b !== 'number'){
		return "Not a number: error."
	} else if	(a === b){
		return (a+b)*2;
	} else {
		return a*b;
	}
}
console.log(yak(null, true));
console.log(yak(2, 3));
console.log(yak(22, 22));
console.log(yak("horse", 3));
console.log(yak("three", "four"));


/*   
Nov 28, 2018  Evan Genest
from https://codingbat.com/prob/p187868
Given two int values, return their sum. Unless the two values are the same, then return double their sum.

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8*/