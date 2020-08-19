import { numbersToWords } from './numbers-to-words'

test('0', () => {
  expect(numbersToWords(0)).toBe('zero')
})

test('1', () => {
  expect(numbersToWords(1)).toBe('one')
})

test('20', () => {
  expect(numbersToWords(20)).toBe('twenty')
})

test('21', () => {
  expect(numbersToWords(21)).toBe('twenty-one')
})

test('100', () => {
  expect(numbersToWords(100)).toBe('one hundred')
})

test('101', () => {
  expect(numbersToWords(101)).toBe('one hundred and one')
})

test('202', () => {
  expect(numbersToWords(202)).toBe('two hundred and two')
})

test('52', () => {
  expect(numbersToWords(52)).toBe('fifty-two')
})

test('352', () => {
  expect(numbersToWords(352)).toBe('three hundred and fifty-two')
})

test('1000', () => {
  expect(numbersToWords(1000)).toBe('one thousand')
})

test('3007', () => {
  expect(numbersToWords(3007)).toBe('three thousand and seven')
})

test('5204', () => {
  expect(numbersToWords(5204)).toBe('five thousand two hundred and four')
})

test('30020', () => {
  expect(numbersToWords(30020)).toBe('thirty thousand and twenty')
})

test('100000', () => {
  expect(numbersToWords(100000)).toBe('one hundred thousand')
})

test('100000', () => {
  expect(numbersToWords(100000)).toBe('one hundred thousand')
})
