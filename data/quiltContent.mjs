console.log('start quiltdata.');


/*****
To add a section:
1. After testing html in staging.html, paste it into an object below, here, as answerHTML.
2. Then make a file and function with that same name and save it.
3. Finally include it in the html.

Don't arbitrarily edit the title!

It is important that you use the same string for the following three things:
TITLE (as title case with spaces allowed) & javascriptfile (camelcased) & the id of the div for inserting the solution code (same as the javascript file name)
For example, if the title is Max End 3, the file is maxEnd3.mjs and the div will be <div id="maxEnd"></div>
******/
let articles = [

{
    backgroundColor: '#256',
    textColor: '#db5',
    title: 'Max End 3',
    question: 'Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.',
    strategy: 'GetElementById()!',
    form: '<form><h1>Placeholder</h1><button>click</button></form>',
    linkToCodeRepo: 'https://github.com/atom-box/codingBatJS/blob/master/textSimilarity.html',
    testElement: '<p class="blueBackground">dogfish - dogfish - dogfish - dogfish </p>',
    inputs: [[1, 2, 3], [11, 5, 9], [2, 11, 3]],
    predictedOutputs: [[3, 3, 3],  [11, 11, 11], [3, 3, 3]],
    challengeSource: 'https://codingbat.com/prob/p146256',
    answerHtml: `
    <div class="square-small">
    <!-- /*==============================*/ -->
    <form oninput="out1.value = maxEnd3(str1.value)">
        <label>Input</label>
        <input class="core" type="textarea" name="str1" placeholder="comma separated numbers"/><br>
        <div class="stripe"><output name="out1" for="str1" class="gutters ">void</output></div>
    </form>
    <!-- /*==============================*/ -->
</div>
    `
},


{
    backgroundColor: '#037',
    textColor: '#ff0',
    title: 'Word Checker',
    question: 'Analyze Chapter 3 of <a href="https://etc.usf.edu/lit2go/21/the-adventures-of-huckleberry-finn/116/chapter-3/">Huckleberry Finn</a> by Mark Twain.',
    strategy: 'null',
    form: '<form><h1>Placeholder</h1><button>click</button></form>',
    linkToCodeRepo: 'https://github.com/atom-box/codingBatJS/blob/master/textSimilarity.html',
    testElement: '<p class="blueBackground">dogfish - dogfish - dogfish - dogfish </p>',
    inputs: [],
    predictedOutputs: [],
    answerHtml:
    `
    <button type="button" class="btn btn-secondary" onclick="wordChecker()" > Go </button>
    `,

    // <p>${teamPitching()} all day, every day</p>

},

{
    backgroundColor: '#493',
    textColor: '#ddf',
    title: 'Unused',
    question: 'Statistics from <a href="https://www.baseball-reference.com/leagues/majors/2021-standard-pitching.shtml">Baseball Reference</a>',
    strategy: 'null',
    form: '<form><h1>Placeholder</h1><button>click</button></form>',
    linkToCodeRepo: 'https://github.com/atom-box/codingBatJS/blob/master/textSimilarity.html',
    testElement: '<p class="blueBackground">dogfish - dogfish - dogfish - dogfish </p>',
    inputs: [],
    predictedOutputs: [],
    answerHtml:
    `
   <p>Coming soon...</p>
    `,
},



{
    backgroundColor: '#930',
    textColor: '#ffa',
    title: 'Team Pitching',
    question: 'Statistics from <a href="https://www.baseball-reference.com/leagues/majors/2021-standard-pitching.shtml">Baseball Reference</a>',
    strategy: 'null',
    form: '<form><h1>Placeholder</h1><button>click</button></form>',
    linkToCodeRepo: 'https://github.com/atom-box/codingBatJS/blob/master/textSimilarity.html',
    testElement: '<p class="blueBackground">dogfish - dogfish - dogfish - dogfish </p>',
    inputs: [],
    predictedOutputs: [],
    answerHtml:
    `
   <p>Coming soon...</p>
    `,

    // <p>${teamPitching()} all day, every day</p>

},




]


console.log('end quiltdata.');
