#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers_to_words_converter_1 = require("./numbers-to-words-converter");
const [number] = process.argv.slice(-1);
console.log(numbers_to_words_converter_1.numbersToWordsConverter(+number).trim());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy10by13b3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9udW1iZXJzLXRvLXdvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZFQUFzRTtBQUV0RSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSJ9