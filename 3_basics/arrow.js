const user ={
    username :"tanmay",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username ="tanmay"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "Tanmay"
//     console.log(this.username);
    
// }
const chai = ()=>{
    let username = "Tanmay"
    console.log(this);
    
}
//chai()
//-------------------------Baic Arrow function----------------
// const addTwoNUm = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwoNUm(5,6));

//------------------ implicit return--------------------------

//const addTwo = (num1,num2) => num1+num2
//const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({name:"tanmay"})

console.log(addTwo(5,6));


// const myArray = [2,3,4,5,6]

// myArray.forEach(()=>())