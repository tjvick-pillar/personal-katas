import assert from 'assert';
import add from '../main/RomanNumeralCalculator3';

describe('#add', () => {
  it('IPlusIEqualsII', () => {
    assert.equal(add('I', 'I'), 'II');
  });

  it('IPlusIIEqualsIII', () => {
    assert.equal(add('I', 'II'), 'III');
  });

  it('IIPlusIIIEqualsV', () => {
    assert.equal(add('II', 'III'), 'V');
  });

  it('IPlusVEqualsVI', () => {
    assert.equal(add('I', 'V'), 'VI');
  });

  it('VPlusVEqualX', () => {
    assert.equal(add('V', 'V'), 'X');
  });

  it('IIPlusIIEqualsIV', () => {
    assert.equal(add('II', 'II'), 'IV');
  });

  it('VIPlusIIIEqualsIX', () => {
    assert.equal(add('VI', 'III'), 'IX');
  });

  it('IIPlusVEqualsVII', () => {
    assert.equal(add('II', 'V'), 'VII');
  });

  it('VPlusXEqualsXV', () => {
    assert.equal(add('V', 'X'), 'XV');
  });

  it('VIPlusIVEqualsX', () => {
    assert.equal(add('VI', 'IV'), 'X');
  });

  it('IVPlusVIEqualsX', () => {
    assert.equal(add('IV', 'VI'), 'X');
  });

  it('IPlusIXEqualsX', () => {
    assert.equal(add('I', 'IX'), 'X');
  });

  it('XXPlusXXXEqualsL', () => {
    assert.equal(add('XX', 'XXX'), 'L');
  });

  it('LPlusLEqualsC', () => {
    assert.equal(add('L', 'L'), 'C');
  });

  it('XLPlusXEqualsL', () => {
    assert.equal(add('XL', 'X'), 'L');
  });

  it('XCPlusXEqualsC', () => {
    assert.equal(add('XC', 'X'), 'C');
  });

  it('XXPlusXXEqualsXL', () => {
    assert.equal(add('XX', 'XX'), 'XL');
  });

  it('LXXPlusXXEqualsXC', () => {
    assert.equal(add('LXX', 'XX'), 'XC');
  });

  it('XLIVPlusXCIIIEqualsCXXXVII', () => {
    assert.equal(add('XLIV', 'XCIII'), 'CXXXVII');
  });
});
