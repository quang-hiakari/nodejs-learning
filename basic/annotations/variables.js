"use strict";
let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;
// Built in objects
let now = new Date();
// Array
let colors = ['red', 'green', 'blue'];
let myNumber = [1, 2, 3];
let truths = [true, true, false];
// Classes
class Car {
}
let car = new Car();
// Object literal
let point = {
    x: 10,
    y: 20
};
// Function
const logNumber = (i) => {
    console.log(i);
};
//When to use annotations；
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
// 2) When we declare variable on one line
// and initilizate it later
let words = ['red', 'green', 'blue'];
let foundWord = false;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
