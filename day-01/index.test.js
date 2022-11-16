const {
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
} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('addPunctuation', () => {
    it('takes punctuation marks and returns function that takes a string and adds the punctuation mark', () => {
      const addExcitement = addPunctuation('!!!');
      expect(addExcitement('Hiya, Friend')).toBe('Hiya, Friend!!!');
    });
  });

  describe('addFirst', () => {
    it('takes an element and returns a function which takes an array and returns new array with element at index 0', () => {
      const addOrange = addFirst('orange');
      expect(addOrange(['rose', 'honey'])).toEqual(['orange', 'rose', 'honey']);
    });
  });

  describe('titleCase', () => {
    it('capitalizes the first letter of every word in a provided sentence', () => {
      expect(titleCase('I love my doggo.')).toBe('I Love My Doggo.');
    });
  });

  describe('evenOrOddish', () => {
    it('sums the numbers constituting a string and determines if its even or odd', () => {
      expect(evenOrOddish('523')).toBe('Evenish');
    });
  });

  describe('fizzbuzz', () => {
    it('divisible by 3 = fizz, divisible by 5 = buzz, divisible by both = fizzbuzz', () => {
      expect(fizzBuzz(20)).toEqual([
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
        16,
        17,
        'Fizz',
        19,
        'Buzz',
      ]);
    });
  });

  describe('multiplesOfN', () => {
    it('returns an array of numbers divisible by the n parameter', () => {
      expect(multiplesOfN(10)).toEqual([10, 20, 30, 40, 50]);
    });
  });

  describe('convert', () => {
    it('converts roman numeral to numeric value', () => {
      expect(convert('IV')).toBe(4);
    });
  });

  describe('anagrams', () => {
    it('determines if two words are anagrams', () => {
      expect(anagrams('begin', 'being')).toBe(true);
    });
  });

  describe('rootDigit', () => {
    it('sums an inputed number from its component parts recursively down to one digit', () => {
      expect(rootDigit(3697)).toBe(7);
    });
  });
});
