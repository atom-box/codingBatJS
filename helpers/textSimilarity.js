/*

*/



/*
To run this, if you have Node, type NODE TEXTSIMILARITY FILENAME1 FILENAME2
*/

/*
Evan Genest 608-228-9493 genest.1 AT osu DOT edu
What's going on here:
"Write a program that takes as inputs two file paths and uses a metric to determine how similar they are" The result is an integer, a score from 0 (no words in common) to 1 (identical) 
*/

// TODO Serve as HTML would be best for my time constraints. Bootstrap budget <15 minutes 
// TODO Remember to implement a 100% same string to string as a first check
// Paste in the initial napkin sketch
// TODO fork it and submit as two files, one with more commenting.
// lint it
// edit comments to AirBnB style guide
// TODO Have mercy: take 5 minutes each to roll back, show output, 
// TODO Refactor so an array of orphans is returned.
// TODO That array goes into a scorer that returns a fraction of 1.
// TODO This gets repeated for the backwards.
// TODO Divide these by two and return the inverse.

// TODO Make the array builder to strip punctuation and casing and remove undefined.
// TODO Make a web page.
// TODO Make an API.




/*
** A looper to show the 
** array members during de-bugging
*/

// () -> {}
function thingsShow(arr) {
    let many = arr.length;
    console.log(`${many}:`);
    while (many > 0) {
        many -= 1;
        console.log(`!${arr[many]}!`);
    }
}



/*
**
**	Remove chars that aren't letters.
** (string s) -> {string with no non-alpha chars} 
*/
//
function alphaSanitize(s) {
    let dirtyChars = s.split('');
    const reggie = /[A-z]/
    let onlyAlphas = dirtyChars.filter(c => reggie.test(c));
    return onlyAlphas.join('');
}


/*
** Make word arrays from a text sample.
** (string s)->{ several arrays of words, returns a final clean array of words }
*/

// 
function toWords(s) {
    const words = {};

    // 1a. split the string to words on ' ' as a delimiter
    words.dirty = s.split(' '); // returns array of raw words

    // 1b. returns array with spaces removed from word boundaries
    words.trimmed = words.dirty.map((w) => { return w.trim() });

    // 2. create words.collapsed, an array that lacks any UNDEFINED array memebers
    words.collapsed = words.trimmed.reduce(
        (x, y) => {
            if (y.length > 0) {
                x.push(y);
            }
            return x;
        }, []);

    // 3. everyone lowercased
    words.lowered = words.collapsed.map((x) => { return x.toLowerCase() });

    // 4. strip beginning and endings that are non-alpha but ignore interior no-alpha.
    words.justAlpha = words.lowered.map(item => alphaSanitize(item));

    return words.justAlpha;
}





/*
** Give a more subtle score for orphans than '1'
** Devalue the weight of small words
**
*/

function scoreOneWord(s) {
    if (s.length < 3) {
        return 1;
    } else if (s.length < 5) {
        return 1;
    } else {
        return 1;
    }
}


/*
** To avoid mutatating the data
** create a copy of the array
** Accepts an array
** Returns a copied-by-value array
*/

function makeLocal(a) {
    let newArray = [];
    const stop = a.length;
    for (let i = 0; i < stop; i++) {
        newArray.push(a[i]);
    }
    return newArray;
}



/*
 ** Histogram bar draw.
 **	Accepts an integer and a char
 **  Returns nothing.
 **  draws a bar in the console
 ** TODO: return a string and let the main logic draw the bar wherever it wants
 */

function skidMark(n, c) {
    let skid = '';
    for (let i = 0; i < n; i++) {
        skid += c;
    }
    console.log(skid);
}


/*
 ** Args: two strings of words + spaces
 ** Return: an integer score 
 ** TODO: refactor so it returns an object that is array of orphans, array of found words, and integer number of original words
 */

function oneWayScore(list1, list2) {
    let tempString1 = list1.toString(), tempString2 = list2;
    if (tempString1 === tempString2) return 1;
    // local copy
    const oneWay = {};
    oneWay.wordsI = makeLocal(list1);
    oneWay.wordsJ = makeLocal(list2);
    oneWay.orphans = [];
    oneWay.founds = [];
    for (let i = 0, stop = oneWay.wordsI.length ; i < stop; i++) {
        for (let j = 0, stop = oneWay.wordsJ.length ; j < stop; j++) {
            // skidMark(oneWay.wordsI.length, '|'); // debugger
            // skidMark(oneWay.wordsJ.length, '_'); // debugger
            if (oneWay.wordsI[i] === oneWay.wordsJ[j]) {

                //remove the found word and append to FOUNDS
                oneWay.founds.push(oneWay.wordsJ.splice(j, 1));
                if (j > 0) {
                    let a = oneWay.orphans.concat( oneWay.wordsJ.splice(0, j) );
                    oneWay.orphans = a;
                }
                break;
            }
        }

    }

    // Reverse now, only because it makes the splice in the nested loop more readable
    oneWay.orphans.reverse();
    oneWay.orphans.concat(0,0,'after nested loop', 'after nested lop');

    console.log(`Here are the founds: `);
    thingsShow(oneWay.founds);
    console.log(`Here are the orphans: `);
    thingsShow(oneWay.orphans);
    const localScore = oneWay.orphans.length / (oneWay.orphans.length + oneWay.founds.length);
    return localScore;
}



/*-----------M-A-I-N---------------------*/


/* 
accepts five args 
str
str
id
id
id*/

/*
** Function to create content in the HTML layout.
**  Accepts two strings as input data.
**  Accepts two div IDs for showing the input data
**  and one div ID for outputting the result.
*/

function main(str1, str2, id1, id2, id3) {
    // remember: unlikeness is 1 for worst similarity, 0 for best similarity
    let unlikeness1 = 0,
    unlikeness2 = 0,
    totalUnlikeness = 0;
    let words1 = toWords(str1);
    let words2 = toWords(str2);
    unlikeness1 = oneWayScore(words1, words2);
    unlikeness2 = oneWayScore(words2, words1);

    // get the three HTML elements
    const el1 = document.getElementById(id1);
    const el2 = document.getElementById(id2);
    const el3 = document.getElementById(id3);
    totalUnlikeness = (unlikeness1 + unlikeness2) / 2;
    let likeness = 1 - totalUnlikeness;

    // Meaningless timestamp.
    console.log(`On a scale of 0 to 1, the similarity of these two texts is ${likeness}`);
    console.log((new Date()).toLocaleTimeString());

    el1.innerHTML = str1;
    el2.innerHTML = str2;
    el3.innerHTML = likeness;
    return;
}

main(`If you have any  get points `, `If you have any participating brands on your receipt, you'll get points `, '1x', '1y', '1answer');
main(`If you have any  receipt, you'll get points `, `If you have any participating brands on your receipt, you'll get points `, '2x', '2y', '2answer');
main(`brands on your receipt, you'll get points `, `If you have any participating brands on your receipt, you'll get points `, '3x', '3y', '3answer');










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