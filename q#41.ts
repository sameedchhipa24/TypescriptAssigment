// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints 
// the name of each magician in the array.

function ShowMagicians(magicians: string[]): void {
     for (let i = 0; i < magicians.length; i++) {
       console.log(magicians[i]);
     }
   }
   
   let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
   ShowMagicians(magicianNames);