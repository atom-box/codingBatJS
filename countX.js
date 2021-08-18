/*
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
@mistergenest
June12, 2019
*/

function checkChar(c1, c2){
  // check only first letter
  // Accepts a string and char to check for.
  // Returns 0 or 1
  if (typeof c1 !== 'string' || 
      typeof c2 !== 'string' ){
    return typeof c1 + ' & ' + typeof c2 + ' are not what I was expecting';
  } else if (c1 !== c2 ){
    return 0;
  } else {
    return 1;
  }
}


function countX(s){
  let wordLength = s.length;
  if (wordLength < 1){
    return 0;
  } else if (wordLength > 0){
    let piece = s[0];
    s = s.slice(1);
    // console.log(`Word is now ${s}`);
    return checkChar(piece, 'x') + countX(s);
  } else {
    return NaN;
  }
}



// console.log(checkChar(null, undefined)); // 1
// console.log(checkChar('Z', 'Zorro')); // 0
// console.log(checkChar('Zorro', 'Z')); // 1

console.log(countX("xxhiXxa"));     // 3
console.log(countX("xx"));      // 2
console.log(countX("hi"));     // 0
console.log(countX("cranium for the blind"));     // 0
console.log(countX(""));     // 0
console.log(countX("x"));     // 1

// Write your rules of recursion on this afterwards