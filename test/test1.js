var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();
var a = true;

function add(num1, num2) {
  return num1 + num2;
}

describe('add', function () {

  var num1;

  beforeEach(function () {
    num1 = 5;
  });
  var num2 = 5;
  it('should be 5', function () {
    add(num1,num2).should.be.equal(10);
  });
  var num3 = 7;
  it('should be 12', function () {
    add(num1, num3).should.be.equal(12);
  });
});
