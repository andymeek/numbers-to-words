import { numbersToWordsConverter } from './numbers-to-words-converter'

const testCases = [
  [0, 'zero'],
  [1, 'one'],
  [20, 'twenty'],
  [21, 'twenty-one'],
  [100, 'one hundred'],
  [202, 'two hundred and two'],
  [52, 'fifty-two'],
  [352, 'three hundred and fifty-two'],
  [1000, 'one thousand'],
  [3007, 'three thousand and seven'],
  [5204, 'five thousand two hundred and four'],
  [30020, 'thirty thousand and twenty'],
  [100000, 'one hundred thousand']
]

describe('numbers to words converter', () => {
  it.each(testCases)('given the number %p, it returns the correct result (%p)', (number, expectedResult) => {
    const result = numbersToWordsConverter(+number)
    expect(result).toEqual(expectedResult)
  })
})

describe('given the number cannot be converted', () => {
  it('throws an error', () => {
    expect(() => numbersToWordsConverter(-1)).toThrow('Number not found!')
  })
})
