var assert = require('assert');

/**
 * @see https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 */
const solution = (A, K) => {
  if (!A.length) return [];
  for(let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }
  return A;
}

describe('Array', function() {
  describe('CyclicRotation', function() {
    let LIST;
    beforeEach(() => {
      LIST = [3, 8, 9, 7, 6];
    });

    it('with empty array', function() {
      let rotation = 3;
      assert.deepEqual(solution([], rotation), []);
    });

    it('with rotation=3', function() {
      let rotation = 3;
      assert.deepEqual(solution(LIST, rotation), [9, 7, 6, 3, 8]);
    });

    it('with rotation=1', function() {
      let rotation = 1;
      assert.deepEqual(solution(LIST, rotation), [6, 3, 8, 9, 7]);
    });
  });
});
