// Testing file for JSON examples
// var should = require('chai').should();
var expect = require('chai').expect
var ex = require('./ex.js').load('./exercise.js');
var data = require('../data.json');

ex.data = data;

describe('JSON Exercises - list people taking course', function() {
    it('List people taking 0.00', function() {
        expect(ex.getCourseList('0.00')).to.be.empty;
    });
});

describe('JSON Exercises - get getHobbies', function() {
    it('List hobbies', function() {
        expect(ex.getHobbies()).to.eql(["golf", "tango", "basketball", "guitar", "french", "skydiving", "swimming", "travel"]);
    });
});