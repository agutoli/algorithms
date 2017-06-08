var assert = require('assert');

import { FrogRiverOne } from './CountingElements';

describe('CountingElements', () => {
  describe('FrogRiverOne', () => {
    it('(5, [1, 3, 1, 4, 2, 3, 5, 4]) should return 6', () => {
      assert.equal(FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4]), 6);
    });

    it('(2, [1, 1, 1, 1]) should return -1', () => {
      assert.equal(FrogRiverOne(2, [1, 1, 1, 1]), -1);
    });

    it('(2, [2, 2, 2, 2, 2]) should return -1', () => {
      assert.equal(FrogRiverOne(2, [2, 2, 2, 2, 2]), -1);
    });

    it('(1, [1]) should return 0', () => {
      assert.equal(FrogRiverOne(1, [1]), 0);
    });

    it('(5, [1, 2, 3, 5, 3, 1]) should return -1', () => {
      assert.equal(FrogRiverOne(5, [1, 2, 3, 5, 3, 1]), -1);
    });

    it('(3, [1, 3, 1, 3, 2, 1, 3]) should return 4', () => {
      assert.equal(FrogRiverOne(3, [1, 3, 1, 3, 2, 1, 3]), 4);
    });
  });
});
