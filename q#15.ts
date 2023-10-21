// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
//  send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program
//  stating the name of the guest who can’t make it.
let guestlist1:string[]=['M.Raza','Sameed','Abdullah']


let UnableToAttend=guestlist1.pop();
console.log(`${UnableToAttend} can't make it to dinner`);

guestlist1.push("Muzammil");

for(let i=0;i<guestlist1.length;i++){
    console.log(`Hey ${guestlist1[i]},I would be honored if you could join me for dinner.`);
    
    }
    




