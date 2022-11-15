const {
  reverseSentence,
  addPunctuation,
  addFirst,
  titleCase,
  evenOrOddish,
} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it.skip('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('addPunctuation', () => {
    it.skip('takes punctuation marks and returns function that takes a string and adds the punctuation mark', () => {
      const addExcitement = addPunctuation('!!!');
      expect(addExcitement('Hiya, Friend')).toBe('Hiya, Friend!!!');
    });
  });

  describe('addFirst', () => {
    it.skip('takes an element and returns a function which takes an array and returns new array with element at index 0', () => {
      const addOrange = addFirst('orange');
      expect(addOrange(['rose', 'honey'])).toEqual(['orange', 'rose', 'honey']);
    });
  });

  describe('titleCase', () => {
    it.skip('capitalizes the first letter of every word in a provided sentence', () => {
      expect(titleCase('I love my doggo.')).toBe('I Love My Doggo.');
    });
  });

  describe('evenOrOddish', () => {
    it.skip('sums the numbers constituting a string and determines if its even or odd', () => {
      expect(evenOrOddish('523')).toBe('Evenish');
    });
  });
});
