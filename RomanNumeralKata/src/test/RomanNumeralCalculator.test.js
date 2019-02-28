import assert from 'assert';
import add from '../main/RomanNumeralCalculator';

describe('#add', () => {
  it('onePlusOneEqualsTwo', () => {
    const sum = add('I', 'I');

    assert.equal(sum, 'II');
  });
});
