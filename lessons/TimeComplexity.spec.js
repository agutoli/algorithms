var assert = require('assert');

import { FrogJmp, PermMissingElem, TapeEquilibrium } from './TimeComplexity';

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

  describe('TapeEquilibrium', () => {
    it('should return 5', () => {
      assert.equal(TapeEquilibrium([5]), 5);
    });

    it('should return 7', () => {
      assert.equal(TapeEquilibrium([1, 8]), 7);
    });

    it('should return 1', () => {
      assert.equal(TapeEquilibrium([1, 8, 10]), 1);
    });
    
    it('should return 2000', () => {
      assert.equal(TapeEquilibrium([-1000, 1000]), 2000);
    });

    it('should return 1', () => {
      assert.equal(TapeEquilibrium([3, 1, 2, 4, 3]), 1);
    });

    it('should return 20', () => {
      assert.equal(TapeEquilibrium([-10, -20, -30, -40, 100]), 20);
    });
  });
});
