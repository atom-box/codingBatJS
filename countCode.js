// Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

const countCode = (haystack) => {
    const needle = /co.e/ig;
    const successes = haystack.match(needle);
    return successes.length;
};

console.log(countCode("aaacodebbb")); // 1
console.log(countCode("codexxcode")); // 2
console.log(countCode("cozexxcope")); // 2

// Next How to do this (in node?) Typescript
