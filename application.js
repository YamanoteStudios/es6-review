
var createGreeting = function(message, name) {
    return message + name ;
}


// In the arrow function expression you don't use the return keyword
// In the arrow function expression you do not have to use the braces.
var arrowGreeting = (message ,  name ) => message + name;


// console.log(createGreeting("Hello ", "Chris"));
console.log(arrowGreeting("Hello ", "Chris"));
