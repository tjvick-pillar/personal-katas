import assert from 'assert';
import add from '../main/RomanNumeralCalculator2';

describe('#add', () => {
  it('onePlusOneEqualsTwo', () => {
    const sum = add('I', 'I');

    assert.equal(sum, 'II');
  });

  // return constant

  it('onePlusTwoIsThree', () => {
    const sum = add('I', 'II');
    assert.equal(sum, 'III');
  });

  // concatenate and return

  it('twoPlusThreeEqualsFive', () => {
    const sum = add('II', 'III');
    assert.equal(sum, 'V');
  });

  // string replace IIIII to V

  it('onePlusFiveEqualsSix', () => {
    const sum = add('I', 'V');
    assert.equal(sum, 'VI');
  });

  // swap if first numeral is I

  it('fivePlusFiveEqualsTen', () => {
    const sum = add('V', 'V');
    assert.equal(sum, 'X');
  });

  // string replace VV to X

  it('fivePlusFourEqualsNine', () => {
    const sum = add('V', 'IV');
    assert.equal(sum, 'IX');
  });

  // string replace VIV to IX
  // refactored out replace lines here

  it('twoPlusFiveEqualsSeven', () => {
    assert.equal(add('II', 'V'), 'VII');
  });

  // swap if first numeral is I or II

  it('fivePlusTenEqualsFifteen', () => {
    assert.equal(add('V', 'X'), 'XV');
  });

  // also swap if first numeral is V

  it('sixPlusTenEqualsSixteen', () => {
    assert.equal(add('VI', 'X'), 'XVI');
  });

  // also swap if first numeral is VI

  it('sixPlusFourEqualsTen', () => {
    assert.equal(add('VI', 'IV'), 'X');
  });

  // replace IV with IIII on input
  // sort characters by romanNumeralOrder.indexOf
  // create romanNumeralOrder
  // split, sort, join
  // remove old stuff about swapping
  // may be a bit of a stretch, and should at minimum ignore the most recent test until I get the others passing

  // refactor to extract and rename methods

  it('ninePlusOneEqualsTen', () => {
    assert.equal(add('IX', 'I'), 'X');
  });

  // add IX to removeDoubleCharacters

  it('twentyPlusThirtyEqualsFifty', () => {
    assert.equal(add('XX', 'XXX'), 'L');
  });

  // add XXXXX to L in simplifyNumeral

  it('tenPlusFortyEqualsFifty', () => {
    assert.equal(add('X', 'XL'), 'L');
  });

  // add XL to XXXX in removeDoubleCharacters

  it('tenPlusThirtyEqualsForty', () => {
    assert.equal(add('X', 'XXX'), 'XL');
  });

  // add XXXX to XL in simplifyNumeral

  it('tenPlusFiftyEqualsSixty', () => {
    assert.equal(add('X', 'L'), 'LX');
  });

  // add L to romanNumeralOrder

  it('tenPlusOneHundredEqualsOneHundredTen', () => {
    assert.equal(add('X', 'C'), 'CX');
  });

  // add C to romanNumeralOrder

  it('ninetyPlusTwentyEqualsOneHundredTen', () => {
    assert.equal(add('XC', 'XX'), 'CX');
  });

  // add XC to removeDoubleCharacters
  // add LL to C in simplifyNumeral

  it('eightyPlusElevenEqualsNinetyOne', () => {
    assert.equal(add('LXXX', 'XI'), 'XCI');
  });

  // add LXL to XC in simplifyNumeral

  it('fortyFourPlusNinetyThreeEqualsOneThirtySeven', () => {
    assert.equal(add('XLIV', 'XCIII'), 'CXXXVII');
  });
});
