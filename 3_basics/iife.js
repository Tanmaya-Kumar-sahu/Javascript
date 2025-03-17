// Immidietly Invoked function Expression (IIFE)
// ---------------Normal------------------
// function chai(){
//     console.log("DB connected");
    
// }

// chai()
//-----------------iife-----------------
(function chai(){
    //named IIFE
    console.log("DB connected");
    
})();

//IIFE is used to create a private scope preventing variables and functions from polluting global scope
// and execute code immidietly.


((name)=>{
    //unnamed IIFE
    console.log(`DB connected 2 ${name}`);   // IIFE in Arrow function
    
})("Tanmay")