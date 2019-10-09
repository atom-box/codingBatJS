/*
To run this, if you have Node, type NODE TEXTSIMILARITY FILENAME1 FILENAME2
*/

/*
Evan Genest 608-228-9493 genest.1 AT osu DOT edu
What's going on here:
"Write a program that takes as inputs two file paths and uses a metric to determine how similar they are" The result is an integer, a score from 0 (no words in common) to 1 (identical) 
*/

// TODO Remember to implement a 100% same string to string as a first check

// Given two arrays of words, return total an object that has the number of orphans from each side.

const wordsA = ['clip', 'any', 'coupons', 'or', 'scan', 'individual', 'barcodes'];
const wordsB = ['cut', 'out', 'any', 'coupons', 'or', 'scan', 'individual', 'UPCs'];

let i = wordsA.length - 1, j = wordsB.length - 1;
while(i >= 0){
	while(j >= 0){
			console.log(`left ${i} checked right ${j}: [${wordsA[i]}] and [${wordsB
				[j]}]`);
			if (wordsA[i] === wordsB
				[j] ){
				console.log('woof:' + wordsA[i] + wordsB
				[j])
			}
		j -= 1;
	}
	j = wordsB.length - 1;
	i -= 1; 
} 

console.log((new Date()).toLocaleTimeString());









/*
This challenge will focus on the similarity between two texts.  Your objective is to write a program that takes as inputs two file paths and uses a metric to determine how similar they are.  Documents that are exactly the same should get a score of 1, and documents that don’t have any words in common should get a score of 0.

You will have to make a number of decisions as you develop this solution:
Do you count punctuation or only words?
Which words should matter in the similarity comparison?
Do you care about the ordering of words?
What metric do you use to assign a numerical value to the similarity?
What type of data structures should be used?  (Hint: Dictionaries and lists are particularly helpful data structures that can be leveraged to calculate the similarity of two pieces of text.)

Requirements:
The document similarity algorithm does not need to perform well, and you don’t need to account for all edge cases.  Focus on having some fun with it and producing code that we can discuss together.
Use the 3 sample texts provided below to develop your app.  Samples 1 and 2 should be more similar than samples 1 and 3.
You may choose any language you like, but only standard libraries may be used (i.e., no sci-kit learn, nltk, spacy, etc. – that’s cheating!).
The code, at a minimum, must run.  Please provide clear instructions on how to run it.
When complete, please upload your codebase to a public Git repo (GitHub, Bitbucket, etc.) and email us the link.  Please double-check this is publicly accessible.

Samples:
Sample 1
The easiest way to earn points with Fetch Rewards is to just shop for the products you already love. If you have any participating brands on your receipt, you'll get points based on the cost of the products. You don't need to clip any coupons or scan individual barcodes. Just scan each grocery receipt after you shop and we'll find the savings for you.
Sample 2
The easiest way to earn points with Fetch Rewards is to just shop for the items you already buy. If you have any eligible brands on your receipt, you will get points based on the total cost of the products. You do not need to cut out any coupons or scan individual UPCs. Just scan your receipt after you check out and we will find the savings for you.
Sample 3
We are always looking for opportunities for you to earn more points, which is why we also give you a selection of Special Offers. These Special Offers are opportunities to earn bonus points on top of the regular points you earn every time you purchase a participating brand. No need to pre-select these offers, we'll give you the points whether or not you knew about the offer. We just think it is easier that way.

Bonus Points:
Package this application as a web service that performs the comparison in response to a POST request containing the two texts in the body of the payload.  You may use external libraries (i.e., flask).
Let’s take it a step further and package the web service in a Docker container that can be built and run locally or pulled down and run via Docker Hub.




*/