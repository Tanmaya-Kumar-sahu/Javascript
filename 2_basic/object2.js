//const tinderUser = new Object();
const tinderUser= {}

tinderUser.id = "123abc"
tinderUser.name = "Ajit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@google.com",
    fullname:{
        userFullName:{
            firstname:"Tanmay",
            lastname:"sahu"
        }
    }
}

//console.log(regularUser.fullname.userFullName.firstname);

const obj1= {1:"a",2:"b"}
const obj2= {3:"c",4:"d"}
const obj4= {5:"e",6:"f"}


//const obj3 = {obj1,obj2}

//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2,...obj4}
//console.log(obj3);


const users = [
    {
        id : 1,
        email:"tanmay@google.com"
    },
    {
        id : 2,
        email:"tanmay@chatgpt.com"
    },
    {
        id : 3,
        email:"tanmay@microsoft.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

