const assert = required('chai').assert;
const myApp = required('../src/isPrime.js');

describe "Prime", function(){
	describe "handle valid input", function() {
		it("should return [2,3,5] as prime for 5", function(){
			assert.equal(myApp.getPrimes(5),[2,3,5]);
		});
		it("should return [2,3,5,7] as prime for 10", function(){
			assert.equal(myApp.getPrimes(10),[2,3,5,7]);
		});
	})

	describe("hadle invalid input", function(){
		it("should return Not Prime for 1", function() {
			assert.equal(myApp.getPrimes(1), 'Not Prime');
		it("should return Enter a number for test", function() {
			assert.equal(myApp.getPrimes('Test'), 'Enter a number greater than 2');
		});
	})
}