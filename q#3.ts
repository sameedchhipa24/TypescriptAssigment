// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase

let PersonName:string="sameed"
// step no 01: Lowercase 
let lowercasename:string=PersonName.toLowerCase();
console.log(lowercasename);

// step no 02 : Uppercase
let uppercasename:string=PersonName.toUpperCase();
console.log(uppercasename);

// step no 03 :titleCase
let titlecase=PersonName.charAt(0).toUpperCase()+PersonName.slice(1)

console.log(titlecase);

