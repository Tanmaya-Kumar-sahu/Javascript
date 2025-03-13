//#primitive Datatypes

// 7 types : String,Number,Boolean,null,undefined,symbol,Bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34364746353442255n


//Reference Types(Non Primitive) Datatypes

//Array,Objects,Functions


const heros = ["saktiman" , "naagraj" , "doga"] //Array

let myObj ={
    name:"tanmay",   //object
    age:24,
}

const myFunction = function(){
    console.log("hello world");    //function
    
}

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3