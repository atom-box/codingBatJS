// This is a freestanding JS file
// for trying out subtlties of fat arrow functions


/*
I see kind of a lot going on here for a simple example: 
1. Internal underscore-convention properties, like for GETTER SETTER
2. Not returning a string, but a function  :)  Kind of cool.
3. Taking an extra step to equivalize _this to this
4. Passing in an object, very JS, not very C
5. The whole thing of returning it WRAPPED in a function but the logic already occurred in earlier lines.  Is that 'closure'?
*/




// ES5 version
const fiveUpperCase = function() {
	var _this = this;

	this.string = this.string.toUpperCase();
	this.int *= 99;
	return function() {
		return console.log(`Capped: ${_this.string} and Enlarged: ${_this.int}!`);
	}
}

fiveUpperCase.call({string: 'Earthling Interactive', int: 13})()


// ES6 version
const sixUpperCase = function() {
	this.string = this.string.toUpperCase();
	return function() => {}
}