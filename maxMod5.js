
// MAXMOD5  from codingbat.com
/* 
Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.
*/
// Evan Genest, 4/2019, twitter@mistergenest


let maxMod5 = (a, b)=>{
	try {
		if (a === b){
			return 0;
		} else if (){

		} else if (){

		} else {
			throw new Error("Should never see this.");
		}
	catch(e){
		console.log(e);
	}
}




console.log(maxMod5(2, 3)); // 3
console.log(maxMod5(6, 2)); // 6
console.log(maxMod5(3, 2)); // 3