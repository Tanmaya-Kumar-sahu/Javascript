function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("M");
    console.log("A");
    console.log("Y");
}

//sayMyName()
                       //parameters//
// function addTwoNumbers(num1,num2){
//    console.log(num1 + num2)
// }

function addTwoNumbers(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
 }
             //arguments//
const result = addTwoNumbers(3,5)

// console.log("result:",result);


// function loginUserMsg(username){
//     if(username === undefined){
//        console.log("please enter a username")
//        return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMsg());


// function loginUserMsg(username){
//     if(!username){
//        console.log("please enter a username")
//        return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMsg());


function loginUserMsg(username = "sam"){
    if(username === undefined){
       console.log("please enter a username")
       return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("Tanmay"));
