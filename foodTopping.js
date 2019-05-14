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

// Pass it an array-of-objects
// It returns either nothing or single object: {bread: butter}
// depeninding on whether the latter is absent
function breadAdder(arr){
	// if (arr.some(obj => obj.bread === 'butter')){
	// todo just trying to print for now
	// console.log(`Here are some things AA${arr}AA BB${arr[0]}BB CC${arr[0]['popcorn']}CC`);
	// if (arr[0]['popcorn'] === 'yeast'){
	// if ( arr.includes =>           el['popcorn'] === 'yeast'){
	let i = arr.length;
	while (i--){
		console.log(`I see ${arr[i]['bread']}.`)
		console.log('Now adding BREAD.')
		return {'bread': 'butter'};
	}
	if (false) {// todo
	} else if (arr.length) {
		console.log('Found nought in the bread adder func.');
		return {'kidney': 'pie'};
	} else {
		return {"something went": "wrong"}
	}
} 


//  Used whenever you need to show the array of objects
//  Takes an A of O
// Prints them 1 at a time.
function showMenu(arrayOfObjects){
	console.log(`----`);
	var i = arrayOfObjects.length;
	while (i--){
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


let monday = [{'popcorn': 'yeast' }, {'ice cream': 'butter'}, {'ice cream': 'peanuts'}, {'bread': 'cheese'}];
let tuesday = [{'popcorn': 'yeast' },{'apple': 'butter'}, {'ice cream': 'chives'},  {'bloody mary': 'slim jim'}, {'bread': 'syrup'}];
let wednesday = [{'potato': 'salt'}];
let thursday = [{'coffee': 'oat milk'}, {'asparagus': 'soy sauce'}];
let fixedMenu = [{a: 'b'}];

showMenu(monday); //
fixedMenu = vetTheToppings(monday); 
showMenu(fixedMenu);
showMenu(tuesday); // 
fixedMenu = vetTheToppings(tuesday) // 
showMenu(fixedMenu);


// dev notes:  This is just right for me.  The nested objects-in-an-array, combined with Array.map, Array.includes, Array.some is just right for me. 