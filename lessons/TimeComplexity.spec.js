var assert = require('assert');

import { FrogJmp, PermMissingElem } from './TimeComplexity';

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

  describe('PermMissingElem', () => {
    it('should return 4', () => {
      assert.equal(PermMissingElem([2, 3, 1, 5]), 4);
    });

    it('should return 1', () => {
      assert.equal(PermMissingElem([2]), 1);
    });

    it('should return 2', () => {
      assert.equal(PermMissingElem([1, 1, 3]), 2);
    });

    it('empty list', () => {
      assert.equal(PermMissingElem([]), 1);
    });

    it('only one item', () => {
      assert.equal(PermMissingElem([1]), 2);
    });
  });
});
