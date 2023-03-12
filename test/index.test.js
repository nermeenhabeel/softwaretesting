const assert = require('assert');
const expect = require('chai').expect;

const createArray = (number) => {
  if (typeof number !== 'number') {
    throw new TypeError('parameter should be a number');
  }

  const myArray = Array.from(Array(number).keys());
  return myArray;
};

describe('createArray', () => {
  it('returns an array', () => {
    const input = 5;
    const output = createArray(input);
    assert.deepStrictEqual(Array.isArray(output), true);
  });

  it('returns an array of length equal to the input number', () => {
    const input = 3;
    const output = createArray(input);
    assert.deepStrictEqual(output.length, input);
  });

  it('returns an empty array when input number is zero', () => {
    const input = 0;
    const output = createArray(input);
    assert.deepStrictEqual(output, []);
  });


  it('throws an error when input is not a number', () => {
    assert.throws(() => createArray('not a number'), TypeError);
    assert.throws(() => createArray(true), TypeError);
  });

  it('returns an array of unique numbers', () => {
    const input = 5;
    const output = createArray(input);
    const unique = output.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    assert.deepStrictEqual(unique.length, input);
  })
});