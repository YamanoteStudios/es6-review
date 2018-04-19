var message  = "hi";
 
// {
//     message = "bye";
// }

function greet() {var message =  "bye"}


// Using Let keyword
// allows us to avoid impacting our message variable at the top.

{
    let  message = "bye";
}

console.log(message); // bye