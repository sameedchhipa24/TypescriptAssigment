// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered.
//   Call the function three times, using a different number of arguments each time.

function makeSandwich(items: string[]) {
    console.log("You ordered a sandwich with the following items:");
    for (let i=0;i<items.length;i++) {
      console.log(items[i])
    }
  }
  
 
  makeSandwich(["ham", "cheese", "lettuce"]);
  makeSandwich(["turkey", "bacon", "tomato"]);
  makeSandwich(["roast beef", "cucumber", "onion"]);