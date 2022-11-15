function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(punctuation) {
  return (x) => x.concat(punctuation);
}

function addFirst(element) {
  return (arr) => [element, ...arr];
}

module.exports = { reverseSentence, addPunctuation, addFirst };
