/*
Given a map of food keys and topping values, modify and return the map as follows: 
"ice cream" can only have "cherry". 
All meals must have "bread" with "butter".

*/
let topping1 =(o)=>{
	console.log(`----`);
	for (let i in o){
		console.log(`${i}: ${o[i]}`);
	}
	return o["ice cream"] + ` is the topping.`;
}


console.log(topping1({"ice cream": "peanuts"})); // {"bread": "butter", "ice cream": "cherry"}
console.log(topping1({})); // {"bread": "butter"}
console.log(topping1({"pancake": "syrup"})); // {"bread": "butter", "pancake": "syrup"}

