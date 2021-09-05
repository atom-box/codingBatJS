let maxEnd3 = function(inString){
    let inNumbers = inString.split(',');
    console.log(`type of inArray is [${typeof inNumbers}] value is [${inNumbers}`);
    first = Number(inNumbers[0]);
    last = Number(inNumbers[inNumbers.length-1]);
    let roleModel = last;
    if(first > last){
        roleModel = first;
    }
    let plateauedNums = inNumbers.map((x) => {return roleModel});
    let outString = plateauedNums.toString();
    return outString;
}


/*
PSEUDOCODE
Store input as a string
string to array,       let inputNums = stringInput.split(',');
first = inputNums[0];
last = inputNums[nums.length()-1]
let roleModel = null;
roleModel = last;
if (first > last){roleModel = first}
let plateauedNums = inputNums.map((x) => {return roleModel});
array to string stringOutput = nums.toString());
return stringOutput;
*/

/*
Dev reflection: Wasted time doing incorrect comparison because data was string, not number.
Unseen coercion!
e.g.  was finding that "3" is greater than "6"
*/