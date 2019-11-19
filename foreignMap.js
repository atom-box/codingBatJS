// use for each
// USE MAP
// USE FOREACH
// USE SOME


let monday = [{main: 'popcorn', condiment: 'yeast' }, {main: 'ice cream', condiment: 'butter'}, {main: 'ice cream', condiment: 'peanuts'}, {main: 'bread', condiment: 'cheese'}];

let tuesday = [{main: 'popcorn', condiment: 'yeast' }, {main: 'bread', condiment: 'butter'}, {main: 'apple', condiment: 'butter'}, {main: 'ice cream', condiment: 'chives'},  {main: 'bloody mary', condiment: 'slim jim'}, {main: 'bread', condiment: 'syrup'}];
let wednesday = [{main: 'potato', condiment: 'salt'}];
let thursday = [{main: 'coffee', condiment: 'oat milk'}, {main: 'asparagus', condiment: 'soy sauce'}];

console.log(monday.some((item)=>{return item.main === 'bread'}));

