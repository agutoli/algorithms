var assert = require('assert');

/**
 * @see https://codility.com/programmers/lessons/1-iterations/binary_gap/
 */
const solution = (N) => {
  let rtrim = (x) => x.replace(/[0]+$/, '');
  let binary = N.toString('2');
  return rtrim(binary)
    .split('1')
    .reduce((gap, zero) => (zero.length > gap) ? gap = zero.length : gap, 0);
}

describe('Iterations', function() {
  describe('BinaryGap', function() {
    it('with N=2', function() {
      assert.equal(solution(2), 0);
    });

    it('with N=9', function() {
      assert.equal(solution(9), 2);
    });

    it('with N=529', function() {
      assert.equal(solution(529), 4);
    });

    it('with N=20', function() {
      assert.equal(solution(20), 1);
    });

    it('with N=1041', function() {
      assert.equal(solution(1041), 5);
    });

    it('with N=16', function() {
      assert.equal(solution(16), 0);
    });

    it('with N=15', function() {
      assert.equal(solution(15), 0);
    });

    it('with N=1376796946', function() {
      assert.equal(solution(1376796946), 5);
    });

    it('with N=1610612737', function() {
      assert.equal(solution(1610612737), 28);
    });

    it('with N=328', function() {
      assert.equal(solution(328), 2);
    });
  });
});
