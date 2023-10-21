// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//  Change an index in one of your programs to produce an index error. 
//  Make sure you correct the error before closing the program.

let colors:string[]=["red","blue","green"]

console.log(colors[3]);//Output:undefined
console.log(colors[4]);//Output:undefined


// This is because the array doesn't have an element at index 3 ,so colors[3] returns undefined.

// to fix the error, you can change the index to a valid value,like this:


console.log(colors[0]);//Output:red
console.log(colors[1]);//Output:blue
console.log(colors[2]);//Output:green
