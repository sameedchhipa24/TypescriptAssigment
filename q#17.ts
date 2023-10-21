let guestlist4=['M.Raza','Sameed','Abdullah','Muzamil','Mudasir','Musavir'];

// Print a message about the smaller table
console.log("Bad news! The new table won't arrive in time for dinner.we can only invite two people.");

// Remove guests from the list until only two remain
guestlist4.pop()
guestlist4.pop()
guestlist4.pop()
guestlist4.pop()

// print a message to each of the two remaining guests
for(let i=0;i<guestlist4.length;i++){
    console.log(`Dear ${guestlist4[i]},I'm excited to have you over for dinner!`);
}

// Remove the last two guests from the list
guestlist4.pop();
guestlist4.pop();

// Print the empty list
console.log(guestlist4);

/* this program prints a message about the smaller table,removes guests from the list until only two remain,
 and prints a message to the remaining guests. Then,it removes the last two guests from the list and prints
 the empty.*/



