import assert from 'assert';
import add from '../main/RomanNumeralCalculator';

describe('#add', () => {
  it('IPlusIEqualsII', () => {
    assert.equal(add('I', 'I'), 'II');
  });

  it('IIPlusIEqualsIII', () => {
    assert.equal(add('II', 'I'), 'III');
  });

  it('IIPlusIIIEqualsV', () => {
    assert.equal(add('II', 'III'), 'V');
  });

  it('IPlusVEqualsVI', () => {
    assert.equal(add('I', 'V'), 'VI');
  });

  it('VPlusIEqualsVI', () => {
    assert.equal(add('V', 'I'), 'VI');
  });

  it('VPlusVEqualsX', () => {
    assert.equal(add('V', 'V'), 'X');
  });

  it('IIPlusIIEqualsIV', () => {
    assert.equal(add('II', 'II'), 'IV');
  });

  it('VIIPlusIIEqualsIX', () => {
    assert.equal(add('VII', 'II'), 'IX');
  });

  it('VIPlusIVEqualsX', () => {
    assert.equal(add('VI', 'IV'), 'X');
  });

  it('IIPlusVEqualsVII', () => {
    assert.equal(add('II', 'V'), 'VII');
  });

  it('IVPlusVIEqualsX', () => {
    assert.equal(add('IV', 'VI'), 'X');
  });

  it('IPlusIXEqualsX', () => {
    assert.equal(add('I', 'IX'), 'X');
  });

  it('XXXPlusXXEqualsL', () => {
    assert.equal(add('XXX', 'XX'), 'L');
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

  it('XPlusXXXEqualsXL', () => {
    assert.equal(add('X', 'XXX'), 'XL');
  });

  it('LXPlusXXXEqualsXC', () => {
    assert.equal(add('LX', 'XXX'), 'XC');
  });

  it('XPlusLEqualsLX', () => {
    assert.equal(add('X', 'L'), 'LX');
  });

  it('XPlusCEqualsCX', () => {
    assert.equal(add('X', 'C'), 'CX');
  });

  it('XLIVPlusXCIIIEqualsCXXXVII', () => {
    assert.equal(add('XLIV', 'XCIII'), 'CXXXVII')
  });
});
