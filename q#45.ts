
// Cars: Write a function that stores information about a car in a Object. The function should always receive a 
// manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function 
// with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.


function carInfo(manufacturer: string, model: string, ...kwargs: Array<[string, String|number]>) {
    const car1 ={};
    car1["manufacturer"] = manufacturer;
    car1["model"] = model;
    for (const [key ,value] of kwargs)  {
        car1[key]=value
    }
    return car1;
}
  
  // Call the function with the required information and two other name-value pairs.
  const car1 = carInfo("Tesla", "Model 3",["color","silver"],["year",2019]);
  // 
  // Print the car information object to make sure all the information was stored correctly.
  console.log(car1);



