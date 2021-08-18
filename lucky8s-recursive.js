let recur =n=> {

/*
put a broke-off-piece in DIGIT AS 1 OR 0 based on whether it is an 8
	(use shortcut syntax)
put a new truncated number in newNum
if newNum === zero return DIGIT
else return DIGIT + recurs(newNum)

(CONDITION)?       DOTHIS  : DOTHIS;

*/
	let isEight = null; 
	let digit = Math.trunc( n % 10);
	(digit === 8) ?    
		isEight = 1
	:
		isEight = 0;

	let newNum = n /10;
	// debugging:	
	// console.log(`isEight is ${isEight} newNum is ${newNum} digit is ${digit}`);
	if (newNum < 1)
		return isEight;
	return isEight + recur(newNum);	
}



let numberTried = 1234567;
console.log(`Digits found in ${numberTried} is ${recur(numberTried)}`);
numberTried = 8;
console.log(`Digits found in ${numberTried} is ${recur(numberTried)}`);
numberTried = 0;
console.log(`Digits found in ${numberTried} is ${recur(numberTried)}`);
numberTried = 85878458;
console.log(`Digits found in ${numberTried} is ${recur(numberTried)}`);
numberTried = 8888880;
console.log(`Digits found in ${numberTried} is ${recur(numberTried)}`);

/*************
Given any integer, function returns an integer, the count of how many 8s were in the integer
Example:  
808 returns 2
12345 returns 0
@mistergenest January 31, 2019
*/