const assert = require('assert')
const permutation = require('./index.js')

describe('normal tests', () => {
  it('should be equal arrays as three dimensions', () => {
    const expect = [
      [ 'a', 'a', 'a' ],
      [ 'a', 'a', 'b' ],
      [ 'a', 'a', 'c' ],
      [ 'a', 'b', 'a' ],
      [ 'a', 'b', 'b' ],
      [ 'a', 'b', 'c' ],
      [ 'a', 'c', 'a' ],
      [ 'a', 'c', 'b' ],
      [ 'a', 'c', 'c' ],
      [ 'b', 'a', 'a' ],
      [ 'b', 'a', 'b' ],
      [ 'b', 'a', 'c' ],
      [ 'b', 'b', 'a' ],
      [ 'b', 'b', 'b' ],
      [ 'b', 'b', 'c' ],
      [ 'b', 'c', 'a' ],
      [ 'b', 'c', 'b' ],
      [ 'b', 'c', 'c' ],
      [ 'c', 'a', 'a' ],
      [ 'c', 'a', 'b' ],
      [ 'c', 'a', 'c' ],
      [ 'c', 'b', 'a' ],
      [ 'c', 'b', 'b' ],
      [ 'c', 'b', 'c' ],
      [ 'c', 'c', 'a' ],
      [ 'c', 'c', 'b' ],
      [ 'c', 'c', 'c' ]
    ]
    const result = permutation('abc', 3)
    assert.deepStrictEqual(result, expect)
  })
})

describe('abnormal tests', () => {
  it('should be return undefined when limit could not recieved', () => {
    assert.throws(() => { permutation([], 1) }, /an effective character string/)
  })

  it('should be return undefined when limit is greater than the length of the string', () => {
    assert.throws(() => { permutation('abc', 4) }, /smaller than/)
  })

  it('should be return undefined when limit is a negative number', () => {
    assert.throws(() => { permutation('abc', -4) }, /should be a natural number/)
  })
})
