const userEmail = []

if (userEmail) {
    console.log("got user email");
    
}else{
    console.log("don't have user email");
    
}


//falsy values
// false,0, -0 , bigint 0n , "" ,null,undefined,NaN
//Truthy value
//[],truth,"0","false" , " " ,{},function(){}-->empty parameter

if (userEmail.length === 0) {
    console.log("arry is empty");
    
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

// Nullish coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


//Ternary Operator

//condition ? true: false

const iceTeaPrice =100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");


