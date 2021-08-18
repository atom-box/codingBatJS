/* 'Microscope' in the sense that it is an investigation of the TIME Object*/
 
let now = new Date();

console.log("Notice, flipped, hasOwnProperty:")
console.log("1: " + now.hasOwnProperty); // WRONG
console.log("2: " + Object.hasOwnProperty(now)); // RIGHT
now.andrew = 20;
now.benjamin = 100;
console.log(Object.getOwnPropertyNames(now)); //lists andrew, benjamin as names
console.log("3: " + Object.hasOwnProperty(now)); // still false.  why?

console.log("________________")
