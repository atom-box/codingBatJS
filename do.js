/***********************************************/
console.log("Script loaded for bear.");


var bFr = document.getElementById('button-frame');
var buffoon = document.querySelector('button');
buffoon.onclick =()=> {
	console.log('clicked ' + (new Date()).getSeconds());
}

bFr.setAttribute('background-color', 'red');

/***********************************************/

var greet =()=>{
	console.log("Ben!  Ben Greenberg!");
}
greet();

/*
To do:
On Load is not being used right.  
Review "Placement of the javascript" and also scope or hoisting, I think!
The greeter() faild when inside the onload.
*/