let fixTeen =(n)=>{
	// TODO refactor to use the IN trick 
	if (n > 12 && n < 15 || n > 16 && n < 20){ return 0} else if (n > 0){return n} else {return null};
}

let noTeenSum = 

noTeenSum(1, 2, 3) → 6
noTeenSum(2, 13, 1) → 3
noTeenSum(2, 1, 14) → 3

/* 
INSTRUCTIONS
https://codingbat.com/prob/p182879

1) Given 3 int values, a b c, return their sum. 
2) However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, 
3) except 15 and 16 do not count as a teens. 

a) Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().

*/