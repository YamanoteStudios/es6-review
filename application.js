
var createGreeting = function(message, name) {
    return message + name ;
}


// In the arrow function expression you don't use the return keyword
// In the arrow function expression you do not have to use the braces.
//multi-variable
var arrowGreeting = (message,name ) => message + name;

// single variable
var arrowSingleVarGreeting = message => "Single Variable"

/**
 *   var oldES5Greeting = function(message) {
 *   return message;
 * }
 * 
 */

var squared = x => x * x ;

// console.log(createGreeting("Hello ", "Chris"));
console.log(arrowGreeting("Hello ", "Chris"));

console.log(arrowSingleVarGreeting("Single Variable"));

console.log(squared(5));


var deliveryBoy ={
    name: "Old Boy",
    
    handleMessage: function (message,handler){
    handler(message);
    },
    
    receive: function () {
    
      this.handleMessage("Hello, ", message =>  displayInPreview(message + this.name));
    }
  }
  
  deliveryBoy.receive();
  

      var arrowFunctionDeliveryBoy = {
        name: "Chris",
        
        handleMessage: function (message,handler){
        handler(message);
        },
        
        receive: function () {
            var that = this;  // get proper name
            
            this.handleMessage("Hello, ", (message) => {
                     that.name ;
                     console.log(message + that.name);
            })
        }
        
      }
      
      arrowFunctionDeliveryBoy.receive();
      
      function displayInPreview(string) {
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode(string); 
        newDiv.appendChild(newContent);
        document.body.appendChild(newDiv)
      }
  