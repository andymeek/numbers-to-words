const numbers: {
  num: number
  label: string
}[] = [
  { num: 1000000, label: 'million' },
  { num: 1000, label: 'thousand' },
  { num: 100, label: 'hundred' },
  { num: 90, label: 'ninety' },
  { num: 80, label: 'eighty' },
  { num: 70, label: 'seventy' },
  { num: 60, label: 'sixty' },
  { num: 50, label: 'fifty' },
  { num: 40, label: 'forty' },
  { num: 30, label: 'thirty' },
  { num: 20, label: 'twenty' },
  { num: 19, label: 'nineteen' },
  { num: 18, label: 'eighteen' },
  { num: 17, label: 'seventeen' },
  { num: 16, label: 'sixteen' },
  { num: 15, label: 'fifteen' },
  { num: 14, label: 'fourteen' },
  { num: 13, label: 'thirteen' },
  { num: 12, label: 'twelve' },
  { num: 11, label: 'eleven' },
  { num: 10, label: 'ten' },
  { num: 9, label: 'nine' },
  { num: 8, label: 'eight' },
  { num: 7, label: 'seven' },
  { num: 6, label: 'six' },
  { num: 5, label: 'five' },
  { num: 4, label: 'four' },
  { num: 3, label: 'three' },
  { num: 2, label: 'two' },
  { num: 1, label: 'one' },
  { num: 0, label: 'zero' }
]

export function numbersToWords(number: number): string {
  const foundNumber = numbers.find(({ num }) => number >= num)

  if (!foundNumber) {
    throw new Error('Number not found!')
  }

  const { label, num } = foundNumber
  let words = ''

  if (number < 100) {
    words += label
    number -= num

    if (number > 0) {
      words += `-${numbersToWords(number)}`
    }
  } else {
    const result = Math.floor(number / num)
    const remainder = number % num

    if (remainder > 0 && remainder <= 100) {
      return `${numbersToWords(result)} ${label} and ${numbersToWords(remainder)}`
    } else if (remainder > 100) {
      return `${numbersToWords(result)} ${label} ${numbersToWords(remainder)}`
    } else {
      return `${numbersToWords(result)} ${label}`
    }
  }

  return words
}
