var assert = require('assert');

import { FrogJmp } from './TimeComplexity';

describe('Time Complexity', () => {
  describe('FrogJmp', () => {
    it('X=10, Y=85, D=30', () => {
      let X = 10;
      let Y = 85;
      let D = 30;
      assert.deepEqual(FrogJmp(X, Y, D), 3);
    });

    it('X=3, Y=999111321, D=7', () => {
      let X = 3;
      let Y = 999111321;
      let D = 7;
      assert.deepEqual(FrogJmp(X, Y, D), 142730189);
    });
  });
});
