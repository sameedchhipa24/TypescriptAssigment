// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
// name, print a message to them. The text of each message should be the same, but each message should 
// be personalized with the person’s name.



let names:string[]=["sameed","ali","muzamil","muddasir","musavir"]

// Loop through each time in the array
for (let i=0;i<names.length;i++)
{
// print a personalize message for each friend

console.log(`Good morning ${names[i]}, I hope you are having a fantastic day!`)
}