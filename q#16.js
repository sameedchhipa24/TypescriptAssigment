// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to
//  invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your
//  program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let guestlist3 = ['M.Raza', 'Sameed', 'Abdullah'];
// remove the guest who can't make it
let Unabletoattend = guestlist3.pop();
// print a message about who can't make it 
console.log(`${Unabletoattend} can't make it to dinner.`);
// Add a new guest to the list
guestlist3.push("muzamil");
// add three more guests to the list 
guestlist3.unshift("Mudassir");
guestlist3.splice(3, 0, "Musavir");
guestlist3.push("Mahad");
// print a message about the bigger table 
console.log("Good news! We found a bigger dinner table.");
// print a new set of invitation messsages
for (let i = 0; i < guestlist3.length; i++) {
    console.log(`Dear ${guestlist3[i]}, I would be honored if you could join me for dinner.`);
}
