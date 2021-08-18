const chopify =(str1, str2)=>{
	let chars1 = str1.split('');
	let chars2 = str2.split('');
	let str1and2 = '';
	while (chars1.length || chars2.length){
		if (chars1.length){
			str1and2 += chars1.shift(); 
		}
		if (chars2.length){
			str1and2 += chars2.shift(); 
		}
	}
	return str1and2; 
};

console.log(chopify("Pig", "Pen"));
console.log(chopify("Laertes", "Saw the best Hamilton production"));



/**
codingbat.com says:
Given two strings, a and b, create a bigger 
string made of the first char of a, the first char 
of b, the second char of a, the second char of b, 
and so on. Any leftover chars go at the end of the 
result.
mixString("abc", "xyz") → "axbycz"
mixString("Hi", "There") → "HTihere"
mixString("xxxx", "There") → "xTxhxexre"
December 14, 2018
@mistergenest
Dev Diary:  This took 30 minutes: had 3 things to fix that I fixed immediately.   Reasonable for now.
*/