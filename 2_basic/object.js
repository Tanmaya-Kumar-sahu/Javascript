//singleton

//object literals
//Object.create

const mySym = Symbol('key1')


const jsUser = {
    name:"Tanmay",
    "full-name":"Tanmaya kumar sahu",
    age:25,
    [mySym]:"mykey1",
    location:"Hyderabad",
    email:"tanmay@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full-name"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

 jsUser.email = "tanmay@chatgpt.com"
 //Object.freeze(jsUser)
 jsUser.email = "tanmay@microsoft.com"
 //console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
    
}

jsUser.greeting2 = function(){
    console.log(`hello js user , ${this.name}`);
    
}

console.log(jsUser.greeting());

console.log(jsUser.greeting2());




