let currentUsers: string[] = ['John', 'Jane', 'Alex', 'Mike', 'Sarah'];
let newUsers: string[] = ['John', 'Mary', 'Sam', 'Alex', 'Emily'];

for (let newUser of newUsers) {
    let usernameTaken: boolean = false;

    for (let currentUser of currentUsers) {
        if (newUser === currentUser) {
            usernameTaken = true;
            break;
        }
    }

    if (usernameTaken) {
        console.log(`The username '${newUser}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}