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

function multiplesOfN(n) {
  const multiplesArray = [];

  for (let num = 1; num < 51; num++) {
    if (num % n == 0) multiplesArray.push(num);
  }

  return multiplesArray;
}

function convert(roman) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    // if number to right is more, subtract
    // if number to right is left, add
    if (numerals[roman[i]] < numerals[roman[i + 1]]) {
      result -= numerals[roman[i]];
    } else {
      result += numerals[roman[i]];
    }
  }

  return result;
}

function anagrams(wordOne, wordTwo) {
  if (wordOne.length !== wordTwo.length) return false;

  const w1 = wordOne.split('').sort().join('');
  const w2 = wordTwo.split('').sort().join('');

  if (w1 === w2) return true;
  else return false;
}

function rootDigit(num) {
  const digits = num.toString().split('');

  if (digits.length === 1) return num;
  else {
    const integers = digits.map((d) => +d);
    const sum = integers.reduce((acc, curr) => acc + curr);
    return rootDigit(sum);
  }
}

module.exports = {
  reverseSentence,
  addPunctuation,
  addFirst,
  titleCase,
  evenOrOddish,
  fizzBuzz,
  multiplesOfN,
  convert,
  anagrams,
  rootDigit,
};
