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

function titleCase(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}

function evenOrOddish(num) {
  const digits = num.split('');
  const numbersArray = digits.map((x) => parseInt(x));
  const sum = numbersArray.reduce((acc, curr) => acc + curr);

  if (sum % 2 == 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

function fizzBuzz(n) {
  const array = [];

  for (let num = 1; num < n + 1; num++) {
    if (num % 15 === 0) array.push('FizzBuzz');
    else if (num % 3 === 0) array.push('Fizz');
    else if (num % 5 === 0) array.push('Buzz');
    else array.push(num);
  }
  return array;
}

module.exports = {
  reverseSentence,
  addPunctuation,
  addFirst,
  titleCase,
  evenOrOddish,
  fizzBuzz,
};
