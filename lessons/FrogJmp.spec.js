var assert = require('assert');

const solution = (X, Y, D) => {
  let jump = Math.ceil((Y - X) / D);
  for(let i = (jump * D) + X; i < Y; i = i + D) {
    jump++;
  }
  return jump;
}

describe('Time Complexity', () => {
  describe('FrogJmp', () => {
    it('X=10, Y=85, D=30', () => {
      let X = 10;
      let Y = 85;
      let D = 30;
      assert.deepEqual(solution(X, Y, D), 3);
    });

    it('X=3, Y=999111321, D=7', () => {
      let X = 3;
      let Y = 999111321;
      let D = 7;
      assert.deepEqual(solution(X, Y, D), 142730189);
    });
  });
});
