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

 
  
  

  // display in plunker preview
  function displayInPreview(string) {
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode(string); 
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv)
  }


  var fs = [];

/* using let in the for loop generates a new i for each iteration  */
  for(let i = 0 ; i < 10; i++) {
      fs.push(function () {
          console.log(i); // this sign is the same i each time
      })
  }

  fs.forEach(function(f) {
      f();
      /**
       * Bunch of 10s
       *10
        10
        10
        10
        10
        10
        10
        10
        10
        10 */
  })

  