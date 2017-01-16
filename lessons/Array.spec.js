var assert = require('assert');

import { CyclicRotation, OddOccurrencesInArray } from './Array';

describe('Array', function() {
  describe('CyclicRotation', function() {
    let LIST;
    beforeEach(() => {
      LIST = [3, 8, 9, 7, 6];
    });

    it('with empty array', function() {
      let rotation = 3;
      assert.deepEqual(CyclicRotation([], rotation), []);
    });

    it('with rotation=3', function() {
      let rotation = 3;
      assert.deepEqual(CyclicRotation(LIST, rotation), [9, 7, 6, 3, 8]);
    });

    it('with rotation=1', function() {
      let rotation = 1;
      assert.deepEqual(CyclicRotation(LIST, rotation), [6, 3, 8, 9, 7]);
    });
  });

  describe('OddOccurrencesInArray', function() {
    let LIST;

    beforeEach(() => {
      LIST = [9, 3, 9, 3, 9, 7, 9];
    });

    it('should return unpared value', function() {
      assert.equal(OddOccurrencesInArray(LIST), 7);
    });
  });
});
