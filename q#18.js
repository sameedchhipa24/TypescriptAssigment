// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let placestovisit = ['Pakistan', 'China', 'Afghanistan', 'Iran', 'Turkey'];
// • Print your array in its original order.
console.log("Original Order");
console.log(placestovisit);
// ['Pakistan','China','Afghanistan','Iran','Turkey']
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order");
console.log([...placestovisit].sort());
// • Show that your array is still in its original order by printing it.
console.log("Original Order Again:");
console.log(placestovisit);
// • Print your array in reverse alphabetical order without changing the order of the original list==.
console.log("Reverse Alphabetical Order");
console.log([...placestovisit].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Original Order Again:");
console.log(placestovisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
placestovisit.reverse();
console.log("Reversed Order:");
console.log(placestovisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placestovisit.reverse();
console.log("Original Order Again:");
console.log(placestovisit);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placestovisit.sort();
console.log("Alhabetical Order:");
console.log(placestovisit);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placestovisit.sort().reverse();
console.log("Reverse Alphabetical Order");
console.log(placestovisit);
