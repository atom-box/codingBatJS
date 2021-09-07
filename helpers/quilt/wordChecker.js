const wordChecker = {};
wordChecker.date = () => {
    console.log("loaded word checker");
    console.log(new Date());
    return new Date();
};

let countWasClicked = false;
wordChecker.count = (words) => {
    if (countWasClicked){return}
    countWasClicked = true;
    let existing = document.getElementById('word-checker-count');
    let newChild = document.createElement('p');
    newChild.innerHTML = 'Total number of words in Chapter 3: ' + words.length;
    existing.appendChild(newChild);
}

wordChecker.random = (words, n) => {
    console.log(new Date());
    let existing = document.getElementById('word-checker-random');
    let newChild = document.createElement('p');
    let retrievedWords = [];
    while (n){
        let randomIndex = Math.round(words.length * Math.random());
        retrievedWords.push(words[randomIndex]);
        n--;
    }
    const retrievedWordsString = retrievedWords.toString();
    // const retrievedWordsString = retrievedWords.toString();
    newChild.innerHTML = retrievedWordsString;
    existing.appendChild(newChild);
}


/*
get a rand of size length
push a word of that index

Math.
*/