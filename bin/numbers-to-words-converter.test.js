"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers_to_words_converter_1 = require("./numbers-to-words-converter");
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
];
describe('numbers to words converter', () => {
    it.each(testCases)('given the number %p, it returns the correct result (%p)', (number, expectedResult) => {
        const result = numbers_to_words_converter_1.numbersToWordsConverter(+number);
        expect(result).toEqual(expectedResult);
    });
});
describe('given the number cannot be converted', () => {
    it('returns an error', () => {
        expect(numbers_to_words_converter_1.numbersToWordsConverter(-1)).toBe('Error: number not found!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy10by13b3Jkcy1jb252ZXJ0ZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9udW1iZXJzLXRvLXdvcmRzLWNvbnZlcnRlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkVBQXNFO0FBRXRFLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztJQUNYLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUNWLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQztJQUNkLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQztJQUNsQixDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUM7SUFDcEIsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7SUFDNUIsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDO0lBQ2pCLENBQUMsR0FBRyxFQUFFLDZCQUE2QixDQUFDO0lBQ3BDLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQztJQUN0QixDQUFDLElBQUksRUFBRSwwQkFBMEIsQ0FBQztJQUNsQyxDQUFDLElBQUksRUFBRSxvQ0FBb0MsQ0FBQztJQUM1QyxDQUFDLEtBQUssRUFBRSw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQztDQUNqQyxDQUFBO0FBRUQsUUFBUSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLHlEQUF5RCxFQUFFLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxFQUFFO1FBQ3ZHLE1BQU0sTUFBTSxHQUFHLG9EQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUN4QyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLHNDQUFzQyxFQUFFLEdBQUcsRUFBRTtJQUNwRCxFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxvREFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFDdEUsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9