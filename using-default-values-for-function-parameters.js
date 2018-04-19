function feeling(who = "Chris" , emotion = "horny") {
  return who + " is " + emotion;
}

console.log(feeling("Jamie","so wet"));

function start(method) {
   method();
}


// start(); //  the started() is undefined
start(function() { 
    console.log("Method Function has been called!!")
}) // Method Function has been called!!
