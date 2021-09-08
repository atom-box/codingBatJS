console.log("line 1 of SENTIMENTANALYZER.MJS");
// Text-Processing API Url
const API_URL = 'https://japerk-text-processing.p.rapidapi.com/sentiment/';

// RapidAPI request headers
const REQUEST_HEADERS = {
  'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com'
  , 'X-RapidAPI-Key': 'edcb8a0210msh348353a6c7b6f6dp1fe7e9jsn0aa0040601d7'
  , 'Content-Type': 'application/x-www-form-urlencoded'
};

// Button click handler
const onAnalyzeButtonClick = () => {
    // Getting a textarea element with a comment
    const commentElement = document.getElementById('comment');
    // Getting comment text
    const commentText = commentElement.value.trim();
    // Handle empty comment
    if (!commentText) {
            return handleEmptyComment();
    }
    // Calling the API and passing the result with the displayResult as a callback function
    return analyzeComment(commentText, displayResult);
  };

const analyzeComment = (comment, callback) => {
    const data = {
        text: comment,
        language: 'english',
    };

    const formattedData = Qs.stringify(data);
    axios.post(
        API_URL,
        formattedData,
        {
            headers: REQUEST_HEADERS
        }
    ).then(
        (response) => {
            const data = response.data;
            callback(data);
        }
    ).catch(
        (error) => console.error(error)
    )
};


const handleEmptyComment = () => {
    const resultBlockElement = document.getElementById('main-result-block');
    resultBlockElement.classList.add('invisible');
    return alert('Your comment is empty =(');
};

const displayResult = result => {
    // Remove invisible class for main-result-block
    const resultBlockElement = document.getElementById('main-result-block');
    resultBlockElement.classList.remove('invisible');
    // Setting the color of the result text depending on the response label
    const label = result.label;
    const resultElement = document.getElementById('result');
    resultElement.setAttribute('class', label);
    let resultText = '';
    // Choosing the result text depending on response label
    switch (label) {
        case 'pos':
            resultText = 'This comment is positive  :^D';
            break;
        case 'neg':
            resultText = 'The mood is not good!';
            break;
        case 'neutral':
            resultText = 'This mood is neutral *_*';
            break;
        default:
            resultText = 'Hmmm, cannot understand your comment';
    }
    // Setting the result text
    resultElement.textContent = resultText;
  };

console.log("line 83 of SENTIMENTANALYZER.MJS");
