//ruduce

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

const myTotal = myNums.reduce(
    function (acc,curval){
        //console.log(`acc ${acc} and curval: ${curval}`);
        
        return acc + curval
    },0
)

//console.log(myTotal);



const shopingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "python",
        price : 1999
    },
    {
        itemName : "mobile",
        price : 2999
    },
    {
        itemName : "data science",
        price : 12999
    }
]


const totalshoping = shopingCart.reduce((acc,item)=>
    acc + item.price,0)

console.log(totalshoping);

