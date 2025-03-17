// if 

// if(true){

// }


// if(false){

// }

const isUserLoggedIn =true 

if(isUserLoggedIn){

}

//condition operator
// <,>,<=,>=,==,!=,=== , !==

if (2 === "2") {
    console.log("executed");
    
}



// const temprature = 41
// if (temprature < 50) {
//     console.log("temprature is less than 50");
    
// }else{
// console.log("temprature is grater than 50");
// }


// const score = 200 

// if (score>100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);



// short hand notation
// const balance = 1000

// if (balance >500) console.log("test");  // implicit scope


//Multiple Condition

// const balance =1000
// if (balance<500) {
//     console.log("less than 500");
    
// }else if(balance <750){
//     console.log("less than 750");
    
// }else if (balance<900) {
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const DebitCard = true
const loggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && DebitCard && 2==2) {
    console.log("allow to buy course");
    
}

if (loggedInFromGoogle || LoggedInFromEmail) {
    console.log("user logged in");
    
}