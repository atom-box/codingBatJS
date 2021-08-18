
function sleepIn(weekday, vacation){
	if(!weekday || vacation){
		return true 
		} else if (weekday && !vacation ){
		return false 
		} else { return "Uncaught error."
		}
	} 
console.log(sleepIn(null, true));

/*  Wrap function in an IIFE.
Nov 28, 2018  Evan Genest
from https://codingbat.com/prob/p187868
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true*/