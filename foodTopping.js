/*
Given an array of objects where each object is made of food keys and topping values, modify and return the array of objects as follows: 
"ice cream" can only have "cherry". 
All meals must have "bread" with "butter".
TODO: refactor to use the map function
*/

// Used inside of MAP
// Takes one object
// If IC present, sets to Cherry, w/o checking
let fixIceCream =(o)=>{
	if (o.hasOwnProperty('ice cream')){
			o['ice cream'] = 'onions';
			console.log('Found onions!');
			return o;
	} else if (o) {
		return o;
	} else {
		return null;
	}
};

// Used inside of SOME()
// This conditional returns boolean T/F 
// if objectBREAD exists, and has butter
/////////return HASBREADKEY  && BREADKEYPROPERTYISBUTTER
/////////return 
// Pass it an array-of-objects
// It returns either nothing or single object: {bread: butter}
// depeninding on whether the latter is absent
// TODO right now it always always adds bread object
function breadAdder(arr){
	return {"pork-roll-egg": "cheese"}
} 


//  Used whenever you need to show the array of objects
//  Takes an A of O
// Prints them 1 at a time.
function showMenu(arrayOfObjects){
	console.log(`----`);
	for (let i in arrayOfObjects){
		for (let k in arrayOfObjects[i]){
			console.log(`${k} with ${arrayOfObjects[i][k]}`);
		}
	}
}


// Menu: Array of objects.
function vetTheToppings(menu1) {
	let menu2 = [], menu3 = [];
	menu2 = menu1.map(fixIceCream);
	// menu3 = menu2.unshift(breadAdder(menu2));
	menu2.unshift(breadAdder(menu2));
	return menu2;
}


let monday = [{'ice cream': 'peanuts'}, {'popcorn': 'yeast' }, {'ice cream': 'butter'}, {'bread': 'cheese'}];
let tuesday = [{'apple': 'butter'}, {'ice cream': 'chives'}, {'pancake': 'syrup'}, {'bloody mary': 'slim jim'}];
let wednesday = [{'potato': 'salt'}];
let thursday = [{'coffee': 'oat milk'}, {'asparagus': 'soy sauce'}];
let fixedMenu = [];

showMenu(monday); //
fixedMenu = vetTheToppings(monday); 
showMenu(fixedMenu);
showMenu(tuesday); // 
fixedMenu = vetTheToppings(tuesday); // 
showMenu(fixedMenu);
