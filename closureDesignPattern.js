/*
 * Evan Genest December 21, 2019
 * Return a function that protects	
 * a result inside of it.
 *
 */

const timeStamp = (function giveTime(){
  return new Date();
} )();

let manyTimes = [];
console.log(manyTimes.length);
for (let i=11; i < 150; i++){
  setTimeout( () => manyTimes.push(i), 1100  );
  console.log(i);
}
console.log(manyTimes.length);


// setTimeout(function() {
//     console.log('Blah blah blah blah extra-blah');
// }, 3000);
console.log(manyTimes[0]);
console.log(manyTimes[13]);
console.log(manyTimes[33]);
console.log('Hi');
