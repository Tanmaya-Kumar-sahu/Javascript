// Fuction with object

//                            //rest operator
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,500));

                         
 function calculateCartPrice(val1,val2,...num1){
    return num1
}
                        
//console.log(calculateCartPrice(200,400,500,2000));


const user={

    username:"Tanmay",
    price:299
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
     
}

//handleObject(user)
handleObject({
    username :"Sam",
    price:300
})

const myNewarray = [200,300,400,500]

function returnSecondValue(getArry){
    return getArry[1]
}

console.log(returnSecondValue(myNewarray))