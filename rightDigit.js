
exports.rightDigit = function(numbers){
    arrayAnswer = [];
    for (i in numbers){
        var digit = numbers[i] % 10;
        arrayAnswer.push(digit);
    }
    return arrayAnswer;
}
