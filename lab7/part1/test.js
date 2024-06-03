// tests.js

describe('Array and String Functions', function() {

    describe('calculateSum()', function() {
        it('should return the sum of all numbers in the array', function() {
            assert.equal(calculateSum([5, 10, 15]), 30);
            assert.equal(calculateSum([-3, 3, 9]), 9);
        });
    });

    describe('calculateProduct()', function() {
        it('should return the product of all numbers in the array', function() {
            assert.equal(calculateProduct([2, 3, 4]), 24);
            assert.equal(calculateProduct([7, 8, 0]), 0);
        });
    });

    describe('reverseString()', function() {
        it('should return the reversed string', function() {
            assert.equal(reverseString('javascript'), 'tpircsavaj');
            assert.equal(reverseString('developer'), 'repoleved');
        });
    });

    describe('getLongWords()', function() {
        it('should return words longer than the given length', function() {
            assert.deepEqual(getLongWords(['apple', 'banana', 'pear'], 4), ['apple', 'banana']);
            assert.deepEqual(getLongWords(['short', 'longer', 'longest'], 5), ['longer','longest']);

           
        });
    });

});
