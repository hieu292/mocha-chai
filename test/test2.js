'use strict,';

var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

function isEven(num) {
  return num % 2 === 0;
}

describe('isEven', function () {
  it('should return the true when number is even', function () {
    isEven(4).should.be.true;
  });
  it('should return the false when number is odd', function () {
    expect(isEven(5)).to.be.false;
  });
});
