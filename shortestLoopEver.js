let input = 68, result = 1;
for (; input > 1; result *= input, input--);
for(;;);
console.log(result);