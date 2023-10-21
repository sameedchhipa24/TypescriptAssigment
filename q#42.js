"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicians = void 0;
function makeGreat(magicians) {
    for (const index in magicians) {
        magicians[index] = "The Great " + magicians[index];
    }
    return magicians;
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
exports.magicians = ["David Copperfield", "Harry Houdini", "David Blaine"];
const greatMagicians = makeGreat(exports.magicians.slice());
console.log("The original magicians:");
showMagicians(exports.magicians);
console.log("The great magicians:");
showMagicians(greatMagicians);
