console.log('start quiltdata.');


/*****
Don't arbitrarily edit the title!

It is important that you use the same string for the following three things:
TITLE & javascriptfile & the id of the div for inserting the solution code
For example, if the title is maxEnd3, the file is maxEnd3.mjs and the div will be <div id="maxEnd"></div>
******/
let articles = [
{
    backgroundColor: '#493',
    textColor: '#ddf',
    title: 'Hotdogging',
    question: 'How do you grab a div?',
    strategy: 'GetElementById()!',
    form: '<form><h1>Placeholder</h1><button>click</button></form>',
    linkToCodeRepo: 'https://github.com/atom-box/codingBatJS/blob/master/textSimilarity.html',
    testElement: '<p class="blueBackground">dogfish - dogfish - dogfish - dogfish </p>',
    inputs: [],
    predictedOutputs: [],
    answerHtml:
    `<button type="button" class="btn btn-primary btn-sm" onclick="dice.show5()" > five</button>`,
},
{
    backgroundColor: '#256',
    textColor: '#db5',
    title: 'maxEnd3',
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
    <form oninput="out1.value = grub(str1.value)">
        <input class="core" type="textarea" name="str1" /><br>
        <div class="core stripe"><output name="out1" for="str1">void</output></div>
    </form>
    <!-- /*==============================*/ -->
</div>
    `
},

]


console.log('end quiltdata.');
