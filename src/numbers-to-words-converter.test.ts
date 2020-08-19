import { numbersToWordsConverter } from './numbers-to-words-converter'

test('0', () => {
  expect(numbersToWordsConverter(0)).toBe('zero')
})

test('1', () => {
  expect(numbersToWordsConverter(1)).toBe('one')
})

test('20', () => {
  expect(numbersToWordsConverter(20)).toBe('twenty')
})

test('21', () => {
  expect(numbersToWordsConverter(21)).toBe('twenty-one')
})

test('100', () => {
  expect(numbersToWordsConverter(100)).toBe('one hundred')
})

test('101', () => {
  expect(numbersToWordsConverter(101)).toBe('one hundred and one')
})

test('202', () => {
  expect(numbersToWordsConverter(202)).toBe('two hundred and two')
})

test('52', () => {
  expect(numbersToWordsConverter(52)).toBe('fifty-two')
})

test('352', () => {
  expect(numbersToWordsConverter(352)).toBe('three hundred and fifty-two')
})

test('1000', () => {
  expect(numbersToWordsConverter(1000)).toBe('one thousand')
})

test('3007', () => {
  expect(numbersToWordsConverter(3007)).toBe('three thousand and seven')
})

test('5204', () => {
  expect(numbersToWordsConverter(5204)).toBe('five thousand two hundred and four')
})

test('30020', () => {
  expect(numbersToWordsConverter(30020)).toBe('thirty thousand and twenty')
})

test('100000', () => {
  expect(numbersToWordsConverter(100000)).toBe('one hundred thousand')
})

test('100000', () => {
  expect(numbersToWordsConverter(100000)).toBe('one hundred thousand')
})
