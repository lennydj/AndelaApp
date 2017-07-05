const assert = require('chai').assert;
const myApp = require('../src/isPrime.js');

describe ("isPrime", function(){

	describe ("handle valid input", function() {
		it("should return [2,3,5] as prime for 5", function(){
			assert.deepEqual(myApp.getPrimes(5),[2,3,5]);
		});
		it("should return [2,3,5] as prime for 2", function(){
			assert.deepEqual(myApp.getPrimes(2),[2]);
		});
		it("should return [2,3,5,7] as prime for 10", function(){
			assert.deepEqual(myApp.getPrimes(10),[2,3,5,7]);
		});
		it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ] as prime for 10", function(){
			assert.deepEqual(myApp.getPrimes(30),[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
		});
		it("should return [2,3,5,7] as prime for 7.5", function(){
			assert.deepEqual(myApp.getPrimes(7.5),[2,3,5,7]);
		});
	})

	describe("handle invalid input", function(){
		it("should return 'Enter a number greater than 2' for 1", function() {
			assert.equal(myApp.getPrimes(1), 'Enter a number greater than 2');
		});
		it("should return 'Enter a number greater than 2'", function() {
			assert.equal(myApp.getPrimes('Test'), 'Enter a number greater than 2');
		});
		it("should return 'Enter a number greater than 2'", function() {
			assert.equal(myApp.getPrimes('-5'), 'Enter a number greater than 2');
		});
		it("should return 'Enter a number greater than 2'", function() {
			assert.equal(myApp.getPrimes('0.5'), 'Enter a number greater than 2');
		});
		it("should return 'Enter a number greater than 2'", function() {
			assert.equal(myApp.getPrimes('3.5'), 'Enter a number greater than 2');
		});
	})
})
