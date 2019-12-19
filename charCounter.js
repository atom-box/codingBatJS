/*
 *  A node file reader.
 *  By Evan Genest
 *  USEAGE, AT THE COMMMAND LINE TYPE node charCounter myfile.txt
 *  WHERE MYFILE.TXT IS ANY VALID PATH
 */

var fs = require('fs');
var contents = fs.readFileSync('one.txt', 'utf8');
console.log(contents);