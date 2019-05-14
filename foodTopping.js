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


//  Used whenever you need to show the array of objects
//  Takes an A of O
// Prints them 1 at a time.
function showMenu(arrayOfObjects){
	for (let i in arrayOfObjects){
		console.log(Object.keys(arrayOfObjects[i]));
	}
}


// Menu: Array of objects.
function topping1(menu) {
	console.log(`----`);
	showMenu(menu);
}


let monday = [{'ice cream': 'peanuts'}, {'popcorn': 'yeast' }, {'ice cream': 'butter'}, {'bread': 'cheese'}];
let tuesday = [{'apple': 'butter'}, {'ice cream': 'chives'}, {'pancake': 'syrup'}, {'bloody mary': 'slim jim'}];
let wednesday = [{'potato': 'salt'}];
let thursday = [{'coffee': 'oat milk'}, {'asparagus': 'soy sauce'}];

showMenu(monday); //
topping1(monday); 
showMenu(tuesday); // 
topping1(tuesday); // 

