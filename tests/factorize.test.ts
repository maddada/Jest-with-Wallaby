import factorize from '../src/factorize';

// Factorize a positive integer number into its prime factors.
// For example:
// o) 2 -> [2]
// o) 3 -> [3]
// o) 4 -> [2,2]
// o) 6 -> [2,3]
// o) 9 -> [3,3]
// o) 12 -> [2,2,3]
// o) 15 -> [3,5]

// 2 loops running
// check the numbers under our current number
  // if prime
  // we multiply it by another number which is below our inputed integer andsee if we get the integer itself

describe('factorize(number)', () => {
  // Only allowed input is Positive integers
  it(`when it recieves a negative integer it should throw an error'`, () => {
    expect(() => factorize(-1)).toThrow(new Error('Invalid Input: Negative Integer'));
  });
  
  it(`when it recieves anything other than an integer it should throw an error'`, () => {
    expect(() => factorize('1')).toThrow(new Error('Invalid Input: Not an Integer'));
  });
  
  // Factorizes positive integers correctly
  it(`when it recieves 2 it returns [2]'`, () => {
    expect(factorize(2)).toEqual([2]);
  });
  
  it(`when it recieves 3 it returns [3]'`, () => {
    expect(factorize(3)).toEqual([3]);
  });
  
  it(`when it recieves 4 it returns [2,2]'`, () => {
    expect(factorize(4)).toEqual([2,2]);
  });
  
  it(`when it recieves 6 it returns [2,3]'`, () => {
    expect(factorize(6)).toEqual([2,3]);
  });
  
  it(`when it recieves 9 it returns [3,3]'`, () => {
    expect(factorize(9)).toEqual([3,3]);
  });
  
  it(`when it recieves 12 it returns [2,2,3]'`, () => {
    expect(factorize(12)).toEqual([2,2,3]);
  });
  
  it(`when it recieves 15 it returns [3,5]'`, () => {
    expect(factorize(15)).toEqual([3,5]);
  });
});
