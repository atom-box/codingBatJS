/*
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
@mistergenest
June12, 2019
*/

function checkChar(s, c){
  // check only first letter
  // Accepts a string and char to check for.
  // Returns 0 or 1
  if (typeof s !== String || 
      typeof c !== String ||
        s[0] !== c ){
    return 0;
  } else {
    return 1;
  }
}


function countX(s){
  if (s.length < 1){
    return 0;
  } else if (s.length > 0){
    return; 
  } else {
    return NaN;
  }
}



console.log(checkChar('t', 't')); // 1
console.log(checkChar('Z', 'Zorro')); // 0
console.log(checkChar('Zorro', 'Z')); // 1

// countX("xxhiXx")     // 3
// countX("x")      // 1
// countX("hi")     // 0

// Write your rules of recursion on this afterwards