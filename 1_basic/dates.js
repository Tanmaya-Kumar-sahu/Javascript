// dates

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(typeof myDate);


let myCreatedDate= new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",

})

