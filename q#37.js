// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
//  I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with 
//  a different message.
function make_shirt(size = "Large", message = "I Love Typescript") {
    console.log(`The size of the shirt should be ${size}. Write a ${message} on the shirt. `);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Github");
