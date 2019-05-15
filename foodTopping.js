/*
Given an array of objects where each object is made of food keys and topping values, modify and return the array of objects as follows: 
"ice cream" can only have "cherry". 
All meals must have "bread" with "butter".
TODO: refactor to use the map function
*/

/**
* Sits in MAPfunc, confirms cherry is the icecream topping
*
* @method fixIceCream
* @param {object} 
* @return {object} 
*/
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

/**
* Appends a bread for meals that lack bread.
*
* @method breadAdder
* @parameter {array} Array of food objects
* @return {object} But should return nothing sometimes
*
*/
function breadAdder(arr){
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


/**
* Used whenever you need to show the array of objects
* ...prints them one at a time
* @method showMenu
* @parameter {array: objects}
*	@return void
*/
function showMenu(arrayOfObjects){
	console.log(`----`);
	var i = arrayOfObjects.length;
	while (i--){
		for (let k in arrayOfObjects[i]){
			console.log(`${k} with ${arrayOfObjects[i][k]}`);
		}
	}
}


/**
*  Rectifies the menu. 
*	
* @method vetTheToppings
* @parameter {array: objects}
* @return {array: objects}
*	@helpers FIXICECREAM, BREADADDER
*
*/
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