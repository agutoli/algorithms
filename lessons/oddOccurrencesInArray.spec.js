var assert = require('assert');

const solution = (A) => {
  A.sort((a, b) => parseInt(a) - parseInt(b));
  for(let i = 0; i < A.length; i++) {
    if (A[i] !== A[i+1]) {
      return A[i];
    }
    i++;
  }
}

describe('Arrays', function() {
  describe('OddOccurrencesInArray', function() {
    let LIST;

    beforeEach(() => {
      LIST = [9, 3, 9, 3, 9, 7, 9];
    });

    it('should return unpared value', function() {
      assert.equal(solution(LIST), 7);
    });
  });
});
