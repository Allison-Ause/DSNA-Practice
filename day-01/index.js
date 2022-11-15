function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(punctuation) {
  return (x) => x.concat(punctuation);
  // function that takes strings and returns string + 'punctuation'
}

addPunctuation('!!');

module.exports = { reverseSentence, addPunctuation };
