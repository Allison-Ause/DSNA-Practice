const { reverseSentence, addPunctuation, addFirst } = require('./index');

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
    it('takes an element and returns a function which takes an array and returns new array with element at index 0', () => {
      const addOrange = addFirst('orange');
      expect(addOrange(['rose', 'honey'])).toEqual(['orange', 'rose', 'honey']);
    });
  });
});
