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
	if (o.main === 'ice cream'){
			o.condiment = 'cherry';
			return o;
	} else if (o.main) {
		// console.log('aint cream')
		return o;
	} else {
		// console.log(`${o.main} IC FIXER ${o.condiment} is a little weird.  something went wrong`)
		return 99;
	}
};


/**
* Used whenever you need to show the array of objects
* ...prints them one at a time
* @method showMenu
* @parameter {array: objects}
*	@return void
*/
function showMenu(arr){
	var i = arr.length;
	while (i--){
			console.log(`${arr[i].main} with ${arr[i].condiment}`);
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
	menu2 = menu1.map(fixIceCream); // add cherry

	// IF NO B&B UNSHIFT A B&Bad
	if (!menu2.some((item)=>{return item.main === 'bread' && item.condiment === 'butter'})){
		console.log('Truly, this was a menu that lacked B&B:');
		menu2.unshift({main: 'bread', condiment: 'butter'});
	} 
	return menu2;
}


let monday = [{main: 'popcorn', condiment: 'yeast' }, {main: 'ice cream', condiment: 'butter'}, {main: 'ice cream', condiment: 'peanuts'}, {main: 'bread', condiment: 'cheese'}];

let tuesday = [{main: 'popcorn', condiment: 'yeast' }, {main: 'bread', condiment: 'butter'}, {main: 'apple', condiment: 'butter'}, {main: 'ice cream', condiment: 'chives'},  {main: 'bloody mary', condiment: 'slim jim'}, {main: 'bread', condiment: 'syrup'}];
let wednesday = [{main: 'potato', condiment: 'salt'}];
let thursday = [{main: 'coffee', condiment: 'oat milk'}, {main: 'asparagus', condiment: 'soy sauce'}];
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

// breadCount([{main: 'popcorn', condiment: 'yeast' }, {main: 'bread', condiment: 'butter'}, {main: 'apple', condiment: 'butter'}, {main: 'ice cream', condiment: 'chives'},  {main: 'bloody mary', condiment: 'slim jim'}, {main: 'bread', condiment: 'syrup'}])

// dev notes:  This is just right for me.  The nested objects-in-an-array, combined with Array.map, Array.includes, Array.some is just right for me. 

// TODO make bread / butter not add itself if there is already, exactly b and b
