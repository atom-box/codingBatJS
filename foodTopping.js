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
			o['ice cream'] = 'cherry';
			return o;
	} else if (o) {
		return o;
	} else {
		return null;
	}
};


/**
* Returns the bread;butter count
*
*	@method breadCount
*	@parameter {array: objects}
* @return {integer}
*/
function breadCount(arr) {
	let last = arr.length; 
	while (last -= 1){  // loop array
		console.log(`  ______________  ${arr[last]}`);
		if (arr[last].bread === 'butter'){
			console.log(`Found bread & butter.`)
		} else if (   ){
			console.log (`Checked ${Object.keys(arr[last])}, this item is not bread.`);
		} else {
			console.log ('SNST!');
		}
		// note CORRECTLY PRINTS THE KEY BREAD: ${Object.keys(arr[last])}

		for(let i in arr[last]){   
			if (arr[last].hasOwnProperty[i]){
				console.log(`|||||||| COUNT OWN ${arr[last]}`);
			} else {
				console.log(`:::COUNT NOT OWN in bCount:::${i} ${arr[last][i]}`);
			}
		}
	}
}

/**
* Appends a bread for meals that lack bread.
*
* @method breadAdd
* @parameter {array} Array of food objects
* @return {object} But should return nothing sometimes
*
*/
function breadAdd(arr){
	let i = arr.length;
	while (i--){
		console.log(`---I see ${arr[i]['bread']}.`)
		console.log('---Now adding BREAD.')
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
*	@helpers FIXICECREAM, BREADADD
*
* THIS IS MAIN.  FIRST fixicecreamfunction MAPS THE ARRAY TO DETECT ICE CREAM THAT ISNT CHERRIED,RETURNS IMPROVED ARRAY.
* THEN 
*/
function vetTheToppings(menu1) {
	let menu2 = [], menu3 = [];
	menu2 = menu1.map(fixIceCream);
	// menu3 = menu2.unshift(breadAdd(menu2));
	// COUNT B&B
	console.log(`Before counting bread we have menu2 length ${menu2.length} and looking like this`);
	showMenu(menu2);
	if (breadCount(menu2) === 0){
		console.log('Truly, this was a menu that lacked B&B:');
	} else if (breadCount(menu2) > 0) {
		console.log('There needs no loaf hereabouts.');
	} else {
		console.log('SHOULD NEVER SEE THIS.');
	}
	// IF NO B&B UNSHIFT A B&Bad
	return menu2;
}


let monday = [{'popcorn': 'yeast' }, {'ice cream': 'butter'}, {'ice cream': 'peanuts'}, {'bread': 'cheese'}];
let tuesday = [{'popcorn': 'yeast' }, {'bread': 'butter'}, {'apple': 'butter'}, {'ice cream': 'chives'},  {'bloody mary': 'slim jim'}, {'bread': 'syrup'}];
let wednesday = [{'potato': 'salt'}];
let thursday = [{'coffee': 'oat milk'}, {'asparagus': 'soy sauce'}];
let fixedMenu = [{a: 'b'}];

console.log('-----BEFORE:-----');
showMenu(monday); //
fixedMenu = vetTheToppings(monday); 
console.log('-----AFTER:-----');
showMenu(fixedMenu);
console.log('-----BEFORE:-----');
showMenu(tuesday); // 
fixedMenu = vetTheToppings(tuesday) // 
console.log('-----AFTER:-----');
showMenu(fixedMenu);

breadCount([{'popcorn': 'yeast' }, {'bread': 'butter'}, {'apple': 'butter'}, {'ice cream': 'chives'},  {'bloody mary': 'slim jim'}, {'bread': 'syrup'}])

// dev notes:  This is just right for me.  The nested objects-in-an-array, combined with Array.map, Array.includes, Array.some is just right for me. 

// TODO make bread / butter not add itself if there is already, exactly b and b
