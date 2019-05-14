/*
Given a map of food keys and topping values, modify and return the map as follows: 
"ice cream" can only have "cherry". 
All meals must have "bread" with "butter".
TODO: refactor to use the map function
*/
let fixIceCream =()=>{
	// this will be a mapping of the object
	this["ice cream"] = "onions";
}

let ensureBreadPresence =()=>{
	// todo write a conditional onto this
	this.taco = "Tabasco";
}





let topping1 =(menu)=>{
	console.log(`----`);
	// menu = ensureBreadPresence(menu);
	// menu = fixIceCream(menu);
	for (let i in menu){
		// if (menu.hasOwnProperty(i)){
			console.log(i + `: ` + menu[i] + ` in topping1`);
		// }
	}
	return `Stars thar: ${menu}`;
}


console.log(topping1({"ice cream": "peanuts"})); // {"bread": "butter", "ice cream": "cherry"}
console.log(topping1({})); // {"bread": "butter"}
console.log(topping1({"pancake": "syrup"})); // {"bread": "butter", "pancake": "syrup"}

