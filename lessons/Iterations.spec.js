var assert = require('assert');

import { BinaryGap } from './Iterations';

describe('Iterations', function() {
  describe('BinaryGap', function() {
    it('with N=2', function() {
      assert.equal(BinaryGap(2), 0);
    });

    it('with N=9', function() {
      assert.equal(BinaryGap(9), 2);
    });

    it('with N=529', function() {
      assert.equal(BinaryGap(529), 4);
    });

    it('with N=20', function() {
      assert.equal(BinaryGap(20), 1);
    });

    it('with N=1041', function() {
      assert.equal(BinaryGap(1041), 5);
    });

    it('with N=16', function() {
      assert.equal(BinaryGap(16), 0);
    });

    it('with N=15', function() {
      assert.equal(BinaryGap(15), 0);
    });

    it('with N=1376796946', function() {
      assert.equal(BinaryGap(1376796946), 5);
    });

    it('with N=1610612737', function() {
      assert.equal(BinaryGap(1610612737), 28);
    });

    it('with N=328', function() {
      assert.equal(BinaryGap(328), 2);
    });
  });
});
