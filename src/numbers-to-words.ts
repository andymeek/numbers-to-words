import { numbersToWordsConverter } from './numbers-to-words-converter'

const [number] = process.argv.slice(-1)

console.log(numbersToWordsConverter(+number))
