var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();
var sinon = require('sinon');

describe('sinon test', function(){
  var student, schedule;
  beforeEach(function () {
    student = {
      dropClass: function (classId, cb) {
        if (!!cb.dropClass) {
          cb.dropClass();
        } else {
          cb();
        }
      },
        addClass: function (schedule) {
          if (!schedule.classIsFull()) {
            return true;
          } else {
            return false;
          }
        }
      };
      schedule = {
        dropClass: function () {
          console.log('you there!');
        },
        classIsFull: function () {
          return true;
        }
      };
    });

  describe('call student.dropClass', function(){
    it('should be called', function(){
        var spy = sinon.spy();
        student.dropClass(1, spy);
        spy.called.should.be.true;
    });
    it('should be called function', function(){
        function onClassDropped() {
          console.log('helloworld');
        }
        var spy = sinon.spy(onClassDropped);
        student.dropClass(2, spy);
        spy.called.should.be.true;
    });
    it('should call the callback even if it is a method of an object', function(){
        sinon.spy(schedule, 'dropClass');
        student.dropClass(6, schedule);
        schedule.dropClass.called.should.be.true;
    });
  });
  describe('student with stub', function(){
    it('should call a stubbed method', function(){
        var stub = sinon.stub(schedule);
        student.dropClass(5, stub);
        stub.dropClass.called.should.be.true;
    });
    it('should return true when the class is not full', function(){
      var stub = sinon.stub(schedule);
      stub.classIsFull.returns(false);

      var returnVal = student.addClass(stub);
      returnVal.should.be.true;
    });
  });
  describe('student with mock', function(){
    it('should mock schedule', function(){
        var mockObj = sinon.mock(schedule);
        var expectation = mockObj.expects('classIsFull').once();
        // var expectation = mockObj.expects('classIsFull').twice();

        student.addClass(schedule);
        expectation.verify(); 
    });
  });
});
