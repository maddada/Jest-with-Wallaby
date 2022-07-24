import balancedParens from '../src/balancedParens';

// Write a program to determine if the parentheses (), the brackets [], 
// and the braces { }, in a string are balanced.
// For example:
// {{)(}} is not balanced because ) comes before (
// ({)} is not balanced because ) is not balanced between {} 
// and similarly the { is not balanced between()
// [({})] is balanced
// {}([]) is balanced
// {()}[[{}]] is balanced

describe('balancedParens(string)', () => {
  // Only allowed input is a string
  it(`when it recieves '{}' it returns true`, () => {
    expect(balancedParens('{}')).toEqual(true);
  });
});
