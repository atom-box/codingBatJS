console.log("Script loaded for bear.");

const greet =()=>{
	console.log("Ben!  Ben Greenberg!");
}


const bFr = document.getElementById('button-frame');
var buffoon = document.querySelector('button');
buffoon.onclick =()=> {
	console.log('clicked ' + (new Date()).getSeconds());
}
