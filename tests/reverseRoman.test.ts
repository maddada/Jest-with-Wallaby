/*
Given a Roman number as a string (eg 'XX') determine its integer value (eg 20).
You cannot write numerals like IM for 999. 
Wikipedia states 'Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero.'
*/

import reverseRoman from '../src/reverseRoman';

describe('reverseRoman(string)', () => {
  it('to return null for empty string', () => {
    expect(() => reverseRoman('')).toThrow(new Error('No Roman Characters Provided'));
  });

  it('to throw an exception if an unknown character is given', () => {
    expect(() => reverseRoman('AGX')).toThrow(new Error('Invalid Character'));
  });

  it('when given MCMXC returns 1990', () => {
    expect(reverseRoman('MCMXC')).toEqual(1990);
  });

  it('when given viii returns 8', () => {
    expect(reverseRoman('viii')).toEqual(8);
  });

  it('when given MMVIII returns 2008', () => {
    expect(reverseRoman('MMVIII')).toEqual(2008);
  });

  it('when given XCIX returns 80', () => {
    expect(reverseRoman('LXXX')).toEqual(80);
  });

  it('when given DCC returns 700', () => {
    expect(reverseRoman('DCC')).toEqual(700);
  });
});
