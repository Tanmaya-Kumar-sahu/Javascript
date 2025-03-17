// global scope local scope

// let a= 10
// const b = 20
// var c = 30


// console.log(a);
// console.log(b);
// console.log(c);


//var c=300
let a = 100         // global scope
if (true) {
    let a= 10
    const b = 20     // block scope
    var c = 30
    console.log("inner:",a);
    
}
console.log(a);
//console.log(b);
console.log(c);


// browser scope and node scope is totally different