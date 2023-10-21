let currentUsers = ['John', 'Jane', 'Alex', 'Mike', 'Sarah'];
let newUsers = ['John', 'Mary', 'Sam', 'Alex', 'Emily'];
for (let newUser of newUsers) {
    let usernameTaken = false;
    for (let currentUser of currentUsers) {
        if (newUser === currentUser) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log(`The username '${newUser}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
