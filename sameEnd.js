/* Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string. */

console.log(endOther("Hiabc", "abc")); // true
console.log(endOther("AbC", "HiaBc")); // true
console.log(endOther("abc", "abXabc")); // true