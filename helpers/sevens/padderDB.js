// gotta run as node -r esm filename.js to get import to work




const tags = [];
const LIMIT = 35;
let i,  // for loop
stop, // for loop 
year, // fake data fragment
code, // fake data fragment
category, // fake data fragment
categoryChoices = ['TER', 'TTA', 'AMT', 'MER', 'BLC'],
tag; // combined 3frags

for (i = 0, stop = LIMIT; i < stop; i += 1){
	year = 50 * Math.random();
	year = Math.floor(year);
	category = categoryChoices[Math.floor(4 * Math.random())];
	code = 1000000 * Math.random();
	code = Math.floor(code);
	tag = year + category + code;
	tags.push(tag);
}

export default tags;

