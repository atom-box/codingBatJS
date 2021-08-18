// The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.
// https://codingbat.com/prob/p120015

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 1
console.log(fibonacci(12)); // 1
console.log(fibonacci('shoe')); // 1


function fibonacci(n) {
	if (n < 0 || typeof n !== 'number'){
		return NaN;
	} else if (n === 0) {
		return 0;
	} else if (n === 1 ){
		return 1;
	} else {
		return fibonacci(n-1) + fibonacci(n-2);
	}
}
