// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
// separate array. Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.



function makeGreat(magicians: string[]): string[] {
    const greatMagicians = [];
    for (const magician of magicians) {
      const greatMagician = `The Great ${magician}`;
      greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
  
  function showMagicians(magicians: string[]) {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  import { magicians } from "./q#42";
  
  const greatMagicians = makeGreat(magicians.slice());
  
  console.log("The original magicians:");
  showMagicians(magicians);
  
  console.log("The great magicians:");
  showMagicians(greatMagicians);