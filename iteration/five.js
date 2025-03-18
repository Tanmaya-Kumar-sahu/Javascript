const coding = ["js" , "py" , "java", "php" ,".net"]

// coding.forEach( function (item) {
//     console.log(item);
    
//  } )

// coding.forEach((item) => {
//    console.log(item);
   
// })


// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

coding.forEach((item , index,arr)=>{
console.log(item,index,arr);

})

const myCoding = [
    {
        languagename : "javascript",
        languageFileName : "js"
    },
    {
        languagename : "python",
        languageFileName : "py"
    },
    {
        languagename : "java",
        languageFileName : "java"
    }
]

myCoding.forEach((item)=>{
   console.log(item.languagename);
   
})